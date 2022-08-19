import { useContext, useEffect } from 'react';
import FacebookContext, { type FacebookContextInterface } from '../components/FacebookContext';

export type UseFacebookProps = {
  init?: boolean;
};

export default function useFacebook(props: UseFacebookProps = {}): FacebookContextInterface {
  const { init = true } = props;

  const context: FacebookContextInterface = useContext(FacebookContext);
  if (!context) {
    throw new Error('useFacebook must be used within a FacebookProvider');
  }

  useEffect(() => {
    if (init) {
      context.init();
    }
  }, [init]);

  return context;
}
