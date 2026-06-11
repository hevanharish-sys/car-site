import { useEffect } from 'react';

/**
 * Deterrents only — public web assets and code cannot be fully hidden from DevTools.
 * Active in production builds only so local development stays usable.
 */
export function useContentProtection() {
  useEffect(() => {
    if (import.meta.env.DEV) return;

    const blockContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const blockImageDrag = (event: DragEvent) => {
      const target = event.target;
      if (target instanceof HTMLImageElement) {
        event.preventDefault();
      }
    };

    const blockShortcuts = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      const opensDevTools =
        key === 'f12' ||
        (event.ctrlKey && event.shiftKey && ['i', 'j', 'c', 'k'].includes(key)) ||
        (event.metaKey && event.altKey && key === 'i') ||
        (event.ctrlKey && key === 'u') ||
        (event.metaKey && key === 'u');

      if (opensDevTools) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('dragstart', blockImageDrag);
    document.addEventListener('keydown', blockShortcuts);

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('dragstart', blockImageDrag);
      document.removeEventListener('keydown', blockShortcuts);
    };
  }, []);
}
