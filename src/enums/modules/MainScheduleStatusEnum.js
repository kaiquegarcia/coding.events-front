const MainScheduleStatusEnum = Object.freeze({
  DRAFT: "draft",
  PUBLISHED: "published",
  includes: (value) => Object.values(MainScheduleStatusEnum).includes(value),
});

export default MainScheduleStatusEnum;
