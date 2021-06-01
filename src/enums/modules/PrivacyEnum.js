const PrivacyEnum = Object.freeze({
  PUBLIC: "public",
  PRIVATE: "private",
  includes: (value) => Object.values(PrivacyEnum).includes(value),
});
export default PrivacyEnum;
