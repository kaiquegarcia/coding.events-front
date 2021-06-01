const OrganizationStatusEnum = Object.freeze({
  UNDER_REVIEW: "under_review",
  APPROVED: "approved",
  DENIED: "denied",
  includes: (value) => Object.values(OrganizationStatusEnum).includes(value),
});

export default OrganizationStatusEnum;
