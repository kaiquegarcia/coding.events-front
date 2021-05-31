import { MainScheduleStatusEnum, ScheduleStatusEnum } from "../../enums";

const state = {
  list: [
    {
      uuid: "1",
      schedule_uuid: "1",
      sort_position: 0,
      status: MainScheduleStatusEnum.PUBLISHED,
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
  ],
};

const getters = {
  getById: (state, getters, rootState, rootGetters) => (uuid) =>
    rootGetters.getById(state.list, uuid),
  getFirstPublishedSchedule: (state, getters, rootState, rootGetters) => {
    for (let index in state.list) {
      let mainSchedule = state.list[index];
      if (mainSchedule.status !== MainScheduleStatusEnum.PUBLISHED) {
        continue;
      }
      let schedule = rootGetters.schedules.getById(mainSchedule.schedule_uuid);
      if (schedule.status !== ScheduleStatusEnum.APPROVED) {
        continue;
      }
      return schedule;
    }
    return null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
