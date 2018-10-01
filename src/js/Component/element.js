
const el = (selector) => {
  let element = null;

  /**
   * constructor
   * @param {} selector 
   */
  function __el(selector) {
    if (!selector) {
      return __el;
    }

    // TODO
    // check if element selector is valid

    const tag = getTag(selector);
    const class_names = getClassNames(selector);
    const id = getIds(selector);

    element = document.createElement(tag);

    if (class_names.length > 0) {
      element.classList.add(...class_names);
    }

    if (id) {
      element.id = id;
    }

    return __el;
  }

  /**
     * Adds an event handler for the given event
     * @param {} event_name dom event name
     * @param {*} handler callback for event
     */
  __el.on = (event_name, handler) => {
    if (!element) return;
    // TODO
    // check if event is valid
    // TODO
    // add support for event handler options
    element.addEventListener(event_name, handler);

    return __el;
  };

  /**
     * Adds the given attribute to the current html
     * element
     * @param {string} attr html attribute name to set
     * @param {string} value value for the given attribute
     */
  __el.attr = (attr, value) => {
    if (!element) return;
    if (!value) {
      if (attr in element) {
        return element[attr];
      }
      console.warn(`attribute ${attr} not found in element ${element}`);
      return null;
    }

    // TODO
    // validate attribute and value
    setProps(element, { [attr]: value });

    return __el;
  };

  __el.parent = () => element ? element.parentElement : null;
  __el.dom = () => element;
  __el.detach = () => {
    if(!element || !element.parentElement) return;
    
    if(element) element.parentElement.removeChild(element);
  };
  /**
     * Applies multiple attributes provided as key value pairs to this current object
     * @param {object} attributes key-value pairs of attribute names and values
     *                            to be applied to this element
     */
  __el.attrs = (attributes) => {
    if (!element) return;

    setProps(element, attributes);

    return __el;
  };

  __el.appendChild = (to_append) => {
    if (!element) return;
    if (!to_append) return;
    
    if(to_append instanceof Element) {
      element.appendChild(to_append);
    } else {
      if (!to_append.dom()) return;

      element.appendChild(to_append.dom());
    }

    return __el;
  };

  __el.render = (renderTarget) => {
    if (!element) return;
    if (!renderTarget) return;

    renderTarget.appendChild(element);
  }

  __el.class = (className, hasClass) => {
    if(!element) return;

    if( (hasClass === null || hasClass === undefined)
        || hasClass){
      element.classList.add(className);
    }else if (hasClass === False) {
      element.classList.remove(className);
    }
  };

  __el.clear = () => {
    if (!element) return;
    if (element.parentElement){
      const parent = element.parentElement;
      parent.removeChild(element);
    }

    element = null;

    return __el;
  }

  return __el(selector);
};


const setProps = (element, attributes) => {
  // set basic attributes
  for (const attribute in attributes) {
    if (attribute in element) {
      element[attribute] = attributes[attribute];
    } else {
      console.warn(`trying to set property ${attribute} on elemen
    // __hasChild = t ${element}`);
    }
  }
};


/**
 * Regex helpers
 */
const getIds = (expr) => {
  const ELEMENT_ID_PATTERN = /#([^\.|^#]+)/;
  const matches = ELEMENT_ID_PATTERN.exec(expr);
  if (!matches) {
    return null;
  }
  return matches[1];
};

const getClassNames = (expr) => {
  const ELEMENT_CLASS_PATTERN = /\.([^\.|^#]+)/g;
  const classNames = [];
  let match = ELEMENT_CLASS_PATTERN.exec(expr);

  while (match) {
    classNames.push(match[1]);
    match = ELEMENT_CLASS_PATTERN.exec(expr);
  }

  return classNames;
};
const getTag = (expr) => {
  const ELEMENT_TAG_PATTERN = /^([a-zA-Z]+)/;
  // let matches = expr.match(ELEMENT_TAG_PATTERN);
  const matches = ELEMENT_TAG_PATTERN.exec(expr);
  if (!matches) {
    return null;
  }
  return matches[1];
};

export default el;
