import React from 'react';
import { mount } from 'enzyme';
import FacebookProvider from './FacebookProvider';
import Share from './Share';

describe('Provider', () => {
  it('should be able to create simple instance', () => {
    const wrapper = mount(React.createElement(
      FacebookProvider,
      { appId: '123456789' },
      React.createElement(
        'span',
        null,
        'Test'
      )
    ));

    expect(wrapper.html()).toBe('<span>Test</span>');
  });

  it('should be able to create simple instance', done => {
    const wrapper = mount(React.createElement(
      FacebookProvider,
      { appId: '123456789' },
      React.createElement(
        Share,
        null,
        React.createElement(
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