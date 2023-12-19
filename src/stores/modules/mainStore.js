import { defineStore } from "pinia";

const startDate = new Date();
const endDate = new Date();
endDate.setDate(startDate.getDate() + 1);

const useMainStore = defineStore("mainStore", {
  state: () => ({
    hotelDate: {
      startDate: startDate,
      endDate: endDate,
    },
  }),
});

export default useMainStore;
