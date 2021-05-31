import { PrivacyEnum } from "./../../enums";

const state = {
  list: [
    {
      uuid: "1",
      title: "Local do evento",
      country: "Brasil",
      state: "SE",
      city: "Aracaju",
      neighborhood: "Centro",
      postal_code: "49090-000",
      street: "Rua da Frente",
      number: "123",
      complement: "Praça histórica",
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
  getAddressFirstLine: () => (address) => {
    let line = `${address.street}, `;
    if (!address.number || address.number === "S/N") {
      line += "sem n°";
    } else {
      line += `N° ${address.number}`;
    }
    line += ".";
    if (address.complement) {
      line += ` Complemento: ${address.complement}`;
    }
    return line;
  },
  getAddressSecondLine: () => (address) =>
    `${address.city}-${address.state}, ${address.country}. CEP: ${address.postal_code}`,
  isAddressPublic: () => (address) => address.privacy === PrivacyEnum.PUBLIC,
};

export default {
  namespaced: true,
  state,
  getters,
};
