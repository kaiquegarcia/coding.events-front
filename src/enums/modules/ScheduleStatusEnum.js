const ScheduleStatusEnum = Object.freeze({
  UNDER_REVIEW: "under_review",
  APPROVED: "approved",
  DENIED: "denied",
  includes: (value) => Object.values(ScheduleStatusEnum).includes(value),
});

export default ScheduleStatusEnum;
