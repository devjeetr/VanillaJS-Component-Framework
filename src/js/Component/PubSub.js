/**
 * A simple Pub/Sub module
 */
const PubSub = function() {
  let __store;

  function __PubSub() {
    __store = new Map();

    return __PubSub;
  }

  __PubSub.emit = function(event, ...args) {
    if (__store.has(event)) {
      const handlers = __store.get(event);
      
      handlers.forEach((h) => { h(...args); });
    }
    return __PubSub;
  }

  __PubSub.on = function(event, handler) {
    if (!__store.has(event)) {
      __store.set(event, []);
    }

    if (!(handler in __store.get(event))) {
      __store.get(event).push(handler);
    }

    return __PubSub;
  }

  return __PubSub;
};

export default PubSub;
