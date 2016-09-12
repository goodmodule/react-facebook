import keymirror from 'keymirror';

export const InitStatus = keymirror({
  LOADING: null,
  SUCCESS: null,
  TIMEOUT: null,
});

export const LoginStatus = keymirror({
  AUTHORIZED: null,
  UNAUTHORIZED: null,
  GUEST: null,
});

export const Method = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
};

function api(path, method, params, callback) {
  if (typeof params === 'function') {
    return api(path, method, {}, params);
  }

  if (typeof method === 'function') {
    return api(path, 'get', {}, method);
  }

  const FB = window.FB;
  if (!FB) {
    callback(new Error('FB is not initialized'));
    return undefined;
  }

  return FB.api(path, method, params, callback);
}

export default class Facebook {
  constructor(options = {}) {
    this.domain = options.domain || 'connect.facebook.net';
    this._appID = options.appID || null;
    this._version = options.version || 'v2.5';
    this._cookie = options.cookie || false;
    this._status = options.status || false;
    this._xfbml = options.xfbml || false;
    this._language = options.language || 'en_US';
    this._frictionlessRequests = options.frictionlessRequests || false;

    this._loaded = false;
    this._initialized = false;

    this._callbacks = [];

    if (options.init !== false) {
      this._loadScript();
    }
  }

  _loadScript() {
    if (!this._appID) {
      throw new Error('Facebook app id is not defined');
    }

    if (this._loaded) {
      throw new Error('FB script is already added to the DOM');
    }

    this._loaded = true;

    window.fbAsyncInit = () => this._initFB();

    const fjs = document.getElementsByTagName('script')[0];
    if (document.getElementById('facebook-jssdk')) {
      return;
    }

    const js = document.createElement('script');
    js.id = 'facebook-jssdk';
    js.src = `//${this.domain}/${this._language}/sdk.js`;

    fjs.parentNode.insertBefore(js, fjs);
  }

  _initFB() {
    window.FB.init({
      appId: this._appID,
      version: this._version,
      cookie: this._cookie,
      status: this._status,
      xfbml: this._xfbml,
      frictionlessRequests: this._frictionlessRequests,
    });

    this._initialized = true;

    // call callbacks
    this._callbacks.forEach(callback => this.whenReady(callback));
    this._callbacks = [];
  }

  whenReady(callback) {
    if (!this._loaded) {
      this._loadScript();
    }

    if (!this._initialized) {
      this._callbacks.push(callback);
    } else {
      callback(null, this);
    }

    return this;
  }

  callCallbackByResponse(cb, response) {
    if (!response) {
      cb(new Error('Response is undefined'));
      return;
    }

    cb(null, response);
  }

  login(opts, callback) {
    if (typeof opts === 'function') {
      this.login(null, opts);
      return;
    }

    this.whenReady(err => {
      if (err) {
        callback(err);
        return;
      }

      window.FB.login((response) => {
        if (response.status === 'connected') {
          callback(null, LoginStatus.AUTHORIZED, response);
        } else if (response.status === 'not_authorized') {
          callback(null, LoginStatus.UNAUTHORIZED, response);
        } else {
          callback(null, LoginStatus.GUEST, response);
        }
      }, opts);
    });
  }

  getLoginStatus(callback) {
    this.whenReady(err => {
      if (err) {
        callback(err);
        return;
      }

      window.FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          callback(null, LoginStatus.AUTHORIZED, response);
        } else if (response.status === 'not_authorized') {
          callback(null, LoginStatus.UNAUTHORIZED, response);
        } else {
          callback(null, LoginStatus.GUEST, response);
        }
      });
    });
  }

  getTokenDetail(callback) {
    this.whenReady(err => {
      if (err) {
        callback(err);
        return;
      }

      const authResponse = window.FB.getAuthResponse();
      if (!authResponse.accessToken) {
        callback(new Error('Token is undefined'));
        return;
      }

      callback(null, authResponse);
    });
  }

  getTokenDetailWithProfile(params, callback) {
    if (typeof params === 'function') {
      this.getTokenDetailWithProfile({}, params);
      return;
    }

    this.getTokenDetail((err, tokenDetail) => {
      if (err) {
        callback(err);
        return;
      }

      this.getProfile(params, (err2, profile) => {
        if (err2) {
          callback(err2);
          return;
        }

        callback(null, {
          tokenDetail,
          profile,
        });
      });
    });
  }

  getToken(callback) {
    this.getTokenDetail((err, authResponse) => {
      if (err) {
        callback(err);
        return;
      }

      callback(null, authResponse.accessToken);
    });
  }

  getUserID(callback) {
    this.getTokenDetail((err, authResponse) => {
      if (err) {
        callback(err);
        return;
      }

      callback(null, authResponse.userID);
    });
  }

  sendInvite(to, options, callback) {
    this.whenReady((err, facebook) => {
      if (err) {
        callback(err);
        return;
      }

      window.FB.ui({
        to,
        method: 'apprequests',
        ...options,
      }, (response) => {
        facebook.callCallbackByResponse(callback, response);
      });
    });
  }

  api(path, method, params, callback) {
    return api(path, method, params, callback);
  }

  postAction(ogNamespace, ogAction, ogObject, ogObjectUrl, noFeedStory, callback) {
    if (typeof noFeedStory === 'function') {
      this.postAction(ogNamespace, ogAction, ogObject, ogObjectUrl, false, noFeedStory);
      return;
    }

    let url = `/me/${ogNamespace}:${ogAction}?${ogObject}=${encodeURIComponent(ogObjectUrl)}`;

    if (noFeedStory === true) {
      url += '&no_feed_story=true';
    }

    this.whenReady((err, facebook) => {
      if (err) {
        callback(err);
        return;
      }

      api(url, Method.POST, response => {
        facebook.callCallbackByResponse(callback, response);
      });
    });
  }

  getPermissions(callback) {
    this.whenReady(err => {
      if (err) {
        callback(err);
        return;
      }

      api('/me/permissions', response => {
        if (!response || !response.data[0]) {
          callback(new Error('Response is undefined'));
          return;
        }

        const perms = response.data[0];
        callback(null, perms, response);
      });
    });
  }

  hasPermissions(permissions, callback) {
    this.getPermissions((err, userPermissions) => {
      if (err) {
        callback(err);
        return;
      }

      for (const index in permissions) {
        if (!permissions.hasOwnProperty(index)) {
          continue;
        }

        const permission = permissions[index];

        if (!userPermissions[permission]) {
          callback(null, false, userPermissions);
          return;
        }
      }

      callback(null, true, userPermissions);
    });
  }

  subscribe(what, callback) {
    this.whenReady(err => {
      if (err) {
        callback(err);
        return;
      }

      window.FB.Event.subscribe(what, (href, widget) => {
        callback(null, href, widget);
      });
    });
  }

  parse(parentNode, callback) {
    this.whenReady(err => {
      if (err) {
        callback(err);
        return;
      }

      if (typeof parentNode === 'undefined') {
        window.FB.XFBML.parse();
      } else {
        window.FB.XFBML.parse(parentNode);
      }

      callback(null);
    });
  }

  getProfile(params, callback) {
    if (typeof params === 'function') {
      this.getProfile({}, params);
      return;
    }

    this.whenReady((err, facebook) => {
      if (err) {
        callback(err);
        return;
      }

      api('/me', Method.GET, params, (response) => {
        facebook.callCallbackByResponse(callback, response);
      });
    });
  }

  getRequests(callback) {
    this.whenReady((err, facebook) => {
      if (err) {
        callback(err);
        return;
      }

      api('/me/apprequests', response => {
        facebook.callCallbackByResponse(callback, response);
      });
    });
  }

  removeRequest(requestID, callback) {
    this.whenReady((err, facebook) => {
      if (err) {
        callback(err);
        return;
      }

      api(requestID, Method.DELETE, response => {
        facebook.callCallbackByResponse(callback, response);
      });
    });
  }

  setAutoGrow(callback) {
    this.whenReady(err => {
      if (err) {
        callback(err);
        return;
      }

      window.FB.Canvas.setAutoGrow();
      callback(null);
    });
  }

  paySimple(productUrl, quantity, callback) {
    if (typeof quantity === 'function') {
      this.paySimple(productUrl, 1, quantity);
      return;
    }

    this.whenReady((err, facebook) => {
      if (err) {
        callback(err);
        return;
      }

      window.FB.ui({
        method: 'pay',
        action: 'purchaseitem',
        product: productUrl,
        quantity: quantity || 1, // optional, defaults to 1
      }, response => {
        facebook.callCallbackByResponse(callback, response);
      });
    });
  }

  pay(productUrl, options, callback) {
    this.whenReady((err, facebook) => {
      if (err) {
        callback(err);
        return;
      }

      window.FB.ui({
        method: 'pay',
        action: 'purchaseitem',
        product: productUrl,
        ...options,
      }, response => {
        facebook.callCallbackByResponse(callback, response);
      });
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

        var fqlQuery = 'SELECT uid FROM page_fan WHERE page_id = ' + pageID + ' and uid =  '+ userID;
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

      FB.api('fql', { q: 'SELECT uid, name, first_name, last_name, online_presence, status FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY name' }, function (response)
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
