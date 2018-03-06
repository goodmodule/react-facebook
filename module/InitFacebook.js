import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import { Component } from 'react';
import PropTypes from 'prop-types';
import canUseDOM from 'can-use-dom';

export default class InitFacebook extends Component {

  componentDidMount() {
    if (canUseDOM) {
      this.initFacebook();
    }
  }

  initFacebook() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const { onReady } = _this.props;

      const facebook = yield _this.context.facebook.init();
      onReady(facebook);
    })();
  }

  render() {
    return this.props.children;
  }
}
InitFacebook.propTypes = {
  children: PropTypes.node,
  onReady: PropTypes.func.isRequired
};
InitFacebook.defaultProps = {
  children: undefined
};
InitFacebook.contextTypes = {
  facebook: PropTypes.object.isRequired
};
//# sourceMappingURL=InitFacebook.js.map