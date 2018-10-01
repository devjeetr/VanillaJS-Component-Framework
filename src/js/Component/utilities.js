
const makeChainable = function (fn) {
  return function (...args) {
    const retVal = fn(...args);
    
    return retVal || this;
  };
};

export default makeChainable;
