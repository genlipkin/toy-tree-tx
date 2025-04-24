import { useEffect, useState } from 'preact/hooks';
import { Subject } from 'helpers/store';

export const useConnect = <T>(storeValue: Subject<T>, initialState: T = null) => {
  const [value, setValue] = useState<T>(initialState || storeValue.lastValue);

  useEffect(() => {
    const unsubscribe = storeValue.subscribe((data: T) => {
      setValue(data);
    });

    return () => {
      unsubscribe();
    };
  }, [storeValue, initialState, setValue]);

  const updateValue = (data?: T) => {
    storeValue.next(data);
  };

  return [value, updateValue] as [T, typeof updateValue];
};
