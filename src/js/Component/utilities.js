
const makeChainable = function(fn, propName){
  return function ( ...args ){
    if(args.length === 0){
      return this[propName];
    }

    fn( ...args );
    return this;
  };
};



export default {
  makeChainable,
};