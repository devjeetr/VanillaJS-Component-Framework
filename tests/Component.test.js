import chai from "chai";

import Component from "../src/js/Component/Component";

const expect = chai.expect;

describe('testing Component', () => {
  let TestComponent;
  beforeEach(() => {
    TestComponent = "Hello";
  });

  it('should construct TestComponent', () => {
    expect(TestComponent).to.be.equal('Hello');
  });
});