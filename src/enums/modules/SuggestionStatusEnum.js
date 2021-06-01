const SuggestionStatusEnum = Object.freeze({
  PENDING: "pending",
  ACCEPTED: "accepted",
  DENIED: "denied",
  includes: (value) => Object.values(SuggestionStatusEnum).includes(value),
});

export default SuggestionStatusEnum;
