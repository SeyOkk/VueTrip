import { defineStore } from "pinia";
import { getAllCity } from "@/services";

const useCityStore = defineStore("cityStore", {
  state: () => ({
    allCity: [],
  }),
  actions: {
    async fetchAllCity() {
      const res = await getAllCity();
      this.allCity = res.data;
    },
  },
});

export default useCityStore;
