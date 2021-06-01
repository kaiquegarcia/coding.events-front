class NotAStringException extends Error {
  constructor(value) {
    super(`${value} is not a string`);
  }
}

export default NotAStringException;
