
const baseComponentAPI = {
  /**
   * Renders this component into the given dom element or Component or dom-helper
   * component.This component is appended to the end of the given element.
   */
  render(renderTarget) {
    if (!renderTarget) {
      throw Exception('InvalidArgumentException: Render target not specified for Component.render()');
    }
    if (renderTarget instanceof Element) {
      renderTarget.appendChild(this.root.dom());
    } else {
      renderTarget.dom().appendChild(this.root.dom());
    }
  },
  /**
   * returns the root dom element that wraps up
   * this component
   */
  dom() {
    return this.__root;
  }
 };

 export default {baseComponentAPI};