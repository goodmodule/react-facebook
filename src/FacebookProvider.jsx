import { Component } from 'react';
import PropTypes from 'prop-types';
import FB from './Facebook';

let facebookInstance = null;

export default class Facebook extends Component {
  static propTypes = {
    appId: PropTypes.string.isRequired,
    domain: PropTypes.string,
    version: PropTypes.string,
    cookie: PropTypes.bool,
    status: PropTypes.bool,
    xfbml: PropTypes.bool,
    language: PropTypes.string,
    frictionlessRequests: PropTypes.bool,
    children: PropTypes.node,
    wait: PropTypes.bool,
  };

  static childContextTypes = {
    facebook: PropTypes.object.isRequired,
  };

  static defaultProps = {
    version: 'v2.9',
    cookie: false,
    status: false,
    xfbml: false,
    language: 'en_US',
    frictionlessRequests: false,
    domain: 'connect.facebook.net',
    children: undefined,
    wait: false,
  };

  getChildContext() {
    return {
      facebook: this,
    };
  }

  async init() {
    if (!this.facebook) {
      const {
        domain,
        version,
        appId,
        cookie,
        status,
        xfbml,
        language,
        frictionlessRequests,
        wait,
      } = this.props;

      this.facebook = facebookInstance || new FB({
        domain,
        appId,
        version,
        cookie,
        status,
        xfbml,
        language,
        frictionlessRequests,
        wait,
      });

      facebookInstance = this.facebook;
    }

    await this.facebook.init();

    return this.facebook;
  }

  render() {
    return this.props.children;
  }
}
