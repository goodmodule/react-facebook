import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import { Component } from 'react';
import PropTypes from 'prop-types';
import FB from './Facebook';

let facebookInstance = null;

export default class Facebook extends Component {

  getChildContext() {
    return {
      facebook: this
    };
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!_this.facebook) {
        const {
          domain,
          version,
          appId,
          cookie,
          status,
          xfbml,
          language,
          frictionlessRequests,
          wait
        } = _this.props;

        _this.facebook = facebookInstance || new FB({
          domain,
          appId,
          version,
          cookie,
          status,
          xfbml,
          language,
          frictionlessRequests,
          wait
        });

        facebookInstance = _this.facebook;
      }

      yield _this.facebook.init();

      return _this.facebook;
    })();
  }

  render() {
    return this.props.children;
  }
}
Facebook.propTypes = {
  appId: PropTypes.string.isRequired,
  domain: PropTypes.string,
  version: PropTypes.string,
  cookie: PropTypes.bool,
  status: PropTypes.bool,
  xfbml: PropTypes.bool,
  language: PropTypes.string,
  frictionlessRequests: PropTypes.bool,
  children: PropTypes.node,
  wait: PropTypes.bool
};
Facebook.childContextTypes = {
  facebook: PropTypes.object.isRequired
};
Facebook.defaultProps = {
  version: 'v2.9',
  cookie: false,
  status: false,
  xfbml: false,
  language: 'en_US',
  frictionlessRequests: false,
  domain: 'connect.facebook.net',
  children: undefined,
  wait: false
};
//# sourceMappingURL=FacebookProvider.js.map