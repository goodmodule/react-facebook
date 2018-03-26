'use strict';

exports.__esModule = true;
exports.default = exports.Method = exports.LoginStatus = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('react-facebook:facebook');

var LoginStatus = exports.LoginStatus = {
  CONNECTED: 'connected',
  NOT_AUTHORIZED: 'not_authorized'
};

var Method = exports.Method = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete'
};

var Facebook = function () {
  function Facebook() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Facebook);

    this.options = (0, _extends3.default)({
      domain: 'connect.facebook.net',
      version: 'v2.9',
      cookie: false,
      status: false,
      xfbml: false,
      language: 'en_US',
      frictionlessRequests: false
    }, options);

    if (!this.options.appId) {
      throw new Error('You need to set appId');
    }

    if (!this.options.wait) {
      this.init();
    }
  }

  Facebook.prototype.getAppId = function getAppId() {
    return this.options.appId;
  };

  Facebook.prototype.init = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this = this;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.loadingPromise) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', this.loadingPromise);

            case 2:

              this.loadingPromise = new Promise(function (resolve) {
                var options = _this.options;


                window.fbAsyncInit = function () {
                  window.FB.init({
                    appId: options.appId,
                    version: options.version,
                    cookie: options.cookie,
                    status: options.status,
                    xfbml: options.xfbml,
                    frictionlessRequests: _this.frictionlessRequests
                  });

                  resolve(window.FB);
                };

                var fjs = document.getElementsByTagName('script')[0];
                if (!fjs) {
                  log('Script tag does not exists in the DOM');
                  return;
                }

                if (document.getElementById('facebook-jssdk')) {
                  return;
                }

                var js = document.createElement('script');
                js.id = 'facebook-jssdk';
                js.async = true;
                js.src = '//' + options.domain + '/' + options.language + '/sdk.js';

                fjs.parentNode.insertBefore(js, fjs);
              });

              return _context.abrupt('return', this.loadingPromise);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function init() {
      return _ref.apply(this, arguments);
    }

    return init;
  }();

  Facebook.prototype.process = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(method) {
      var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var fb;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.init();

            case 2:
              fb = _context2.sent;
              return _context2.abrupt('return', new Promise(function (resolve, reject) {
                fb[method].apply(fb, before.concat([function (response) {
                  if (!response || response.error) {
                    reject(new Error(response && response.error || 'Response is undefined'));
                    return;
                  }

                  resolve(response);
                }], after));
              }));

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function process(_x2) {
      return _ref2.apply(this, arguments);
    }

    return process;
  }();

  Facebook.prototype.ui = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(options) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', this.process('ui', [options]));

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function ui(_x5) {
      return _ref3.apply(this, arguments);
    }

    return ui;
  }();

  Facebook.prototype.api = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(path) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Method.GET;
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt('return', this.process('api', [path, method, params]));

            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function api(_x6) {
      return _ref4.apply(this, arguments);
    }

    return api;
  }();

  Facebook.prototype.login = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt('return', this.process('login', [], [opts]));

            case 1:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function login() {
      return _ref5.apply(this, arguments);
    }

    return login;
  }();

  Facebook.prototype.logout = function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt('return', this.process('logout'));

            case 1:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function logout() {
      return _ref6.apply(this, arguments);
    }

    return logout;
  }();

  Facebook.prototype.getLoginStatus = function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt('return', this.process('getLoginStatus'));

            case 1:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getLoginStatus() {
      return _ref7.apply(this, arguments);
    }

    return getLoginStatus;
  }();

  Facebook.prototype.getAuthResponse = function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt('return', this.process('getAuthResponse'));

            case 1:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function getAuthResponse() {
      return _ref8.apply(this, arguments);
    }

    return getAuthResponse;
  }();

  Facebook.prototype.getTokenDetail = function () {
    var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
      var response;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.getLoginStatus();

            case 2:
              response = _context9.sent;

              if (!(response.status === LoginStatus.CONNECTED && response.authResponse)) {
                _context9.next = 5;
                break;
              }

              return _context9.abrupt('return', response.authResponse);

            case 5:
              throw new Error('Token is undefined');

            case 6:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function getTokenDetail() {
      return _ref9.apply(this, arguments);
    }

    return getTokenDetail;
  }();

  Facebook.prototype.getProfile = function () {
    var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(params) {
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt('return', this.api('/me', Method.GET, params));

            case 1:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function getProfile(_x10) {
      return _ref10.apply(this, arguments);
    }

    return getProfile;
  }();

  Facebook.prototype.getTokenDetailWithProfile = function () {
    var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(params) {
      var tokenDetail, profile;
      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.getTokenDetail();

            case 2:
              tokenDetail = _context11.sent;
              _context11.next = 5;
              return this.getProfile(params);

            case 5:
              profile = _context11.sent;
              return _context11.abrupt('return', {
                profile: profile,
                tokenDetail: tokenDetail
              });

            case 7:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function getTokenDetailWithProfile(_x11) {
      return _ref11.apply(this, arguments);
    }

    return getTokenDetailWithProfile;
  }();

  Facebook.prototype.getToken = function () {
    var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
      var authResponse;
      return _regenerator2.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this.getTokenDetail();

            case 2:
              authResponse = _context12.sent;
              return _context12.abrupt('return', authResponse.accessToken);

            case 4:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function getToken() {
      return _ref12.apply(this, arguments);
    }

    return getToken;
  }();

  Facebook.prototype.getUserId = function () {
    var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
      var authResponse;
      return _regenerator2.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this.getTokenDetail();

            case 2:
              authResponse = _context13.sent;
              return _context13.abrupt('return', authResponse.userID);

            case 4:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function getUserId() {
      return _ref13.apply(this, arguments);
    }

    return getUserId;
  }();

  Facebook.prototype.sendInvite = function () {
    var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(to, options) {
      return _regenerator2.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt('return', this.ui((0, _extends3.default)({
                to: to,
                method: 'apprequests'
              }, options)));

            case 1:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function sendInvite(_x12, _x13) {
      return _ref14.apply(this, arguments);
    }

    return sendInvite;
  }();

  Facebook.prototype.postAction = function () {
    var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(ogNamespace, ogAction, ogObject, ogObjectUrl, noFeedStory) {
      var url;
      return _regenerator2.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              url = '/me/' + ogNamespace + ':' + ogAction + '?' + ogObject + '=' + encodeURIComponent(ogObjectUrl);


              if (noFeedStory === true) {
                url += '&no_feed_story=true';
              }

              return _context15.abrupt('return', this.api(url, Method.POST));

            case 3:
            case 'end':
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function postAction(_x14, _x15, _x16, _x17, _x18) {
      return _ref15.apply(this, arguments);
    }

    return postAction;
  }();

  Facebook.prototype.getPermissions = function () {
    var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {
      var response;
      return _regenerator2.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return this.api('/me/permissions');

            case 2:
              response = _context16.sent;
              return _context16.abrupt('return', response.data);

            case 4:
            case 'end':
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function getPermissions() {
      return _ref16.apply(this, arguments);
    }

    return getPermissions;
  }();

  Facebook.prototype.hasPermissions = function () {
    var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(permissions) {
      var usersPermissions, findedPermissions;
      return _regenerator2.default.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return this.getPermissions();

            case 2:
              usersPermissions = _context17.sent;
              findedPermissions = permissions.filter(function (p) {
                return !!usersPermissions.find(function (row) {
                  var permission = row.permission,
                      status = row.status;

                  return status === 'granted' && permission === p;
                });
              });
              return _context17.abrupt('return', findedPermissions.length === permissions.length);

            case 5:
            case 'end':
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    function hasPermissions(_x19) {
      return _ref17.apply(this, arguments);
    }

    return hasPermissions;
  }();

  Facebook.prototype.subscribe = function () {
    var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18(eventName, callback) {
      var fb;
      return _regenerator2.default.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return this.init();

            case 2:
              fb = _context18.sent;

              fb.Event.subscribe(eventName, callback);

            case 4:
            case 'end':
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function subscribe(_x20, _x21) {
      return _ref18.apply(this, arguments);
    }

    return subscribe;
  }();

  Facebook.prototype.unsubscribe = function () {
    var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19(eventName, callback) {
      var fb;
      return _regenerator2.default.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return this.init();

            case 2:
              fb = _context19.sent;

              fb.Event.unsubscribe(eventName, callback);

            case 4:
            case 'end':
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));

    function unsubscribe(_x22, _x23) {
      return _ref19.apply(this, arguments);
    }

    return unsubscribe;
  }();

  Facebook.prototype.parse = function () {
    var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20(parentNode) {
      var fb;
      return _regenerator2.default.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return this.init();

            case 2:
              fb = _context20.sent;


              if (typeof parentNode === 'undefined') {
                fb.XFBML.parse();
              } else {
                fb.XFBML.parse(parentNode);
              }

            case 4:
            case 'end':
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function parse(_x24) {
      return _ref20.apply(this, arguments);
    }

    return parse;
  }();

  Facebook.prototype.getRequests = function () {
    var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21() {
      return _regenerator2.default.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              return _context21.abrupt('return', this.api('/me/apprequests'));

            case 1:
            case 'end':
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));

    function getRequests() {
      return _ref21.apply(this, arguments);
    }

    return getRequests;
  }();

  Facebook.prototype.removeRequest = function () {
    var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22(requestID) {
      return _regenerator2.default.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              return _context22.abrupt('return', this.api(requestID, Method.DELETE));

            case 1:
            case 'end':
              return _context22.stop();
          }
        }
      }, _callee22, this);
    }));

    function removeRequest(_x25) {
      return _ref22.apply(this, arguments);
    }

    return removeRequest;
  }();

  Facebook.prototype.setAutoGrow = function () {
    var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23() {
      var fb;
      return _regenerator2.default.wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return this.init();

            case 2:
              fb = _context23.sent;

              fb.Canvas.setAutoGrow();

            case 4:
            case 'end':
              return _context23.stop();
          }
        }
      }, _callee23, this);
    }));

    function setAutoGrow() {
      return _ref23.apply(this, arguments);
    }

    return setAutoGrow;
  }();

  Facebook.prototype.paySimple = function () {
    var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee24(product) {
      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return _regenerator2.default.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              return _context24.abrupt('return', this.ui({
                method: 'pay',
                action: 'purchaseitem',
                product: product,
                quantity: quantity
              }));

            case 1:
            case 'end':
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    function paySimple(_x26) {
      return _ref24.apply(this, arguments);
    }

    return paySimple;
  }();

  Facebook.prototype.pay = function () {
    var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee25(product, options) {
      return _regenerator2.default.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              return _context25.abrupt('return', this.ui((0, _extends3.default)({
                method: 'pay',
                action: 'purchaseitem',
                product: product
              }, options)));

            case 1:
            case 'end':
              return _context25.stop();
          }
        }
      }, _callee25, this);
    }));

    function pay(_x28, _x29) {
      return _ref25.apply(this, arguments);
    }

    return pay;
  }();

  return Facebook;
}();

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


exports.default = Facebook;
//# sourceMappingURL=Facebook.js.map