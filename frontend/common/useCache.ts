import { useEffect, useState } from "react";
import { NativeAppEventEmitter } from "react-native";

export function useCache(key: string) {
  const [cacheState, setCacheState] = useState(0);

  function handleEvent() {
    setCacheState(Math.random());
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

  return { cacheState, clear };
}
