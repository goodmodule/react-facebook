import LoginStatus from '../constants/LoginStatus';
export declare type AuthResponse = {
    userID: string;
    accessToken: string;
};
export declare type LoginResponse = {
    status: LoginStatus.CONNECTED;
    authResponse: AuthResponse;
} | {
    status: Exclude<LoginStatus, LoginStatus.CONNECTED>;
};
export declare type LoginOptions = {
    scope?: string;
    returnScopes?: boolean;
    authType?: string[];
    rerequest?: boolean;
    reauthorize?: boolean;
};
declare global {
    interface Window {
        fbAsyncInit: () => void;
        FB: any;
    }
}
export declare enum Method {
    GET = "get",
    POST = "post",
    DELETE = "delete"
}
export declare enum Namespace {
    UI = "ui",
    API = "api",
    LOGIN = "login",
    LOGOUT = "logout",
    GET_LOGIN_STATUS = "getLoginStatus",
    GET_AUTH_RESPONSE = "getAuthResponse"
}
export declare type FacebookOptions = {
    domain?: string;
    version?: string;
    cookie?: boolean;
    status?: boolean;
    xfbml?: boolean;
    language?: string;
    frictionlessRequests?: boolean;
    debug?: boolean;
    chatSupport?: boolean;
    appId: string;
    autoLogAppEvents?: boolean;
    lazy?: boolean;
};
export default class Facebook {
    options: FacebookOptions;
    loadingPromise: Promise<any>;
    constructor(options: FacebookOptions);
    getAppId(): string;
    getFB(): any;
    init(): Promise<Facebook>;
    process<Response>(namespace: Namespace, before?: any[], after?: any[]): Promise<Response>;
    ui(options: any): Promise<unknown>;
    api<T>(path: any, method?: Method, params?: {}): Promise<T>;
    login(options: LoginOptions): Promise<LoginResponse>;
    logout(): Promise<unknown>;
    getLoginStatus(): Promise<LoginResponse>;
    getAuthResponse(): Promise<unknown>;
    getTokenDetail(loginResponse?: LoginResponse): Promise<AuthResponse>;
    getProfile(params: any): Promise<unknown>;
    getTokenDetailWithProfile(params: any, response: any): Promise<{
        profile: unknown;
        tokenDetail: AuthResponse;
    }>;
    getToken(): Promise<string>;
    getUserId(): Promise<string>;
    sendInvite(to: any, options: any): Promise<unknown>;
    postAction(ogNamespace: any, ogAction: any, ogObject: any, ogObjectUrl: any, noFeedStory: any): Promise<unknown>;
    getPermissions(): Promise<any>;
    hasPermissions(permissions: any): Promise<boolean>;
    subscribe(eventName: any, callback: any): Promise<void>;
    unsubscribe(eventName: any, callback: any): Promise<void>;
    parse(parentNode: any): Promise<void>;
    getRequests(): Promise<unknown>;
    removeRequest(requestID: any): Promise<unknown>;
    setAutoGrow(): Promise<void>;
    paySimple(product: any, quantity?: number): Promise<unknown>;
    pay(product: any, options: any): Promise<unknown>;
}
