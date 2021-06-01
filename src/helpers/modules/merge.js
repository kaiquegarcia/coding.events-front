function merge(...objects) {
  let output = {};
  for (let index in objects) {
    for (let key in objects[index]) {
      output[key] = objects[index][key];
    }
  }
  return output;
}

export default merge;
