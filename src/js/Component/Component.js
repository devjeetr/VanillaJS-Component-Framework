import PubSub from './PubSub';
import makeChainable from './utilities';

const Component = function(props) {
  const baseObj = {root: null};

  const registerComponentAttributes = function(componentAttributes) {
    let attributes = {};
    if(!componentAttributes) return attributes;

    for(const attribute in componentAttributes) {
      const handler = componentAttributes[attribute];
      this[attribute] = makeChainable(handler).bind(baseObj);
    }
  }
  
  const componentAttributes = registerComponentAttributes.call(baseObj, props.componentAttributes);
  
  /**
   *                Base API functions
   */

  /**
   * Renders this component into the given dom-wrapper element
   * or dom element
   * @param {} renderTarget 
   */
  const render = function(renderTarget) {
    if (!renderTarget) {
      throw Exception('InvalidArgumentException: Render target not specified for Component.render()');
    }
    if (!this.root) return;
    /**
     * Perform lifecycle functions
     */
    if(props.initializers.dom) props.initializers.dom.call(baseObj);
    if(props.initializers.domAttributes) props.initializers.domAttributes.call(baseObj);
    if(props.initializers.eventListeners) props.initializers.eventListeners.call(baseObj);

    // Check if the user is trying to render this element into a different element
    // than last render, without detaching
    if( this.root.parent()
        && (
            (renderTarget instanceof Element && (this.root.parent().dom() !== renderTarget))
            || this.root.parent() != renderTarget
          )
      ){
        console.warn('Warning: Trying to render component into different element than before without detaching');
    }

    renderTarget.appendChild(this.root.dom());
  }

  /**
   * Returns the parent dom element of this 
   * Component
   */
  const parent = function () {
    if(this.root){
      return this.root.parent() || undefined;
    }
  };
  
  /**
   * Detaches this component from the document's dom
   * tree if this element has been rendered
   */
  const detach = function() {
    if(this.root) {
      const parent = this.root.parent();
      if(parent){
        parent.dom().removeChild(root.dom());
      }
    }
  };

  const clear = function() {
    // TODO
    // implement this
  };

  
  const baseComponentAPI = {
    render,
    clear,
    parent,
    detach,
    clear,
  };

  /**
   * return public API
   */
  return Object.assign( baseObj, 
    baseComponentAPI, 
    props.API || {}, 
    componentAttributes || {},
    PubSub());
};


export default Component;