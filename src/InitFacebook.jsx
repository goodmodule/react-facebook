import { Component } from 'react';
import PropTypes from 'prop-types';
import canUseDOM from 'can-use-dom';

export default class InitFacebook extends Component {
  static propTypes = {
    children: PropTypes.node,
    onReady: PropTypes.func.isRequired,
  };

  static defaultProps = {
    children: undefined,
  };

  static contextTypes = {
    facebook: PropTypes.object.isRequired,
  };

  componentDidMount() {
    if (canUseDOM) {
      this.initFacebook();
    }
  }

  async initFacebook() {
    const { onReady } = this.props;

    const facebook = await this.context.facebook.init();
    onReady(facebook);
  }

  render() {
    return this.props.children;
  }
}
