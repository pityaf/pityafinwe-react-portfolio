import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const pathName  = useLocation();

  useEffect(() => {
    window.scrollTo(1000, 0);
  }, [pathName]);

}

