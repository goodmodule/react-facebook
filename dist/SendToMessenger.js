'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SendToMessenger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _MessengerSize = require('./constants/MessengerSize');

var _MessengerSize2 = _interopRequireDefault(_MessengerSize);

var _MessengerColor = require('./constants/MessengerColor');

var _MessengerColor2 = _interopRequireDefault(_MessengerColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SendToMessenger(props) {
  const {
    className,
    color,
    appId,
    pageId,
    children,
    dataRef,
    size,
    onParse
  } = props;

  return _react2.default.createElement(
    _Parser2.default,
    { className: className, onParse: onParse },
    _react2.default.createElement(
      'div',
      {
        className: 'fb-send-to-messenger',
        messenger_app_id: appId,
        page_id: pageId,
        'data-color': color,
        'data-size': size,
        'data-ref': dataRef
      },
      children
    )
  );
}

SendToMessenger.propTypes = {
  className: _propTypes2.default.string,
  appId: _propTypes2.default.string.isRequired,
  pageId: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string,
  children: _propTypes2.default.node,
  dataRef: _propTypes2.default.string,
  size: _propTypes2.default.string,
  onParse: _propTypes2.default.func
};

SendToMessenger.defaultProps = {
  color: _MessengerColor2.default.BLUE,
  size: _MessengerSize2.default.STANDARD,
  dataRef: undefined,
  children: undefined,
  className: undefined,
  onParse: undefined
};
//# sourceMappingURL=SendToMessenger.js.map