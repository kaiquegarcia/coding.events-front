import { OrganizationStatusEnum } from "../../enums";

const state = {
  list: [
    {
      uuid: "1",
      logo_image_uuid: "1",
      owner_user_uuid: "",
      social_name: "Google",
      legal_name: "Google Inc.",
      description: "Google IO '21",
      website: "https://google.com/",
      status: OrganizationStatusEnum.APPROVED,
      status_reason: "",
      created_at: "",
      updated_at: "",
      verified_at: "",
      deleted_at: "",
    },
  ],
};

const getters = {
  getById: (state, getters, rootState, rootGetters) => (uuid) =>
    rootGetters.getById(state.list, uuid),
  search: (state, getters, rootState, rootGetters) => (term) =>
    rootGetters.search(state.list, term, [
      "social_name",
      "legal_name",
      "description",
      "website",
    ]),
  getOrganizationImage: (state, getters, rootState, rootGetters) => (org) =>
    rootGetters.images.getById(org.logo_image_uuid),
  getOrganizationPhones: (state, getters, rootState, rootGetters) => (org) =>
    rootGetters.organization_phones.getOrganizationPhones(org.uuid),
  getOrganizationEmails: (state, getters, rootState, rootGetters) => (org) =>
    rootGetters.organization_emails.getOrganizationEmails(org.uuid),
};

export default {
  namespaced: true,
  state,
  getters,
};
