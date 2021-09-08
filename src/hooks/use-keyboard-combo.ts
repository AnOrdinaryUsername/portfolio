import * as React from 'react';

type ComboOptions =
  | {
      allowRepeatAction: true;
      repeatKeys: string;
    }
  | {
      allowRepeatAction: false;
      repeatKeys: never;
    };

/**
 *
 * @param combo A series of keys, aka keyboard shortcuts, to observe on keydown.
 * @param callback Function to execute once a keyboard combo is completed.
 * @param options Enables repeat keys to perform actions (e.g. holding down
 *                    the control key and repeatedly pressing z to undo an action).
 * @returns boolean
 */
function useKeyboardCombo(
  combo: Array<string>,
  callback: () => void,
  options?: ComboOptions
): boolean {
  const [keyCombo, setKeyCombo] = React.useState<string[]>([]);
  const lowercaseCombo = combo.map((e) => e.toLowerCase()).join(' ');
  const isCombo = keyCombo.join(' ') === lowercaseCombo;

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    const addKey = (event: KeyboardEvent) => {
      setKeyCombo((prevState) => [...prevState, event.key.toLowerCase()]);
      clearTimeout(timeout);

      const lastKey = keyCombo[keyCombo.length - 1];

      if (options?.allowRepeatAction && lastKey !== options.repeatKeys) {
        setKeyCombo([]);
      } else {
        timeout = setTimeout(() => setKeyCombo([]), 1000);
      }
    };

    document.addEventListener('keydown', addKey);

    return () => {
      document.removeEventListener('keydown', addKey);
    };
  }, []);

  React.useEffect(() => {
    const lastKey = keyCombo[keyCombo.length - 1];

    if (isCombo || (keyCombo.length !== 0 && lastKey === options?.repeatKeys)) {
      callback();

      if (!options?.allowRepeatAction) {
        setKeyCombo([]);
      }
    }
  }, [isCombo, keyCombo, callback, options]);

  return isCombo;
}

export default useKeyboardCombo;
