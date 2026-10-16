import { useEffect } from "react";

/**
 * When the page is opened with a hash (e.g. /#apply from another route or a
 * shared link), scroll to it once React has rendered the target.
 */
export function useHashScroll(): void {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === "#top") return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, []);
}
