import Component from './Component/Component';
import el from "./Component/element";

function SimpleComponent() {
  let __inputDiv;
  let label;
  let text;
  
  const initializers = {
    dom: function(){
      this.root = el('div');
      __inputDiv = el('input').attr('type', 'text');
      label = el('label');

      __inputDiv.render(this.root);
      label.render(this.root);
    },
    domAttributes: function() {
    },
    eventHandlers: null
  };

  const API = {};
  const componentAttributes = {
    'text': function(text) {
      if(!text) return text;

      // text = ;
      label.attr('textContent', text);
    }
  }

  const props = {
    initializers,
    componentAttributes
  };
  return Component(props)
}

window.onload = () => {
  const simpleComponent = SimpleComponent();
  console.log(simpleComponent);
  simpleComponent.render(document.body);
  simpleComponent.text("im the new text");
};
