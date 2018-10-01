import PubSub from './PubSub';
/**
 * Represents a UI Component encapsulating
 * both the view and the
 */
const Component = {
  init() {
    this.__root = null;
    this.__eventStore = Object.create(PubSub);
    this.__eventStore.init();
    this.__events = {};
  },
  /**
   * Renders this component into the given dom element or Component or dom-helper
   * component.This component is appended to the end of the given element.
   */
  render(renderTarget) {
    if (!renderTarget) {
      throw Exception('InvalidArgumentException: Render target not specified for Component.render()');
    }
    if (renderTarget instanceof Element) {
      renderTarget.appendChild(this.__root.dom());
    } else {
      renderTarget.dom().appendChild(this.__root.dom());
    }
  },
  /**
   * returns the root dom element that wraps up
   * this component
   */
  dom() {
    return this.__root;
  },
  /**
   * Registers the given event handler for the given
   * event
   */
  on(event, handler) {
    this.__eventStore.subscribe(event, handler);
    return this;
  },
  /**
   * Detaches this component from the document's dom
   * tree if this element has been rendered
   */
  detach() {
    if (this.__root && this.__root.dom().parentElement) {
      this.__root.dom().parentElement.removeChild(this.__root.dom());
    }
  },
};


export default Component;
