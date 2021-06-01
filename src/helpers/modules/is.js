function isOneOf(something, list) {
  if (typeof list.includes === "function") {
    return list.includes(something);
  }

  for (let key in list) {
    if (list[key] === something) {
      return true;
    }
  }
  return false;
}

function isAnArray(something) {
  return Array.isArray(something);
}

function isAnObject(something) {
  return typeof something === "object";
}

function isAString(something) {
  return typeof something === "string";
}

function isANumber(something) {
  return typeof something === "number";
}

function isABoolean(something) {
  return typeof something === "boolean";
}

function isTrue(something) {
  if (isABoolean(something)) {
    return something;
  }
  if (isAString(something)) {
    return something.toLowerCase() === "true";
  }
  return Boolean(something);
}

function isInLength(something, expectedLength) {
  return something.length <= expectedLength;
}

function is(something) {
  return {
    oneOf: (list) => isOneOf(something, list),
    noneOf: (list) => !isOneOf(something, list),
    anArray: () => isAnArray(something),
    anObject: () => isAnObject(something),
    aString: () => isAString(something),
    aNumber: () => isANumber(something),
    aBoolean: () => isABoolean(something),
    notAnArray: () => !isAnArray(something),
    notAnObject: () => !isAnObject(something),
    notAString: () => !isAString(something),
    notANumber: () => !isANumber(something),
    notABoolean: () => !isABoolean(something),
    true: () => isTrue(something),
    false: () => !isTrue(something),
    inLength: (expectedLength) => isInLength(something, expectedLength),
    notInLength: (expectedLength) => !isInLength(something, expectedLength),
  };
}

export default is;
