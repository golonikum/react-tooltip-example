import React, { useEffect, useRef, useState } from 'react';

import { useDebounceCallback } from './useDebounceCallback';

export const useIsEllipsis = (text: React.ReactNode) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isEllipsis, setIsEllipsis] = useState(false);

  const isEllipsisActive = () => {
    if (!ref) {
      return false;
    }

    const { offsetHeight, scrollHeight } = ref.current || {};

    return !!offsetHeight && !!scrollHeight && offsetHeight < scrollHeight;
  };

  const refreshIsEllipsis = useDebounceCallback(() => {
    setIsEllipsis(isEllipsisActive());
  }, 500);

  useEffect(() => {
    refreshIsEllipsis();
  }, [text]);

  useEffect(() => {
    window.addEventListener('resize', refreshIsEllipsis);

    return () => {
      window.removeEventListener('resize', refreshIsEllipsis);
    };
  }, []);

  return { ref, isEllipsis };
};
