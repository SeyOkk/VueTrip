import { defineStore } from "pinia";
import { getCategories, getHotSuggests, getHouseList } from "@/services";

const useHomeStore = defineStore("homeStore", {
  state: () => ({
    hotSuggests: [],
    categories: [],
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
    async fetchHouseList(pageNo) {
      const res = await getHouseList(pageNo);
      this.houseList.push(...res.data);
    },
  },
});

export default useHomeStore;
