import React from 'react';
import { mount } from 'enzyme';
import FacebookProvider from './FacebookProvider';
import Share from './Share';

describe('Provider', () => {
  it('should be able to create simple instance of provider', () => {
    const wrapper = mount(
      <FacebookProvider appId="123456789">
        <span>Test</span>
      </FacebookProvider>
    );

    expect(wrapper.html()).toBe('<span>Test</span>');
  });

  it('should be able to create simple instance', (done) => {
    const wrapper = mount((
      <FacebookProvider appId="123456789">
        <Share>
          {({ handleClick }) => (
            <button type="button" onClick={done}>
              Test
            </button>
          )}
        </Share>
      </FacebookProvider>
    ));

    expect(wrapper.html()).toBe('<button type="button">Test</button>');

    done();
  });
});
