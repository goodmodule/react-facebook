import React, { useState, useEffect, type ReactNode } from 'react';
import Facebook, { type FacebookOptions } from '../utils/Facebook';
import FacebookContext, { type FacebookContextInterface } from './FacebookContext';

let api: Facebook;

export type FacebookProviderProps = FacebookOptions & {
  children: ReactNode;
};

export default function FacebookProvider(props: FacebookProviderProps) {
  const { children, ...options } = props;
  const [isReady, setIsReady] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  async function init(): Promise<Facebook | undefined> {
    try {
      if (isReady && api) {
        return api;
      }

      if (!api) {
        api = new Facebook(options);
      }

      await api.init();

      setIsReady(true);

      return api;
    } catch (error) {
      setError(error);
    }
  }

  async function parse(element: HTMLDivElement) {
    const api = await init();
    if (api) {
      await api.parse(element);
    }
  }

  useEffect(() => {
    const { wait } = options;
    if (!wait) {
      init();
    }
  }, []);

  const value: FacebookContextInterface = {
    isReady,
    error,
    init,
    api,
    parse,
  };

  return (
    <FacebookContext.Provider value={value}>
      {children}
    </FacebookContext.Provider>
  );
}
