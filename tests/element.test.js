import chai from "chai";

import el from "../src/js/Component/element";

const expect = chai.expect;

describe("element.js", () => {
    context("testing basic el()", () => {
        it("should create an element with the provided tagname", () => {
            let element = el("div").dom();
            expect(element.tagName).to.equal("DIV");
        });

        it("should add id to create element", () => {
          let tagName = "div";
          let id = "some-id";

          let element = el(`${tagName}#${id}`).dom();
          expect(element.id).to.equal(id);
        });

        it("should add all classes provided in selector for new element", () => {
          let classes = ["a", "b", "c"];
          let tagName = "div";
          let classString = classes.join(".");
          let element = el(`${tagName}.${classString}`).dom();
          
          classes.forEach((c) => expect(element.classList.contains(c)).to.equal(true));
        });

        it('should be able to reinitialize after clear()', () => {
          const elem = el('div');
          elem.clear();
          elem('p');
          expect(elem.dom()).to.not.be.null;
        })
    });

    context("testing append", () => {
      it('shouldn\'t throw on append null', () => {
        const elem = el('div');
        expect(elem.appendChild(null)).to.not.throw;
      });

      it('shouldn\'t append an el that\'s been cleared', () => {
        const child = el('ul');
        const parent = el('li');

        child.clear();
        parent.appendChild(child);

        expect(parent.dom().hasChildNodes()).to.be.false;
      });

      it("should append single child element to root element", () => {
        let root = el("div");
        let child_elem = el("div#child-elem");
        
        root.appendChild(child_elem);

        expect(root.dom().contains(child_elem.dom())).to.equal(true);
      });


      it("should append a dom element to root element", () => {
        let root = el("div");
        let child_elem = document.createElement("div");
        root.appendChild(child_elem);

        expect(root.dom().contains(child_elem)).to.equal(true);
      });
    });

    context('testing parent', () => {
      it('should return correct parent after rendering element', () => {
        let elem = el('div');
        let parent = document.createElement('div');
        
        elem.render(parent);
        expect(elem.parent()).to.equal(parent);
      });

      it('should return null when element hasn\'t been rendered', () => {
        let elem = el('div');

        expect(elem.parent()).to.be.null;
      });

      it('should return null when element has been cleared', () => {
        const elem = el('div');
        elem.render(el('div'));
        elem.clear();

        expect(elem.parent()).to.be.null;
      });
      
      it('should return null when element has been detached', () => {
        const elem = el('div');
        elem.render(el('div'));
        elem.detach();
        expect(elem.parent()).to.be.null;
      });
    });

    context('testing detach', () => {
      it('should detach from parent el', () => {
        let parent = el('div');
        let child = el('div');
        
        child.render(parent);
        child.detach();

        expect(parent.dom().contains(child.dom())).to.be.false;
      });

      it('should detach from dom element', () => {
        let parent = document.createElement('div');
        let child = el('div');

        child.render(parent);
        child.detach();

        expect(parent.contains(child.dom())).to.be.false;
      });
      
      it('should not throw error if attempting to detach an unrendered element', () => {
        let elem = el('div');

        expect(elem.detach()).to.not.throw;
      });
    });

    context('testing clear()', () => {
      it('should do nothing if the elemnet has no parent', () => {
        const elem = el('div');
        expect(elem.clear()).to.not.throw;
      });

      it('should remove reference to root element after clear', () => {
        const elem = el('div');
        elem.clear();

        expect(elem.dom()).to.be.null;
      });

      it('shouldn\'t throw on render after clear()', () => {
        const elem = el('div');
        const parent = el('div');
        
        elem.clear();

        expect(elem.render(parent)).to.not.throw;
      });

      it('shouldn\'t throw on append after clear()', () => {
        const elem = el('div');
        const parent = el('div');
        
        parent.clear();

        expect(parent.render(elem)).to.not.throw;
      });
    });

    context('testing render()', () => {
      it('should do nothing if renderTarget is null', () => {
        const elem = el('div');
        elem.render(null);
      });
    });

});
