import { Component } from 'react';
import PropTypes from 'prop-types';
import FB from './Facebook';

let facebookInstance = null;

export default class Facebook extends Component {
  static propTypes = {
    domain: PropTypes.string,
    appID: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    cookie: PropTypes.bool.isRequired,
    status: PropTypes.bool.isRequired,
    xfbml: PropTypes.bool.isRequired,
    language: PropTypes.string.isRequired,
    frictionlessRequests: PropTypes.bool.isRequired,
    children: PropTypes.node,
    init: PropTypes.bool.isRequired,
    onReady: PropTypes.func,
  };

  static childContextTypes = {
    facebook: PropTypes.object.isRequired,
  };

  static defaultProps = {
    version: 'v2.5', // or v2.0, v2.1, v2.2, v2.3
    cookie: false,
    status: false,
    xfbml: false,
    language: 'en_US',
    frictionlessRequests: false,
    init: false,
  };

  getChildContext() {
    return {
      facebook: this,
    };
  }

  whenReady(callback) {
    const {
      domain,
      version,
      appID,
      cookie,
      status,
      xfbml,
      language,
      frictionlessRequests,
      init,
    } = this.props;

    if (!this.facebook) {
      this.facebook = facebookInstance = facebookInstance || new FB({
        domain,
        appID,
        version,
        cookie,
        status,
        xfbml,
        language,
        frictionlessRequests,
        init,
      });
    }

    this.facebook.whenReady(callback);
    if (this.props.onReady) {
      this.facebook.whenReady(this.props.onReady);
    }
  }

  dismiss(callback) {
    if (this.facebook) {
      this.facebook.dismiss(callback);
    }
  }

  render() {
    return this.props.children;
  }
}
