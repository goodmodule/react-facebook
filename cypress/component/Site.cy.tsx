import React from 'react';
import {   
  FacebookProvider,
  ShareButton,
  Comments,
  Like,
  Page,
  Share,
} from '../../dist/esm/index';

describe('Site.cy.js', () => {
  it('Site', () => {
    cy.mount((
      <FacebookProvider appId="671184534658954" debug>
        <h3>Page:</h3>
        <Page href="https://www.facebook.com/facebook" tabs="timeline" />

        <h3>Like:</h3>
        <Like href="https://www.facebook.com/facebook" share />

        <h3>Share:</h3>
        <ShareButton href="https://www.facebook.com">Share Button</ShareButton>

        <h3>Share:</h3>
        <Share href="https://developers.facebook.com/docs/plugins/" layout="button_count" />

        <h3>Comments:</h3>
        <Comments href="http://www.facebook.com" />
      </FacebookProvider>
    ));

  })
});

