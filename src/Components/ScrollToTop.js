import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL, don't scroll to top
    if (hash) {
      // Give the DOM time to render before scrolling to the element
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      // No hash, so scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null; // This component doesn't render anything
}

export default ScrollToTop;