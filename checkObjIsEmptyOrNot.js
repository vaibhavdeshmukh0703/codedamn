const obj = {};

function isEmpty(obj) {
  let value = Object.keys(obj);
  if(value.length > 0){ return false}
  return true;
}

console.log(`is Object Empty${isEmpty(obj)}`)