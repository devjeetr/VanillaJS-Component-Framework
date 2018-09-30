
const PubSub = {
  init: function init() {
    this.store = new Map();
  },
  publish: function publish(event, ...args) {
    if(this.store.has(event)){
      let handlers = this.store.get(event);
      
      handlers.forEach( (h) => { h(...args) } );
    }
  },
  unsubscribe: function unsubscribe() {

  },
  subscribe: function subscribe(event, handler) {
    if(!this.store.has(event)){
      this.store.set(event, []);
    }

    if(!(handler in this.store.get(event))){
      this.store.get(event).push(handler);
    }
    console.log(this.store);
  },
};

export default PubSub;