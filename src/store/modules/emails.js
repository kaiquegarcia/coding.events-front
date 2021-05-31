import { PrivacyEnum } from "../../enums";

const state = {
  list: [
    {
      uuid: "1",
      title: "Contato suporte",
      username: "contato",
      domain: "kaiquegarcia.dev",
      privacy: PrivacyEnum.PUBLIC,
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
  ],
};

const getters = {
  getById: (state, getters, rootState, rootGetters) => (uuid) =>
    rootGetters.getById(state.list, uuid),
  getEmailString: () => (email) => `${email.username}@${email.domain}`,
  isEmailPublic: () => (email) => email.privacy === PrivacyEnum.PUBLIC,
};

export default {
  namespaced: true,
  state,
  getters,
};
