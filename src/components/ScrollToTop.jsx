import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//resets scroll position to top of page when navigating to a new page

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
