class InvalidEnumException extends Error
{
  constructor(value, enumName) {
    super(`${value} is not present in ${enumName}`);
  }
}

export default InvalidEnumException;
