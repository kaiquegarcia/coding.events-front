const state = {
  list: [
    {
      uuid: "1",
      name: "PHP",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "2",
      name: "Java",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "3",
      name: "Golang",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "4",
      name: "Javascript",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "5",
      name: "Python",
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
