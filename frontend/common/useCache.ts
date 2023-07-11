import { useEffect, useState } from "react";
import { NativeAppEventEmitter } from "react-native";

export function useInvalidate(key: string) {
  const [invalidation, setInvalidation] = useState(0);

  function handleEvent() {
    setInvalidation(Math.random());
  }

  useEffect(() => {
    const subscription = NativeAppEventEmitter.addListener(key, handleEvent);

    return () => {
      subscription.remove();
    };
  }, []);

  function clear() {
    NativeAppEventEmitter.emit(key);
  }

  return { invalidation, clear };
}
