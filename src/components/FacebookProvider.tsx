import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Facebook from '../utils/Facebook';
import type { FacebookOptions } from '../utils/Facebook';
import FacebookContext from './FacebookContext';
import type { FacebookContextInterface } from './FacebookContext';

let api: Facebook | undefined;

export type FacebookProviderProps = FacebookOptions & {
  children: ReactNode;
};

export default function FacebookProvider(props: FacebookProviderProps) {
  const { children, ...options } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  async function init() {
    try {
      if (api) {
        return api.init();
      }

      setIsReady(false);
      setIsLoading(true);

      api = new Facebook(options);

      await api.init();

      setIsReady(true);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }

    return api;
  }

  async function parse(element: HTMLDivElement | HTMLSpanElement) {
    const api = await init();
    if (api) {
      await api.parse(element);
    }
  }

  useEffect(() => {
    const { lazy } = options;
    if (!lazy) {
      init();
    }
  }, []);

  const value: FacebookContextInterface = {
    isLoading,
    error,
    init,
    api: isReady ? api : undefined,
    parse,
  };

  return (
    <FacebookContext.Provider value={value}>
      {children}
    </FacebookContext.Provider>
  );
}
