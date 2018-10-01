/**
 * A simple Pub/Sub module
 */
const PubSub = {
  init: function init() {
    this.store = new Map();
  },
  publish: function publish(event, ...args) {
    if (this.store.has(event)) {
      const handlers = this.store.get(event);
      
      handlers.forEach((h) => { h(...args); });
    }
  },
  unsubscribe: function unsubscribe() {

  },
  subscribe: function subscribe(event, handler) {
    if (!this.store.has(event)) {
      this.store.set(event, []);
    }

    if (!(handler in this.store.get(event))) {
      this.store.get(event).push(handler);
    }
  },
};

export default PubSub;
