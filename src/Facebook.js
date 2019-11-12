// @flow
import LoginStatus from './constants/LoginStatus';

export const Method = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
};

export default class Facebook {
  constructor(options = {}) {
    this.options = {
      domain: 'connect.facebook.net',
      version: 'v3.2',
      cookie: false,
      status: false,
      xfbml: false,
      language: 'en_US',
      frictionlessRequests: false,
      debug: false,
      chatSupport: false,
      ...options,
    };

    if (!this.options.appId) {
      throw new Error('You need to set appId');
    }

    if (!this.options.wait) {
      this.init();
    }
  }

  getAppId(): string {
    return this.options.appId;
  }

  async init() {
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
          frictionlessRequests: this.frictionlessRequests,
        });

        resolve(window.FB);
      };

      if (window.document.getElementById('facebook-jssdk')) {
        return resolve(window.FB);
      }

      const js = window.document.createElement('script');
      js.id = 'facebook-jssdk';
      js.async = true;
      js.defer = true;
      js.src = `https://${domain}/${language}/sdk${chatSupport ? '/xfbml.customerchat' : ''}${debug ? '/debug' : ''}.js`;

      window.document.body.appendChild(js);
    });

    return this.loadingPromise;
  }

  async process(method, before = [], after = []) {
    const fb = await this.init();

    return new Promise((resolve, reject) => {
      fb[method](...before, (response) => {
        if (!response) {
          if (method === 'ui') return;
          reject(new Error('Response is undefined'));
        } else if (response.error) {
          const { code, type, message } = response.error;

          const error = new Error(message);
          error.code = code;
          error.type = type;

          reject(error);
        } else {
          resolve(response);
        }
      }, ...after);
    });
  }

  async ui(options) {
    return this.process('ui', [options]);
  }

  async api(path, method = Method.GET, params = {}) {
    return this.process('api', [path, method, params]);
  }

  async login(opts = null) {
    return this.process('login', [], [opts]);
  }

  async logout() {
    return this.process('logout');
  }

  async getLoginStatus() {
    return this.process('getLoginStatus');
  }

  async getAuthResponse() {
    return this.process('getAuthResponse');
  }

  async getTokenDetail(loginResponse) {
    if (loginResponse.status === LoginStatus.CONNECTED && loginResponse.authResponse) {
      return loginResponse.authResponse;
    }

    const response = await this.getLoginStatus();

    if (response.status === LoginStatus.CONNECTED && response.authResponse) {
      return response.authResponse;
    }

    throw new Error('Token is undefined');
  }

  async getProfile(params) {
    return this.api('/me', Method.GET, params);
  }

  async getTokenDetailWithProfile(params, response) {
    const tokenDetail = await this.getTokenDetail(response);
    const profile = await this.getProfile(params);

    return {
      profile,
      tokenDetail,
    };
  }

  async getToken() {
    const authResponse = await this.getTokenDetail();
    return authResponse.accessToken;
  }

  async getUserId() {
    const authResponse = await this.getTokenDetail();
    return authResponse.userID;
  }

  async sendInvite(to, options) {
    return this.ui({
      to,
      method: 'apprequests',
      ...options,
    });
  }


  async postAction(ogNamespace, ogAction, ogObject, ogObjectUrl, noFeedStory) {
    let url = `/me/${ogNamespace}:${ogAction}?${ogObject}=${encodeURIComponent(ogObjectUrl)}`;

    if (noFeedStory === true) {
      url += '&no_feed_story=true';
    }

    return this.api(url, Method.POST);
  }

  async getPermissions() {
    const response = await this.api('/me/permissions');
    return response.data;
  }

  async hasPermissions(permissions) {
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

  async subscribe(eventName, callback) {
    const fb = await this.init();
    fb.Event.subscribe(eventName, callback);
  }

  async unsubscribe(eventName, callback) {
    const fb = await this.init();
    fb.Event.unsubscribe(eventName, callback);
  }

  async parse(parentNode) {
    const fb = await this.init();

    if (typeof parentNode === 'undefined') {
      fb.XFBML.parse();
    } else {
      fb.XFBML.parse(parentNode);
    }
  }

  async getRequests() {
    return this.api('/me/apprequests');
  }

  async removeRequest(requestID) {
    return this.api(requestID, Method.DELETE);
  }

  async setAutoGrow() {
    const fb = await this.init();
    fb.Canvas.setAutoGrow();
  }

  async paySimple(product, quantity = 1) {
    return this.ui({
      method: 'pay',
      action: 'purchaseitem',
      product,
      quantity,
    });
  }

  async pay(product, options) {
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
