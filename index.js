var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  Object[key] = value
  return Object
}


function updateObjectWithKeyAndValue(object, key, value) {
 var newObj = Object.assign({}, key);
 console.log(newObj);
 console.log(recipes);
}