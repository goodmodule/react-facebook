import { createContext } from 'react';
import Facebook from '../utils/Facebook';

export type FacebookContextInterface = {
  isReady: boolean;
  error: Error | undefined;
  init: () => Promise<Facebook | undefined>;
  api: Facebook;
  parse: (element: HTMLDivElement) => Promise<void>;
};

export default createContext<FacebookContextInterface>();
