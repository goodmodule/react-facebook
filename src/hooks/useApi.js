// @flow
import { useContext, useState } from 'react';
import FacebookContext from '../FacebookContext';

export default (onReady?: Function) => {
  const {
    handleInit,
    api,
  } = useContext(FacebookContext);

  useState(async () => {
    const api2 = await handleInit();
    if (onReady) {
      onReady(api2);
    }
  });

  return [api, handleInit];
};
