const state = {
  list: [
    {
      organization_uuid: "1",
      email_uuid: "1",
    },
  ],
};

const getters = {
  getOrganizationEmails:
    (state, getters, rootState, rootGetters) => (organization_uuid) => {
      let related = state.list.filter(
        (relationship) => relationship.organization_uuid === organization_uuid
      );
      let emails = [];
      for (let index in related) {
        try {
          let email = rootGetters.emails.getById(related[index].email_uuid);
          emails.push(email);
        } catch (error) {
          // do nothing
          // or report bugsnag
        }
      }
      return emails;
    },
};

export default {
  namespaced: true,
  state,
  getters,
};
