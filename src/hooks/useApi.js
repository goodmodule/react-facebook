// @flow
import { useContext, useState } from 'react';
import canUseDom from 'can-use-dom';
import FacebookContext from '../FacebookContext';

export default (onReady?: Function) => {
  const {
    handleInit,
    api,
  } = useContext(FacebookContext);

  useState(async () => {
    if (canUseDom) {
      const api2 = await handleInit();
      if (onReady) {
        onReady(api2);
      }
    }
  });

  return [api, handleInit];
};
