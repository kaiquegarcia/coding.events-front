const state = {
  list: [
    {
      organization_uuid: "1",
      phone_uuid: "1",
    },
  ],
};

const getters = {
  getOrganizationPhones:
    (state, getters, rootState, rootGetters) => (organization_uuid) => {
      let related = state.list.filter(
        (relationship) => relationship.organization_uuid === organization_uuid
      );
      let phones = [];
      for (let index in related) {
        try {
          let phone = rootGetters.phones.getById(related[index].phone_uuid);
          phones.push(phone);
        } catch (error) {
          // do nothing
          // or report bugsnag
        }
      }
      return phones;
    },
};

export default {
  namespaced: true,
  state,
  getters,
};
