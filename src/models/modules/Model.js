class Model {
  constructor(params) {
    this.attributes = {};
    for (let key in params) {
      this.prepareAttribute(key, params[key]);
    }
  }

  prepareAttribute(key, initialValue) {
    Object.defineProperty(this, key, {
      set: (value) => {
        let customSetter = `set_${key}`;
        if (typeof this[customSetter] === "function") {
          this[customSetter](value);
        } else {
          this.attributes[key] = value;
        }
      },
      get: () => {
        let customGetter = `get_${key}`;
        if (typeof this[customGetter] === "function") {
          return this[customGetter]();
        }
        return this.attributes[key];
      },
    });
    this[key] = initialValue;
  }
}

export default Model;
