import React, { useEffect, useRef } from 'react';

const useUpdate = (callbackFunction: Function, dependancies: any[]) => {
  const reference = useRef(true);

  useEffect(() => {
    if (reference.current) {
      reference.current = false;
      return;
    }
    return callbackFunction();
  }, dependancies);
};

export default useUpdate;
