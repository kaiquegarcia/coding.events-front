const state = {
  list: [
    {
      uuid: "1",
      name: "Coding Dojo",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "2",
      name: "Hackaton",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "3",
      name: "Bootcamp",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
  ],
};

const getters = {
  getById: (state, getters, rootState, rootGetters) => (uuid) =>
    rootGetters.getById(state.list, uuid),
  search: (state, getters, rootState, rootGetters) => (term) =>
    rootGetters.search(state.list, term),
};

export default {
  namespaced: true,
  state,
  getters,
};
