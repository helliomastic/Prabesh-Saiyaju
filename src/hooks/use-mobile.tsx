
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Only access window when in browser environment
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT;
    }
    return false;
  });

  React.useEffect(() => {
    // Skip effect on SSR
    if (typeof window === 'undefined') {
      return;
    }
    
    // Debounced resize handler for better performance
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      }, 100); // Debounce by 100ms
    };
    
    // Initial check not needed as we set in useState
    
    // Optimized event listener
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
}
