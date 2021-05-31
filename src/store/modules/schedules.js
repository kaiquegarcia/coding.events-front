import { ScheduleStatusEnum } from "../../enums";

const state = {
  list: [
    {
      uuid: "1",
      category_uuid: "3",
      organization_uuid: "1",
      thumb_image_uuid: "1",
      title: "Google IO '21",
      description: "O maior evento de tecnologia do mundo",
      hide_organization: 0,
      status: ScheduleStatusEnum.APPROVED,
      status_reason: "",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
  ],
};

const getters = {
  getById: (state, getters, rootState, rootGetters) => (uuid) =>
    rootGetters.getById(uuid),
  getScheduleCategory: (state, getters, rootState, rootGetters) => (schedule) =>
    rootGetters.categories.getById(schedule.category_uuid),
  getScheduleOrganization:
    (state, getters, rootState, rootGetters) => (schedule) =>
      rootGetters.organizations.getById(schedule.organization_uuid),
  getScheduleThumbImage:
    (state, getters, rootState, rootGetters) => (schedule) =>
      rootGetters.images.getById(schedule.thumb_image_uuid),
  getScheduleItems: (state, getters, rootState, rootGetters) => (schedule) =>
    rootGetters.schedule_items.filter(
      (item) => item.schedule_uuid === schedule.uuid
    ),
  getScheduleSpeakers:
    (state, getters, rootState, rootGetters) => (schedule) => {
      let items = getters.getScheduleItems(schedule);
      let speakers = [];
      let speakerIds = [];
      for (let index in items) {
        let itemSpeakers = rootGetters.schedule_items.getScheduleSpeakers(
          items[index]
        );
        if (!itemSpeakers.length) {
          continue;
        }
        itemSpeakers = itemSpeakers.filter(
          (speaker) => !speakerIds.includes(speaker.uuid)
        );
        if (!itemSpeakers.length) {
          continue;
        }
        speakers = speakers.concat(...itemSpeakers);
        speakerIds = speakerIds.concat(
          ...itemSpeakers.map((speaker) => speaker.uuid)
        );
      }
    },
  filter: (state, getters, rootState, rootGetters) => (filterCallback) =>
    rootGetters.filter(state.list, filterCallback),
};

export default {
  namespaced: true,
  state,
  getters,
};
