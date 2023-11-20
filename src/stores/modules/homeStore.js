import { defineStore } from "pinia";
import { getHotSuggests } from "@/services";

const useHomeStore = defineStore("homeStore", {
  state: () => ({
    hotSuggests: [],
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests();
      this.hotSuggests = res.data;
    },
  },
});

export default useHomeStore;
