const state = {
  list: [
    {
      uuid: "1",
      schedule_uuid: "1",
      language_uuid: "1",
      start_datetime: "2021-05-24\\T10:00:00.000Z",
      end_datetime: "2021-05-24\\T18:00:00.000Z",
      title: "PHP Session",
      description: "",
      is_certifiable: 0,
      is_inscription_required: 1,
      is_payment_required: 0,
      inscription_url: "https://google.com/",
      is_online: 1,
      meeting_url: "https://meet.google.com/",
      stream_url: "https://youtube.com/",
      address_uuid: "",
      latitude: "",
      longitude: "",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "2",
      schedule_uuid: "1",
      language_uuid: "2",
      start_datetime: "2021-05-24\\T10:00:00.000Z",
      end_datetime: "2021-05-24\\T18:00:00.000Z",
      title: "Java Session",
      description: "",
      is_certifiable: 0,
      is_inscription_required: 1,
      is_payment_required: 0,
      inscription_url: "https://google.com/",
      is_online: 1,
      meeting_url: "https://meet.google.com/",
      stream_url: "https://youtube.com/",
      address_uuid: "",
      latitude: "",
      longitude: "",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "3",
      schedule_uuid: "1",
      language_uuid: "3",
      start_datetime: "2021-05-24\\T10:00:00.000Z",
      end_datetime: "2021-05-24\\T18:00:00.000Z",
      title: "Go Session",
      description: "",
      is_certifiable: 0,
      is_inscription_required: 1,
      is_payment_required: 0,
      inscription_url: "https://google.com/",
      is_online: 1,
      meeting_url: "https://meet.google.com/",
      stream_url: "https://youtube.com/",
      address_uuid: "",
      latitude: "",
      longitude: "",
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
  filterByDate: (state, getters) => (datetime) =>
    getters.filter(
      (item) => item.start_datetime <= datetime && datetime < item.end_datetime
    ),
  getItemSchedule: (state, getters, rootState, rootGetters) => (item) =>
    rootGetters.schedules.getById(item.schedule_uuid),
  getItemSpeakers: (state, getters, rootState, rootGetters) => (item) =>
    rootGetters.schedule_item_speakers.filter(
      (speaker) => speaker.schedule_item_uuid === item.uuid
    ),
  getItemLanguage: (state, getters, rootState, rootGetters) => (item) =>
    rootGetters.languages.getById(item.language_uuid),
  getStartDateTime: () => (item) => {
    let date = new Date(item.start_datetime);
    return date.toLocaleDateString();
  },
  getEndDateTime: () => (item) => {
    let date = new Date(item.end_datetime);
    return date.toLocaleDateString();
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
