import React from 'react';
import { mount } from 'enzyme';
import FacebookProvider from '../src';

describe('Provider', () => {
  it('should be able to create simple instance', () => {
    const wrapper = mount(
      <FacebookProvider appID="123456789">
        <span>Test</span>
      </FacebookProvider>
    );

    expect(wrapper.html()).toBe('<span>Test</span>');
  });
});
