import chai from "chai";

import Component from "../src/js/Component/Component";
import el from '../src/js/Component/element';

const expect = chai.expect;

describe('testing Component', () => {
 

  context('testing basic API correctness', () => {
    let TestComponent;
    
    // Setup a test component for each test
    beforeEach(() => {
      const initializers = {
        dom: function() {
          this.root = el('ul.ul');
          let li = el('li.ul').attr('textContent', 'Im some text in an li');
          
          
          this.root.appendChild(li);
        }
      };

      TestComponent = Component({initializers});
    });

    context('testing render', () => {
      it('renders correctly to el', () => {
        let root = el('div');
        TestComponent.render(root);
        
        expect(root.dom().childNodes.length).to.equal(1);

        const firstLevelChild = root.dom().firstChild;
        expect(firstLevelChild.tagName).to.equal('UL');
        const secondLevelChild = root.dom().firstChild.firstChild;
        expect(secondLevelChild.tagName).to.equal('LI');
      });
    });
  });
});