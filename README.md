# React Facebook Components

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-facebook.svg?style=flat-square
[npm-url]: https://www.npmjs.com/react-facebook
[travis-image]: https://img.shields.io/travis/seeden/react-facebook/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/seeden/react-facebook
[coveralls-image]: https://img.shields.io/coveralls/seeden/react-facebook/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/seeden/react-facebook?branch=master
[github-url]: https://github.com/seeden/react-facebook

# Components

- Facebook provider (provide settings to child components)
- Login button (provide user profile and signed request)
- Like button
- Share button
- Embedded post

# Support us

Star this project on [GitHub][github-url].

# Usage

## Like button

```js
import React, { Component} from 'react';
import FacebookProvider, { Like } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appID="123456789">
        <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
      </FacebookProvider>
    );
  }
}
```


## Share post

```js
import React, { Component} from 'react';
import FacebookProvider, { Share } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appID="123456789">
        <Share href="http://www.facebook.com" />
      </FacebookProvider>
    );
  }
}
```


## Login

```js
import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';

export default class Example extends Component {
  onFacebookSubmit(data, user_data) {
    console.log(data);
    console.log(user_data);
  }

  render() {
    return (
      <FacebookProvider appID="123456789">
        <Login scope="email" onSubmit={this.onFacebookSubmit.bind(this)} children="Log in with Facebook"/>
      </FacebookProvider>
    );
  }
}
```


## Embedded post

```js
import React, { Component} from 'react';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appID="123456789">
        <EmbeddedPost href="http://www.facebook.com" width="500" />
      </FacebookProvider>
    );
  }
}
```

# Support us

Star this project on [GitHub][github-url].

## Try our other React components

 - Translate your great project [react-translate-maker](https://github.com/CherrySoftware/react-translate-maker)
 - Google Analytics [react-g-analytics](https://github.com/seeden/react-g-analytics)
 - Google AdSense via Google Publisher Tag [react-google-publisher-tag](https://github.com/seeden/react-google-publisher-tag)

## Credits

[Zlatko Fedor](http://github.com/seeden)
