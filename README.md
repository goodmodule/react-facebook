# React Facebook Components

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-facebook.svg?style=flat-square
[npm-url]: https://www.npmjs.com/react-facebook
[travis-image]: https://img.shields.io/travis/seeden/react-facebook/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/seeden/react-facebook
[coveralls-image]: https://img.shields.io/coveralls/seeden/react-facebook/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/seeden/react-facebook?branch=master
[github-url]: https://github.com/seeden/react-facebook
[support-url]: https://github.com/sponsors/seeden

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
- Save
- Status
- Share
- Subscribe
- User Profile

# Support

[Become my sponsor][support-url] and help me maintain this project. Thank you

# Initialisation

By default FacebookProvider is loading facebook script immediately after render (you are able to use it with SSR).
If you want to download facebook script only when facebook component is rendered you need to add parameter lazy to FacebookProvider.
Use only one instance of the FacebookProvider on your page.


# Usage

## Like button

```tsx
import { FacebookProvider, Like } from 'react-facebook';

export default function LikeExample() {
  return (
    <FacebookProvider appId="123456789">
      <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
    </FacebookProvider>
  );
}
```

## useShare

```tsx
import { FacebookProvider, useShare } from 'react-facebook';

export default function ShareExample() {
  const { share, isLoading, error } = useShare();

  async function handleShare() {
    await share({
      href: 'http://www.facebook.com',
    });
  }

  return (
    <button type="button" disabled={isLoading} onClick={handleShare}>Share</button>
  );
}
```

## Share button

You can use predefined button

```tsx
import { FacebookProvider, ShareButton } from 'react-facebook';

export default function ShareButtonExample() {
  return (
    <FacebookProvider appId="123456789">
      <ShareButton href="http://www.facebook.com" className="my-classname">
        Share
      </ShareButton>
    </FacebookProvider>
  );
}
```

## Comments

```tsx
import { FacebookProvider, Comments } from 'react-facebook';

export default function CommentsExample() {
  return (
    <FacebookProvider appId="123456789">
      <Comments href="http://www.facebook.com" />
    </FacebookProvider>
  );
}
```

If comments do not work and you are seeing this error in the browser console:

`Refused to display 'https://www.facebook.com/v3.1/plugins/comments.php?blahblahblah' in a frame because it set 'X-Frame-Options' to 'DENY'.`

Possible reasons:
1. If the site visitor is from the EU region, the visitor needs to be **both**:
    - Logged in to Facebook.
    - Have third-party cookies enabled in FB privacy settings.
2. User is using a browser that is blocking third party cookies by default (for example Safari and Firefox).

It is not a bug in this library, [there is no way around it](https://developers.facebook.com/support/bugs/854001531875629/).


## Comments count

```tsx
import { FacebookProvider, CommentsCount } from 'react-facebook';

export default function CommentsCountExample() {
  return (
    <FacebookProvider appId="123456789">
      <CommentsCount href="http://www.facebook.com" />
    </FacebookProvider>
  );
}
```

## useLogin

```tsx
import { FacebookProvider, useLogin } from 'react-facebook';

export default function LoginExample() {
  const { login, status, isLoading, error} = useLogin();
  
  async function handleLogin() {
    try {
      const response = await login({
        scope: 'email',
      });

      console.log(response.status);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <button onClick={handleLogin} disabled={isLoading}>
      Login via Facebook
    </button>
  );
}
```

### LoginButton

```tsx
import { FacebookProvider, LoginButton } from 'react-facebook';

export default function LoginButtonExample() {
  functon handleSuccess(response) {
    console.log(response.status);
  }

  function handleError(error) {
    console.log(error);
  }

  return (
    <FacebookProvider appId="123456789">
      <LoginButton
        scope="email"
        onError={handleError}
        onSuccess={handleSuccess}
      >
        Login via Facebook
      </LoginButton>
    </FacebookProvider>
  );
}
```

## Embedded post

```tsx
import { FacebookProvider, EmbeddedPost } from 'react-facebook';

export default function EmbeddedPostExample() {
  return (
    <FacebookProvider appId="123456789">
      <EmbeddedPost href="http://www.facebook.com" width="500" />
    </FacebookProvider>
  );
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

```tsx
import { FacebookProvider, useFacebook } from 'react-facebook';

export default function UseFacebookExample() {
  const { isLoading, init, error } = useFacebook();

  async function handleClick() {
    const api = await init();

    const response = await api.login();
    const FB = await api.getFB(); // Get original FB object
  }

  return (
    <button disabled={isLoading} onClick={handleClick}>
      Login
    </button>
  );
}
```

## useSubscribe - Subscribe to events

```tsx
import { FacebookProvider, useSubscribe } from 'react-facebook';

export default function UseSubscribeExample() {
  const latestValue = useSubscribe('auth.statusChange', (value) => {
    console.log('new response', value);
  });

  return (
    <div>
      {latestValue}
    </div>
  );
}
```

## useLoginStatus - read login status of current user

```tsx
import { FacebookProvider, useLoginStatus } from 'react-facebook';

export default function UseLoginStatusExample() {
  const { status, isLoading, error } = useLoginStatus();

  return (
    <div>
      Current user login status: {isLoading ? 'Loading...' : status}
    </div>
  );
}
```

## User Profile

This component will not sign user. You need to do that with another component.
Default scope: 'id', 'first_name', 'last_name', 'middle_name', 'name', 'name_format', 'picture', 'short_name', 'email'.
If profile is undefined login status !== LoginStatus.CONNECTED

```tsx
import { FacebookProvider, useProfile } from 'react-facebook';

export default function UseProfileExample() {
  const { profile, isLoading, error } = useProfile(['id', 'name']);

  return (
    <div>
      {profile?.name} has id: {profile?.id}
    </div>    
  );
}
```

# Testing

```sh
npx cypress open --component
```

# Support

[Become my sponsor][support-url] and help me maintain this project. Thank you

## Credits

[Zlatko Fedor](http://github.com/seeden)
