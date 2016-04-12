var memoize = (function() {
  var elements = {};

  return function(identifier) {
    var element;

    if(typeof identifier !== 'string') {
      return null;
    }

    if(!(element = document.querySelector(identifier))) {
      if(!(element = document.querySelectorAll(identifier))) {
        return null;
      }
    }
    // if(identifier.startsWith('#')) {
    //   element = document.querySelector(identifier);
    // } else if(identifier.startsWith('.')) {
    //   element = document.querySelectorAll(identifier);
    // } else {
    //   return null;
    // }

    if(elements.hasOwnProperty(identifier)) {
      console.log('getting from cache');
      return elements[identifier];
    } else {
      console.log('adding to cache');
      return (elements[identifier] = element);
    }
  };
})();

var firstH1 = memoize('#one');
console.log(firstH1);
var firstH1Again = memoize('#one');
console.log(firstH1Again);
var secondH1 = memoize('#two');
var secondH1Again = memoize('#two');
var firstH1Again = memoize('#one');




