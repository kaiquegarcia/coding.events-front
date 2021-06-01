const OrganizationManagerStatusEnum = Object.freeze({
  INVITED: "invited",
  ACTIVE: "active",
  DENIED: "denied",
  REVOKED: "revoked",
  includes: (value) => Object.values(OrganizationManagerStatusEnum).includes(value),
});

export default OrganizationManagerStatusEnum;
