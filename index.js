var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}


function updateObjectWithKeyAndValue(object, key, value) {
 var newObj = Object.assign({}, key);
 console.log(newObj);
 console.log(recipes);
}