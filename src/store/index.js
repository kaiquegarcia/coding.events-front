import { createStore } from "vuex";
import categories from "./modules/categories";
import languages from "./modules/languages";
import images from "./modules/images";
import addresses from "./modules/addresses";
import phones from "./modules/phones";
import emails from "./modules/emails";
import organizations from "./modules/organizations";
import schedules from "./modules/schedules";
import schedule_items from "./modules/schedule_items";
import schedule_item_speakers from "./modules/schedule_item_speakers";
import organization_phones from "./modules/organization_phones";
import organization_emails from "./modules/organization_emails";

export default createStore({
  state: {
    categories,
    languages,
    images,
    addresses,
    phones,
    emails,
    organizations,
    schedules,
    schedule_items,
    schedule_item_speakers,
    organization_phones,
    organization_emails,
  },
  getters: {
    getById: () => (list, uuid) => {
      list = list.filter((phone) => phone.uuid === uuid);
      if (list.length) {
        return list[0];
      }
      throw new Error(`Item #${uuid} not found.`);
    },
    search: () => (list, term, searchedIndexes) =>
      list.filter((item) => {
        if (!searchedIndexes) {
          searchedIndexes = ["name"];
        }
        if (!Array.isArray(searchedIndexes)) {
          searchedIndexes = [searchedIndexes];
        }
        searchedIndexes = searchedIndexes.map((index) => {
          return item[index].toLowerCase().includes(term.toLowerCase());
        });

        return (
          searchedIndexes.reduce(
            (previous, current) => previous + Number(current),
            0
          ) > 0
        );
      }),
    filter: () => (list, filterCallback) => list.filter(filterCallback),
  },
  mutations: {},
  actions: {},
  modules: {},
});
