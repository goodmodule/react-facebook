declare module 'react-facebook' {
  export class FacebookProvider {
    constructor(...args: any[]);

    getChildContext(): any;

    init(...args: any[]): any;

    render(): any;

    static defaultProps: {
      children: any;
      cookie: boolean;
      domain: string;
      frictionlessRequests: boolean;
      language: string;
      status: boolean;
      version: string;
      wait: boolean;
      xfbml: boolean;
    };

  }

  export class Feed {
    constructor(...args: any[]);

    process(_x: any, ...args: any[]): any;

    static defaultProps: {
      appId: any;
      children: any;
      component: any;
      display: any;
      dontWait: any;
      link: any;
      onError: any;
      onReady: any;
      onResponse: any;
      redirectURI: any;
      render: any;
    };

  }

  export class InitFacebook {
    constructor(...args: any[]);

    componentDidMount(): void;

    initFacebook(...args: any[]): any;

    render(): any;

    static defaultProps: {
      children: any;
    };

  }

  export class Login {
    constructor(...args: any[]);

    process(_x: any, ...args: any[]): any;

    static defaultProps: {
      children: any;
      component: any;
      dontWait: any;
      fields: string[];
      onError: any;
      onReady: any;
      onResponse: any;
      render: any;
      rerequest: boolean;
      returnScopes: boolean;
      scope: string;
    };

  }

  export class LoginButton {
    constructor(...args: any[]);

    render(): any;

    static defaultProps: {
      buttonClassName: string;
      children: any;
      component: any;
      dontWait: any;
      fields: string[];
      icon: boolean;
      iconClassName: string;
      onError: any;
      onReady: any;
      onResponse: any;
      render: any;
      rerequest: boolean;
      returnScopes: boolean;
      scope: string;
      spinner: boolean;
      spinnerConfig: {
      };
    };

  }

  export class Parser {
    constructor(...args: any[]);

    render(): any;

    shouldComponentUpdate(): any;

    static defaultProps: {
      children: any;
      className: any;
    };

  }

  export class Share {
    constructor(...args: any[]);

    process(_x: any, ...args: any[]): any;

    static defaultProps: {
      appId: any;
      children: any;
      component: any;
      display: any;
      dontWait: any;
      hashtag: any;
      href: any;
      mobileIframe: any;
      onError: any;
      onReady: any;
      onResponse: any;
      quote: any;
      redirectURI: any;
      render: any;
    };

  }

  export const ColorScheme: {
    DARK: string;
    LIGHT: string;
  };

  export const CommentsOrderBy: {
    REVERSE_TIME: string;
    SOCIAL: string;
    TIME: string;
  };

  export const LikeAction: {
    LIKE: string;
    RECOMMEND: string;
  };

  export const LikeLayout: {
    BOX_COUNT: string;
    BUTTON: string;
    BUTTON_COUNT: string;
    STANDARD: string;
  };

  export const LikeSize: {
    LARGE: string;
    SMALL: string;
  };

  export function Comments(props: any): any;

  export function CommentsCount(props: any): any;

  export function EmbeddedPost(props: any): any;

  export function Like(props: any): any;

  export function Page(props: any, context: any): any;

  export function ShareButton(props: any): any;

  export namespace Comments {
    const defaultProps: {
      children: any;
      className: any;
      colorScheme: string;
      href: any;
      numPosts: number;
      orderBy: string;
      width: number;
    };

    const prototype: {
    };

    namespace propTypes {
      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function colorScheme(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function href(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function numPosts(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function orderBy(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace href {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace width {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

  }

  export namespace CommentsCount {
    const defaultProps: {
      children: any;
      className: any;
      href: any;
    };

    const prototype: {
    };

    namespace propTypes {
      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function href(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace href {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

  }

  export namespace EmbeddedPost {
    const defaultProps: {
      children: any;
      className: any;
      href: string;
      showText: boolean;
      width: number;
    };

    const prototype: {
    };

    namespace propTypes {
      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function href(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function showText(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace width {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

  }

  export namespace FacebookProvider {
    namespace childContextTypes {
      function facebook(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

    }

    namespace propTypes {
      function appId(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function cookie(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function domain(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function frictionlessRequests(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function language(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function status(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function version(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function wait(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function xfbml(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace cookie {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace domain {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace frictionlessRequests {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace language {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace status {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace version {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace wait {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace xfbml {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

    namespace prototype {
      const isMounted: any;

      const isReactComponent: {
      };

      const replaceState: any;

      function forceUpdate(callback: any): void;

      function getChildContext(): any;

      function init(...args: any[]): any;

      function render(): any;

      function setState(partialState: any, callback: any): void;

      namespace forceUpdate {
        const prototype: {
        };

      }

      namespace getChildContext {
        const prototype: {
        };

      }

      namespace init {
        const prototype: {
        };

      }

      namespace render {
        const prototype: {
        };

      }

      namespace setState {
        const prototype: {
        };

      }

    }

  }

  export namespace Feed {
    namespace propTypes {
      function appId(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function caption(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function component(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function description(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function display(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function dontWait(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function from(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function link(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function name(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onError(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onReady(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onResponse(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function picture(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function redirectURI(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function ref(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function render(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function to(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace appId {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace caption {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace component {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace description {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace display {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace dontWait {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace from {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace link {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace name {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onError {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onReady {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onResponse {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace picture {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace redirectURI {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace ref {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace render {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace source {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace to {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

    namespace prototype {
      const isMounted: any;

      const isReactComponent: {
      };

      const replaceState: any;

      function forceUpdate(callback: any): void;

      function getElement(): any;

      function process(_x: any, ...args: any[]): any;

      function render(): any;

      function setState(partialState: any, callback: any): void;

      namespace forceUpdate {
        const prototype: {
        };

      }

      namespace getElement {
        const prototype: {
        };

      }

      namespace process {
        const prototype: {
        };

      }

      namespace render {
        const prototype: {
        };

      }

      namespace setState {
        const prototype: {
        };

      }

    }

  }

  export namespace InitFacebook {
    namespace contextTypes {
      function facebook(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

    }

    namespace propTypes {
      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onReady(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

    namespace prototype {
      const isMounted: any;

      const isReactComponent: {
      };

      const replaceState: any;

      function componentDidMount(): void;

      function forceUpdate(callback: any): void;

      function initFacebook(...args: any[]): any;

      function render(): any;

      function setState(partialState: any, callback: any): void;

      namespace componentDidMount {
        const prototype: {
        };

      }

      namespace forceUpdate {
        const prototype: {
        };

      }

      namespace initFacebook {
        const prototype: {
        };

      }

      namespace render {
        const prototype: {
        };

      }

      namespace setState {
        const prototype: {
        };

      }

    }

  }

  export namespace Like {
    const defaultProps: {
      action: string;
      children: any;
      className: any;
      colorScheme: string;
      href: any;
      kidDirectedSite: boolean;
      layout: string;
      referral: any;
      share: boolean;
      showFaces: boolean;
      size: string;
      width: any;
    };

    const prototype: {
    };

    namespace propTypes {
      function action(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function colorScheme(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function href(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function kidDirectedSite(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function layout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function referral(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function share(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function showFaces(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function size(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace href {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace referral {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace size {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace width {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

  }

  export namespace Login {
    namespace propTypes {
      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function component(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function dontWait(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function fields(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onError(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onReady(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onResponse(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function render(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function rerequest(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function returnScopes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function scope(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace component {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace dontWait {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onError {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onReady {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onResponse {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace render {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace rerequest {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace returnScopes {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

    namespace prototype {
      const isMounted: any;

      const isReactComponent: {
      };

      const replaceState: any;

      function forceUpdate(callback: any): void;

      function getElement(): any;

      function process(_x: any, ...args: any[]): any;

      function render(): any;

      function setState(partialState: any, callback: any): void;

      namespace forceUpdate {
        const prototype: {
        };

      }

      namespace getElement {
        const prototype: {
        };

      }

      namespace process {
        const prototype: {
        };

      }

      namespace render {
        const prototype: {
        };

      }

      namespace setState {
        const prototype: {
        };

      }

    }

  }

  export namespace LoginButton {
    namespace propTypes {
      function buttonClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function component(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function dontWait(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function fields(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function iconClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onError(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onReady(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onResponse(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function render(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function rerequest(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function returnScopes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function scope(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function spinner(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function spinnerClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function spinnerConfig(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace buttonClassName {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace component {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace dontWait {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace icon {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace iconClassName {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onError {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onReady {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onResponse {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace render {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace rerequest {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace returnScopes {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace spinner {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace spinnerClassName {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

    namespace prototype {
      const isMounted: any;

      const isReactComponent: {
      };

      const replaceState: any;

      function forceUpdate(callback: any): void;

      function render(): any;

      function setState(partialState: any, callback: any): void;

      namespace forceUpdate {
        const prototype: {
        };

      }

      namespace render {
        const prototype: {
        };

      }

      namespace setState {
        const prototype: {
        };

      }

    }

  }

  export namespace Page {
    const defaultProps: {
      adaptContainerWidth: boolean;
      children: any;
      className: any;
      height: number;
      hideCTA: boolean;
      hideCover: boolean;
      showFacepile: boolean;
      smallHeader: boolean;
      tabs: string;
      width: number;
    };

    const prototype: {
    };

    namespace contextTypes {
      function facebook(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

    }

    namespace propTypes {
      function adaptContainerWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function hideCTA(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function hideCover(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function href(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function showFacepile(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function smallHeader(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function tabs(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace adaptContainerWidth {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace height {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace hideCTA {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace hideCover {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace showFacepile {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace smallHeader {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace tabs {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace width {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

  }

  export namespace Parser {
    namespace propTypes {
      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

    namespace prototype {
      const isMounted: any;

      const isReactComponent: {
      };

      const replaceState: any;

      function forceUpdate(callback: any): void;

      function render(): any;

      function setState(partialState: any, callback: any): void;

      function shouldComponentUpdate(): any;

      namespace forceUpdate {
        const prototype: {
        };

      }

      namespace render {
        const prototype: {
        };

      }

      namespace setState {
        const prototype: {
        };

      }

      namespace shouldComponentUpdate {
        const prototype: {
        };

      }

    }

  }

  export namespace Share {
    namespace propTypes {
      function appId(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function component(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function display(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function dontWait(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function hashtag(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function href(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function mobileIframe(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onError(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onReady(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onResponse(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function quote(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function redirectURI(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function render(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace appId {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace component {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace display {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace dontWait {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace hashtag {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace href {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace mobileIframe {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onError {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onReady {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onResponse {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace quote {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace redirectURI {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace render {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

    namespace prototype {
      const isMounted: any;

      const isReactComponent: {
      };

      const replaceState: any;

      function forceUpdate(callback: any): void;

      function getElement(): any;

      function process(_x: any, ...args: any[]): any;

      function render(): any;

      function setState(partialState: any, callback: any): void;

      namespace forceUpdate {
        const prototype: {
        };

      }

      namespace getElement {
        const prototype: {
        };

      }

      namespace process {
        const prototype: {
        };

      }

      namespace render {
        const prototype: {
        };

      }

      namespace setState {
        const prototype: {
        };

      }

    }

  }

  export namespace ShareButton {
    const defaultProps: {
      appId: any;
      children: any;
      className: string;
      component: any;
      display: any;
      dontWait: any;
      hashtag: any;
      href: any;
      icon: boolean;
      iconClassName: string;
      mobileIframe: any;
      onError: any;
      onReady: any;
      onResponse: any;
      quote: any;
      redirectURI: any;
      render: any;
    };

    const prototype: {
    };

    namespace propTypes {
      function appId(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function component(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function display(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function dontWait(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function hashtag(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function href(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function iconClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function mobileIframe(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onError(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onReady(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onResponse(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function quote(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function redirectURI(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function render(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace appId {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace component {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace display {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace dontWait {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace hashtag {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace href {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace icon {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace iconClassName {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace mobileIframe {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onError {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onReady {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace onResponse {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace quote {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace redirectURI {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

      namespace render {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      }

    }

  }
}
