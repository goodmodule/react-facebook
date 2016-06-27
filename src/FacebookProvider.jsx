import { Component, PropTypes, Children } from 'react';
import FB from './Facebook';

let facebookInstance = null;

export default class Facebook extends Component {
  static propTypes = {
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
    const props = this.props;

    if (!this.facebook) {
      this.facebook = facebookInstance = facebookInstance || new FB({
        appID: props.appID,
        version: props.version,
        cookie: props.cookie,
        status: props.status,
        xfbml: props.xfbml,
        language: props.language,
        frictionlessRequests: props.frictionlessRequests,
        init: props.init,
      });
    }

    this.facebook.whenReady(callback);
    if (this.props.onReady) {
      this.facebook.whenReady(this.props.onReady);
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}
