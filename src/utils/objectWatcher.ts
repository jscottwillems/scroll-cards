type WatchCallback = (key: string | symbol, value: any) => void;

/**
 * Creates a watched version of an object that monitors property access and modifications
 */
export function watch(
  obj: object,
  getCallback?: WatchCallback,
  setCallback?: WatchCallback
): object {
  return new Proxy(obj, {
    // Handles property access
    get(target: object, property: string | symbol, receiver: any) {
      const value = Reflect.get(target, property, receiver);
      
      if (getCallback && property in target) {
        getCallback(property, value);
      }
      
      return value;
    },
    
    // Handles property modifications
    set(target: object, property: string | symbol, value: any, receiver: any) {
      const result = Reflect.set(target, property, value, receiver);
      
      if (setCallback) {
        setCallback(property, value);
      }
      
      return result;
    }
  });
} 