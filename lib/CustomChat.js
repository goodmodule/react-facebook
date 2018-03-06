'use strict';

exports.__esModule = true;
exports.default = CustomChat;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CustomChat(props) {
  var className = props.className,
      dataRef = props.dataRef,
      minimized = props.minimized,
      children = props.children,
      pageId = props.pageId,
      onParse = props.onParse;


  return _react2.default.createElement(
    _Parser2.default,
    { className: className, onParse: onParse },
    _react2.default.createElement(
      'div',
      {
        className: 'fb-customerchat',
        'data-page_id': pageId,
        'data-ref': dataRef,
        'data-minimized': minimized
      },
      children
    )
  );
}

CustomChat.propTypes = {
  className: _propTypes2.default.string,
  dataRef: _propTypes2.default.string,
  pageId: _propTypes2.default.string.isRequired,
  minimized: _propTypes2.default.bool,
  onParse: _propTypes2.default.func,
  children: _propTypes2.default.node
};

CustomChat.defaultProps = {
  minimized: true,
  children: undefined,
  className: undefined,
  dataRef: undefined,
  onParse: undefined
};
//# sourceMappingURL=CustomChat.js.map