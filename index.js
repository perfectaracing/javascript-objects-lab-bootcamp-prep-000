var recipes = new Object({recipes: '0'});

function updateObjectWithKeyAndValue(object, key, value) {
  Object[key] = value
  return Object
}


function updateObjectWithKeyAndValue(object, key, value) {
 var newObj = Object.assign({}, object);
 Object[key] = value;
 return object;
}