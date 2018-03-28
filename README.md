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
- Share and Share button
- Comments
- Comments count
- Embedded post
- Embedded video
- Page
- Feed
- Message Us
- Customer Chat

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
      <FacebookProvider appId="123456789">
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
      <FacebookProvider appId="123456789">
        <Share href="http://www.facebook.com">
          <button type="button">Share</button>
        </Share>
      </FacebookProvider>
    );
  }
}
```

## Share button

You can use predefined button with bootstrap and font awesome classNames

```js
import React, { Component} from 'react';
import FacebookProvider, { ShareButton } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <ShareButton href="http://www.facebook.com" />
      </FacebookProvider>
    );
  }
}
```

## Comments

```js
import React, { Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Comments href="http://www.facebook.com" />
      </FacebookProvider>
    );
  }
}
```

## Comments count

```js
import React, { Component} from 'react';
import FacebookProvider, { CommentsCount } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <CommentsCount href="http://www.facebook.com" />
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
  handleResponse = (data) => {
    console.log(data);
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render() {
    return (
      <FacebookProvider appId="123456789">
        <Login
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login via Facebook</span>
        </Login>
      </FacebookProvider>
    );
  }
}
```

### Custom login render

If you want to use custom component you can use render or component property.

```js
import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';

export default class Example extends Component {
  handleResponse = (data) => {
    console.log(data);
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render() {
    return (
      <FacebookProvider appId="123456789">
        <Login
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
          render={({ isLoading, isWorking, onClick }) => (
            <span onClick={onClick}>
              Login via Facebook
              {(isLoading || isWorking) && (
                <span>Loading...</span>
              )}
            </span>
          )}
        />
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
      <FacebookProvider appId="123456789">
        <EmbeddedPost href="http://www.facebook.com" width="500" />
      </FacebookProvider>
    );
  }
}
```


## Page

```js
import React, { Component} from 'react';
import FacebookProvider, { Page } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Page href="https://www.facebook.com" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}
```

## MessageUs

```js
import React, { Component} from 'react';
import FacebookProvider, { MessageUs } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <MessageUs messengerAppId="123456789" pageId="123456789"/>
      </FacebookProvider>    
    );
  }
}
```

## SendToMessenger

```js
import React, { Component} from 'react';
import FacebookProvider, { SendToMessenger } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <SendToMessenger messengerAppId="123456789" pageId="123456789"/>
      </FacebookProvider>    
    );
  }
}
```


## MessengerCheckbox

```js
import React, { Component} from 'react';
import FacebookProvider, { MessengerCheckbox } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <MessengerCheckbox messengerAppId="123456789" pageId="123456789"/>
      </FacebookProvider>    
    );
  }
}
```


## CustomChat

```js
import React, { Component} from 'react';
import FacebookProvider, { CustomChat } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <CustomChat  pageId="123456789" minimized={false}/>
      </FacebookProvider>    
    );
  }
}
```

# Support us

Star this project on [GitHub][github-url].

## Try our other React components

 - Translate your great project [react-translate-maker](https://github.com/CherryProjects/react-translate-maker)
 - Google Analytics [react-g-analytics](https://github.com/seeden/react-g-analytics)
 - Google AdSense via Google Publisher Tag [react-google-publisher-tag](https://github.com/seeden/react-google-publisher-tag)

## Credits

[Zlatko Fedor](http://github.com/seeden)
