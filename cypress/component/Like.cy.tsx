import React from 'react';
import { Like, Comments, FacebookProvider } from '../../dist/index.mjs';

describe('Like.cy.js', () => {
  it('Like Button', () => {
    cy.mount((
      <FacebookProvider appId="113869198637480" debug>
        <Like href="https://www.facebook.com/facebook" colorScheme="dark" />
      </FacebookProvider>
    ));

    cy.contains('and 175M').should('be.visible')
  })
});
