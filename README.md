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
- Group
- Message Us
- Customer Chat
- Status
- Subscribe
- User Profile

# Support us

Star this project on [GitHub][github-url].

# Initialisation

By default FacebookProvider is loading facebook script immediately with componentDidMount (you are able to use it with SSR).
If you want to download facebook script only when facebook component is rendered you need to add parameter wait to FacebookProvider.
Use only one instance of the FacebookProvider on your page.


# Usage

## Like button

```js
import React, { Component} from 'react';
import { FacebookProvider, Like } from 'react-facebook';

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
import { FacebookProvider, Share } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Share href="http://www.facebook.com">
          {({ handleClick, loading }) => (
            <button type="button" disabled={loading} onClick={handleClick}>Share</button>
          )}
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
import { FacebookProvider, ShareButton } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <ShareButton href="http://www.facebook.com">
          Share
        </ShareButton>
      </FacebookProvider>
    );
  }
}
```

## Comments

```js
import React, { Component} from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

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
import { FacebookProvider, CommentsCount } from 'react-facebook';

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

## Login Button

```js
import React, { Component} from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';

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
        <LoginButton
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
    );
  }
}
```

### Custom login render

If you want to use custom component you can use children as function.

```js
import React, { Component} from 'react';
import { FacebookProvider, Login } from 'react-facebook';

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
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          {({ loading, handleClick, error, data }) => (
            <span onClick={handleClick}>
              Login via Facebook
              {loading && (
                <span>Loading...</span>
              )}
            </span>
          )}
        </Login>
      </FacebookProvider>
    );
  }
}
```

## Embedded post

```js
import React, { Component} from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';

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
import { FacebookProvider, Page } from 'react-facebook';

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

## Feed

```js
import React, { Component} from 'react';
import { FacebookProvider, Feed } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Feed link="https://www.facebook.com">
          {({ handleClick }) => (
            <button type="button" onClick={handleClick}>Share on Feed</button>
          )}
        </Feed>
      </FacebookProvider>    
    );
  }
}
```

## Group

```js
import React, { Component } from 'react';
import { FacebookProvider, Group } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Group
          href="https://www.facebook.com/groups/375934682909754"
          width="300"
          showSocialContext={true}
          showMetaData={true}
          skin="light"
        />
      </FacebookProvider>    
    );
  }
}
```

## MessageUs

```js
import React, { Component} from 'react';
import { FacebookProvider, MessageUs } from 'react-facebook';

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
import { FacebookProvider, SendToMessenger } from 'react-facebook';

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
import { FacebookProvider, MessengerCheckbox } from 'react-facebook';

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
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789" chatSupport>
        <CustomChat pageId="123456789" minimized={false}/>
      </FacebookProvider>    
    );
  }
}
```

## API Access

```js
import React, { Component} from 'react';
import { FacebookProvider, Initialize } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Initialize>
          {({ isReady, api }) => {
            api.ui(...) // our custom async/await api
            // original FB api is available via window.FB
          }}
        <Initialize>
      </FacebookProvider>    
    );
  }
}
```

## Subscribe

```js
import React, { Component} from 'react';
import { FacebookProvider, Subscribe } from 'react-facebook';

export default class Example extends Component {
  handleChange = (response) => {
    console.log(response);
  } 

  render() {
    return (
      <FacebookProvider appId="123456789">
        <Subscribe event="auth.statusChange" onChange={this.handleChange} />
      </FacebookProvider>    
    );
  }
}
```

## Login Status

```js
import React, { Component} from 'react';
import { FacebookProvider, Status } from 'react-facebook';

export default class Example extends Component {
  handleChange = (response) => {
    console.log(response);
  } 

  render() {
    return (
      <FacebookProvider appId="123456789">
        <Status>
          {({ loading, status }) => (
            <div>
              {...}
            </div>
          )}
        </Status>
      </FacebookProvider>    
    );
  }
}
```

## User Profile

This component will not sign user. You need to do that with another component.
Default scope: 'id', 'first_name', 'last_name', 'middle_name', 'name', 'name_format', 'picture', 'short_name', 'email'.
If profile is undefined login status !== LoginStatus.CONNECTED

```js
import React, { Component} from 'react';
import { FacebookProvider, Profile } from 'react-facebook';

export default class Example extends Component {
  handleChange = (response) => {
    console.log(response);
  } 

  render() {
    return (
      <FacebookProvider appId="123456789">
        <Profile>
          {({ loading, profile }) => (
            <div>
              {profile.picture}
              {profile.name} 
            </div>
          )}
        </Profile>
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
