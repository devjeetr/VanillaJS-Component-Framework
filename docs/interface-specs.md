## The DOM-Wrapper Interface
The DOM-Wrapper interface represents an object that provides basic dom functionalities and could either be an Element-Wrapper or a Component. The goal is to be able to use Components and Element-Wrappers interchangeably for simple operations such as appending, getting parent DOM-Wrapper or getting the dom element associated with the DOM-Wrapper object.

---
### API
#### domWrapper.dom()
returns the root dom element associated with this domWrapper. For an element, this is the dom element being wrapped, and for a Component, it is the root dom element of the component
##### Usage:
```
let el = element('div');
el.dom(); // returns the <div> dom element created above

/**
 * List Component:
 * <ul class="list-component">
 *  <li>
 *  <li>
 *  .....
 *  .....
 * </ul>
 */
let listElem = ListElement();
listElem.dom(); // returns <ul class="list-component">, which is the root

```


#### domWrapper.parent()
returns the parent element of this domWrapper element

#### domWrapper.on(event, handler)

#### domWrapper.attr({attributeName, attributeValue}?)
sets or gets the given attribute on this domWrapperElement

#### domWrapper.attrs([{}])

#### domWrapper.render(element)
renders this domWrapper element into the target element. The target element could be a dom element or another domWrapper element

#### domWrapper.detach()
detaches the element from the dom tree
#### domWrapper.clear()
deletes this domWrapper element including all child nodes
