import { useState, useCallback } from 'react';

/**
 * Custom hook for managing boolean state toggle
 * Useful for menus, modals, etc.
 *
 * @param initialValue - Initial boolean state (default: false)
 * @returns [state, toggle, setTrue, setFalse]
 */
export const useToggle = (
  initialValue: boolean = false
): [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, toggle, setTrue, setFalse];
};
