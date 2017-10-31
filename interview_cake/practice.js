// function for getting the id of a dom element,
// giving it a new, unique id if it doesn't have an id yet
var getUniqueId = (function(){
  var nextGeneratedId = 0;
  return function(element) {
    if (!element.id) {
      element.id = 'generated-uid-' + nextGeneratedId;
      nextGeneratedId++;
    }
    return element.id;
  };
})();

console.log(getUniqueId(5)); 
