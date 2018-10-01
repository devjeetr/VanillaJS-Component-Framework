### el

### API
#### el(selector)
returns a new el object that wraps around a new dom element created using selector. selector is a jQuery style selector string

#### el.attr(attributeName, attributeValue)
sets the dom attribute of the dom element contained in this el
```
let div = el('div.parent');
div.attr('textContent', 'Editable Div')
   .attr('contentEditable', true);

// <div class='parent' contenteditable>Editable Div </div>
```
#### el.attrs({attributeName: attributeValue})
same as attr, except multiple attributes are set using a dictionary like parameter object. 
Note: attributes are not guaranteed to be set in the order they are defined in the object
```
let div = el('div.parent');
div.attrs({
  'textContent': editableDiv,
  'contentEditable': true
});

// <div class='parent' contenteditable>Editable Div </div>
```


#### el.appendChild(elem)
appends the given element to this el.
```
let parentDiv = el('div.parent');
let childDiv = el('div.child');
parentDiv.appendChild(childDiv);
// constructs:
// <div class='parent'>
//  <div class='child'></div>
// <div>
```

#### el.class(className, ?hasClass)
adds the given class to the dom element contained in el. Previously added classes are not overwritten. if hasClass is provided:
* adds className to classlist if hasClass === true
* removes className from classList if hasClass === false
##### usage
```
  let div = el('div.sample-class');
  // <div class='sample-class'></div>
  div.class('new-class')
  // <div class='sample-class new-class'></div>
  div.class('sample-class', false);
  // <div class='new-class'> 
```