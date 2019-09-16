import { useLocalStorage } from './useLocalStorage';
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [blight, setBlight] = useLocalStorage('ichor', false);
  // console.log(setBlight);
  useEffect(() => {
    (blight === true)
      ? window.document.body.classList.add('dark-mode')
      : window.document.body.classList.remove('dark-mode');
  }, [blight]);

  return [blight, setBlight];
};