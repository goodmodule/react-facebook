import _extends from 'babel-runtime/helpers/extends';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import PropTypes from 'prop-types';
import getCurrentHref from './utils/getCurrentHref';
import clearUndefinedProperties from './utils/clearUndefinedProperties';
import Process from './Process';

export default class Share extends Process {

  process(facebook) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const {
        href = getCurrentHref(),
        display,
        appId = facebook.getAppId(),
        hashtag,
        redirectURI,
        quote,
        mobileIframe
      } = _this.props;

      return facebook.ui(clearUndefinedProperties({
        method: 'share',
        href,
        display,
        app_id: appId,
        hashtag,
        redirect_uri: redirectURI,
        quote,
        mobile_iframe: mobileIframe
      }));
    })();
  }
}
Share.propTypes = _extends({}, Process.propTypes, {
  href: PropTypes.string,
  hashtag: PropTypes.string,
  quote: PropTypes.string,
  mobileIframe: PropTypes.bool,
  display: PropTypes.string,
  appId: PropTypes.string,
  redirectURI: PropTypes.string
});
Share.defaultProps = _extends({}, Process.defaultProps, {
  href: undefined,
  hashtag: undefined,
  quote: undefined,
  mobileIframe: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});
//# sourceMappingURL=Share.js.map