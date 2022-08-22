import { useState, useEffect, type ReactNode } from 'react';
import Facebook, { type FacebookOptions } from '../utils/Facebook';
import FacebookContext, { type FacebookContextInterface } from './FacebookContext';

let api: Facebook | undefined;

export type FacebookProviderProps = FacebookOptions & {
  children: ReactNode;
};

export default function FacebookProvider(props: FacebookProviderProps) {
  const { children, ...options } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  async function init(): Promise<Facebook | undefined> {
    try {
      if (api) {
        return api.init();
      }

      setIsReady(false);
      setIsLoading(true);

      api = new Facebook(options);

      await api.init();

      setIsReady(true);

      return api;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function parse(element: HTMLDivElement | HTMLSpanElement): Promise<void> {
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
