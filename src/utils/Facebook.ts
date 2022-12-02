import LoginStatus from '../constants/LoginStatus';
import FBError from '../errors/FBError';

export type AuthResponse = {
  userID: string; 
  accessToken: string;
};

export type LoginResponse = {
  status: LoginStatus.CONNECTED,
  authResponse: AuthResponse,
} | {
  status: Exclude<LoginStatus, LoginStatus.CONNECTED>,
};

export type LoginOptions = {
  scope?: string;
  returnScopes?: boolean;
  authType?: string[];
  rerequest?: boolean;
  reauthorize?: boolean;
};
declare global {
  interface Window { 
    fbAsyncInit: () => void;
    FB: any;
  }
}

export enum Method {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
};

export enum Namespace {
  UI = 'ui',
  API = 'api',
  LOGIN = 'login',
  LOGOUT = 'logout',
  GET_LOGIN_STATUS = 'getLoginStatus',
  GET_AUTH_RESPONSE = 'getAuthResponse',
}

export type FacebookOptions = {
  domain?: string;
  version?: string;
  cookie?: boolean;
  status?: boolean;
  xfbml?: boolean;
  language?: string;
  frictionlessRequests?: boolean;
  debug?: boolean;
  chatSupport?: boolean;
  appId: string;
  autoLogAppEvents?: boolean;
  lazy?: boolean;
};

const defaultOptions: Omit<FacebookOptions, 'appId'> = {
  domain: 'connect.facebook.net',
  version: 'v15.0',
  cookie: false,
  status: false,
  xfbml: false,
  language: 'en_US',
  frictionlessRequests: false,
  debug: false,
  chatSupport: false,
  autoLogAppEvents: true,
  lazy: false,
};

export default class Facebook {
  options: FacebookOptions;
  loadingPromise: Promise<any> | undefined;

  constructor(options: FacebookOptions) {
    if (!options.appId) {
      throw new Error('You need to set appId');
    }

    this.options = {
      ...defaultOptions,
      ...options,
    };

    if (!this.options.lazy) {
      this.init();
    }
  }

  getAppId() {
    return this.options.appId;
  }

  getFB() {
    return window.FB;
  }

  async init(): Promise<Facebook> {
    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    this.loadingPromise = new Promise((resolve) => {
      const {
        domain,
        language,
        debug,
        chatSupport,
        ...restOptions
      } = this.options;

      window.fbAsyncInit = () => {
        window.FB.init({
          appId: restOptions.appId,
          version: restOptions.version,
          cookie: restOptions.cookie,
          status: restOptions.status,
          xfbml: restOptions.xfbml,
          frictionlessRequests: restOptions.frictionlessRequests,
        });

        resolve(this);
      };

      if (window.document.getElementById('facebook-jssdk')) {
        return resolve(this);
      }
      
      const js = window.document.createElement('script');
      js.id = 'facebook-jssdk';
      js.async = true;
      js.defer = true;
      js.crossOrigin = 'anonymous';
      js.src = `https://${domain}/${language}/sdk${chatSupport ? '/xfbml.customerchat' : ''}${debug ? '/debug' : ''}.js`;

      window.document.body.appendChild(js);
    });

    return this.loadingPromise;
  }

  async process<Response>(namespace: Namespace, before: any[] = [], after: any[] = []): Promise<Response> {
    await this.init();

    const fb = this.getFB();

    return new Promise((resolve, reject) => {
      // @ts-ignore
      fb[namespace](...before, (response: Response | { error: { code: number, type: string, message: string} }) => {
        if (!response) {
          if (namespace === Namespace.UI) return;
          reject(new Error('Response is undefined'));
        } else if (!!response && 'error' in response) {
          const { code, type, message } = response.error;

          reject(new FBError(message, code, type));
        } else {
          resolve(response);
        }
      }, ...after);
    });
  }

  async ui(options: any) {
    return this.process(Namespace.UI, [options]);
  }

  async api<T>(path: string, method = Method.GET, params = {}) {
    return this.process<T>(Namespace.API, [path, method, params]);
  }

  async login(options: LoginOptions) {
    const { scope, authType = [], returnScopes, rerequest, reauthorize } = options;
    const loginOptions: {
      return_scopes?: boolean;
      auth_type?: string;
      scope?: string;
    } = {
      scope,
    };

    if (returnScopes) {
      loginOptions.return_scopes = true;
    }

    if (rerequest) {
      authType.push('rerequest');
    }

    if (reauthorize) {
      authType.push('reauthenticate');
    }

    if (authType.length) {
      loginOptions.auth_type = authType.join(',');
    }

    return this.process<LoginResponse>(Namespace.LOGIN, [], [loginOptions]);
  }

  async logout() {
    return this.process(Namespace.LOGOUT);
  }


  async getLoginStatus(): Promise<LoginResponse> {
    return this.process<LoginResponse>(Namespace.GET_LOGIN_STATUS);
  }

  async getAuthResponse() {
    return this.process(Namespace.GET_AUTH_RESPONSE);
  }

  async getTokenDetail(loginResponse?: LoginResponse): Promise<AuthResponse> {
    if (loginResponse?.status === LoginStatus.CONNECTED) {
      return loginResponse.authResponse;
    }

    const response = await this.getLoginStatus();

    if (response.status === LoginStatus.CONNECTED) {
      return response.authResponse;
    }

    throw new Error('Token is undefined');
  }

  async getProfile(params: any) {
    return this.api('/me', Method.GET, params);
  }

  async getTokenDetailWithProfile(params: any, response: any) {
    const tokenDetail = await this.getTokenDetail(response);
    const profile = await this.getProfile(params);

    return {
      profile,
      tokenDetail,
    };
  }

  async getToken(): Promise<string> {
    const authResponse = await this.getTokenDetail();
    return authResponse.accessToken;
  }

  async getUserId(): Promise<string> {
    const authResponse = await this.getTokenDetail();
    return authResponse.userID;
  }

  async sendInvite(to: string, options: any) {
    return this.ui({
      to,
      method: 'apprequests',
      ...options,
    });
  }

  async postAction(ogNamespace: string, ogAction: string, ogObject: string, ogObjectUrl: string, noFeedStory: boolean = false) {
    let url = `/me/${ogNamespace}:${ogAction}?${ogObject}=${encodeURIComponent(ogObjectUrl)}`;

    if (noFeedStory === true) {
      url += '&no_feed_story=true';
    }

    return this.api(url, Method.POST);
  }

  async getPermissions() {
    const response = await this.api<{ data: any }>('/me/permissions');
    return response.data as {
      permission: string;
      status: 'granted';
    }[];
  }

  async hasPermissions(permissions: string[]) {
    const usersPermissions = await this.getPermissions();

    const findedPermissions = permissions.filter((p) => {
      const currentPermission = usersPermissions.find((row) => {
        const { permission, status } = row;
        return status === 'granted' && permission === p;
      });

      return !!currentPermission;
    });

    return findedPermissions.length === permissions.length;
  }

  async subscribe<T>(eventName: string, callback: (value: T) => void) {
    await this.init();
    this.getFB().Event.subscribe(eventName, callback);

    return () => this.unsubscribe(eventName, callback);
  }

  async unsubscribe<T>(eventName: string, callback: (value: T) => void) {
    await this.init();
    this.getFB().Event.unsubscribe(eventName, callback);
  }

  async parse(parentNode: HTMLElement) {
    await this.init();

    if (typeof parentNode === 'undefined') {
      this.getFB().XFBML.parse();
    } else {
      this.getFB().XFBML.parse(parentNode);
    }
  }

  async getRequests() {
    return this.api('/me/apprequests');
  }

  async removeRequest(requestId: string) {
    return this.api(requestId, Method.DELETE);
  }

  async setAutoGrow() {
    await this.init();
    this.getFB().Canvas.setAutoGrow();
  }

  async paySimple(product: string, quantity = 1) {
    return this.ui({
      method: 'pay',
      action: 'purchaseitem',
      product,
      quantity,
    });
  }

  async pay(product: string, options: any) {
    return this.ui({
      method: 'pay',
      action: 'purchaseitem',
      product,
      ...options,
    });
  }
}

/*
  sendToFriends: function(options, callback) {
    if(!options) {
      options = {};
    }

    options.method = 'send';

    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  sendMessage: function(message, name, caption, description, url, imgUrl, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui({
        method: 'stream.publish',
        message: message,
        attachment: {
          name: name,
          caption: caption,
          description: description,
          href: url,
          media:[{
            type: 'image',
            src:  imgUrl,
            href: url
          }]
        },
        action_links: [{
          text: 'Code',
          href: url
        }],
        user_prompt_message: message
      },
      function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  sendInviteForm: function(options, callback) {
    if(typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      options.method = options.method || 'apprequests';


      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  checkPageLike: function(pageID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      fbApi.getUserID(function(err, userID) {
        if(err) {
          return callback(err);
        }

        var fqlQuery = `SELECT uid FROM page_fan WHERE page_id = ${pageID} and uid = ${userID}`;
        var query = FB.Data.query(fqlQuery);

        query.wait(function(rows) {
          if (rows.length === 1 && rows[0].uid === userID) {
            callback(null, true, query);
          }
          else {
            callback(null, false, query);
          }
        });
      });
    });
  },

  sendMessageToFriend: function (friendID, link, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui({
        to: friendID,
        method: 'send',
        link: link
      }, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  _prepareUsers: function(data) {
    var users=[];

    for(var index in data) {
      var userData=data[index];

      var user = {
        provider_uid: 'facebook'+'_'+userData.uid,
        provider: 'facebook',
        id: userData.uid,
        name: userData.name,
        first_name: userData.first_name,
        last_name: userData.last_name,
        status: (userData.status!==null) ? userData.status : null,
        image: '//graph.facebook.com/'+userData.uid+'/picture?'
      };

      users.push(user);
    }

    return users;
  },

  getUserList: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('fql', {
        q: `
          SELECT uid, name, first_name, last_name, online_presence, status
          FROM user
          WHERE uid IN
            ( SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY name
        `,
      }, function (response)
      {
        var users = fbApi._prepareUsers(response.data);
        callback(null, users, response);
      });
    });
  },

  postFeed: function(options, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      options.method='feed';

      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //need publish_stream
  createAlbum: function(name, description, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/albums', 'post', {
        name: name,
        description: description
      },function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //need publish_stream
  addImageToAlbum: function(albumID, imageURL, message, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/photos', 'post', {
        message: message,
        url: imageURL
      }, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbums: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/albums', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbumPhotos: function(albumID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/photos', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbumCoverPicture: function(albumID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/picture', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'publish_stream'
  postPhoto: function(photoUrl, message, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/photos', 'post', {
        message: message,
        url: photoUrl
      },function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  getPageInfo: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.Canvas.getPageInfo(function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  }
*/
