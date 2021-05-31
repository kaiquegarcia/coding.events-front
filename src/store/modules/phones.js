import { PrivacyEnum } from "../../enums";

const state = {
  list: [
    {
      uuid: "1",
      title: "Contato Principal",
      country_code: "55",
      area_code: "79",
      number: "912341234",
      privacy: PrivacyEnum.PUBLIC,
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "1",
      title: "Contato Secundário",
      country_code: "55",
      area_code: "21",
      number: "912341234",
      privacy: PrivacyEnum.PRIVATE,
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
  ],
};

const getters = {
  getById: (state, getters, rootState, rootGetters) => (uuid) =>
    rootGetters.getById(state.list, uuid),
  getPhoneCompleteNumber: () => (phone) =>
    `+${phone.country_code} ${phone.area_code} ${phone.number}`,
};

export default {
  namespaced: true,
  state,
  getters,
};
