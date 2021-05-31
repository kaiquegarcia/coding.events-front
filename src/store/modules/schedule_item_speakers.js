const state = {
  list: [
    {
      uuid: "1",
      schedule_item_uuid: "1",
      thumb_image_uuid: "",
      name: "John Doe",
      description: "Someone called me, now I'm here",
      portfolio_url: "",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "2",
      schedule_item_uuid: "2",
      thumb_image_uuid: "",
      name: "Jany Doe",
      description: "Someone called me, now I'm here (2)",
      portfolio_url: "",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
  ],
};

const getters = {
  getById: (state, getters, rootState, rootGetters) => (uuid) =>
    rootGetters.getById(state.list, uuid),
  filter: (state, getters, rootState, rootGetters) => (filterCallback) =>
    rootGetters.filter(state.list, filterCallback),
  getSpeakerScheduleItem:
    (state, getters, rootState, rootGetters) => (speaker) =>
      rootGetters.schedule_items.getById(speaker.schedule_item_uuid),
  getSpeakerThumbImage:
    (state, getters, rootState, rootGetters) => (speaker) => {
      if (!speaker.thumb_image_uuid) {
        return null;
      }
      return rootGetters.images.getById(speaker.thumb_image_uuid);
    },
};

export default {
  namespaced: true,
  state,
  getters,
};
