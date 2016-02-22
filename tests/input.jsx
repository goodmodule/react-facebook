import React from 'react';
import should from 'should';
import FacebookProvider, { Like, Share, EmbeddedPost } from '../dist';
import { renderJSX } from '../utils/tester';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Provider', () => {
  it('should be able to create simple instance', () => {
    const node = renderJSX(
      <FacebookProvider appID="123456789">
        <Like />
      </FacebookProvider>
    );

    //findDOMNode(node)
  });
});
