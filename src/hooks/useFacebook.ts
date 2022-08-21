import { useContext, useEffect } from 'react';
import FacebookContext, { type FacebookContextInterface } from '../components/FacebookContext';

export type UseFacebookProps = {
  lazy?: boolean;
};

export default function useFacebook(props: UseFacebookProps = {}): FacebookContextInterface {
  const { lazy = false } = props;

  const context: FacebookContextInterface = useContext(FacebookContext);
  if (!context) {
    throw new Error('useFacebook must be used within a FacebookProvider');
  }

  useEffect(() => {
    if (!lazy) {
      context.init();
    }
  }, [lazy]);

  return context;
}
