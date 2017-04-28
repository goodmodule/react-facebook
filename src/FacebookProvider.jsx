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
    init: PropTypes.bool.isRequired,
  };

  static childContextTypes = {
    facebook: PropTypes.object.isRequired,
  };

  static defaultProps = {
    version: undefined,
    cookie: undefined,
    status: undefined,
    xfbml: undefined,
    language: undefined,
    frictionlessRequests: undefined,
    domain: undefined,
    children: undefined,
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
        init,
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
        init,
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
