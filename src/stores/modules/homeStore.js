import { defineStore } from "pinia";
import { getCategories, getHotSuggests, getHouseList } from "@/services";

const useHomeStore = defineStore("homeStore", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseListPageNo: 1,
    houseList: [],
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategories() {
      const res = await getCategories();
      this.categories = res.data;
    },
    async fetchHouseList() {
      const res = await getHouseList(this.houseListPageNo);
      this.houseList.push(...res.data);
      this.houseListPageNo++;
    },
  },
});

export default useHomeStore;
