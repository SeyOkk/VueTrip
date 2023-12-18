import { defineStore } from "pinia";

const useMainStore = defineStore("mainStore", {
  state: () => ({
    hotelDate: {
      startDate: "",
      endDate: "",
    },
  }),
});

export default useMainStore;
