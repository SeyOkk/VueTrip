import { defineStore } from "pinia";
import { getDetailInfos } from "@/services";

const useDetailStore = defineStore("detailStore", {
  state: () => ({
    infos: {},
  }),
  actions: {
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfos(houseId);
      this.infos = res.data;
    },
  },
});

export default useDetailStore;
