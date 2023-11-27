import { defineStore } from "pinia";
import { getCategories, getHotSuggests } from "@/services";

const useHomeStore = defineStore("homeStore", {
  state: () => ({
    hotSuggests: [],
    categories: [],
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
  },
});

export default useHomeStore;
