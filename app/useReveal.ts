'use client';

import { useEffect } from 'react';

/**
 * Observes every `.reveal` element on the page and toggles `.in-view`
 * when it enters the viewport. Call once at the top of a client page.
 */
export function useRevealAll() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.reveal:not(.in-view)').forEach(el => io.observe(el));
    };
    observe();

    // Re-scan when DOM changes (e.g., language switch re-renders content).
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
