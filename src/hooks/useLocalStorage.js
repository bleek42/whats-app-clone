import { useState, useEffect } from 'react';
import { PREFIX } from '../constants/constants';

export const useLocalStorage = (key, initVal) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(prefixedKey);
    if (jsonVal != null) return JSON.parse(jsonVal);
    if (typeof initVal === 'function') {
      return initVal();
    }
    else {
      return initVal;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};