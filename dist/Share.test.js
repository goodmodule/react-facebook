'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _FacebookProvider = require('./FacebookProvider');

var _FacebookProvider2 = _interopRequireDefault(_FacebookProvider);

var _Share = require('./Share');

var _Share2 = _interopRequireDefault(_Share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Provider', () => {
  it('should be able to create simple instance', () => {
    const wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _FacebookProvider2.default,
      { appId: '123456789' },
      _react2.default.createElement(
        'span',
        null,
        'Test'
      )
    ));

    expect(wrapper.html()).toBe('<span>Test</span>');
  });

  it('should be able to create simple instance', done => {
    const wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _FacebookProvider2.default,
      { appId: '123456789' },
      _react2.default.createElement(
        _Share2.default,
        null,
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: done },
          'Test'
        )
      )
    ));

    expect(wrapper.html()).toBe('<button type="button">Test</button>');

    wrapper.find('button').first().simulate('click');

    done();
  });
});
//# sourceMappingURL=Share.test.js.map