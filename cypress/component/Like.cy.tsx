import React from 'react';
import { Like, Comments, FacebookProvider } from '../../dist/esm/index';

describe('Like.cy.js', () => {
  it('Like Button', () => {
    cy.mount((
      <FacebookProvider appId="671184534658954" debug>
        <Like href="https://www.facebook.com/facebook" colorScheme="dark" />
      </FacebookProvider>
    ));

    cy.contains('others like this').should('be.visible')
  })
});
