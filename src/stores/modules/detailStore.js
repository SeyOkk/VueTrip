import { defineStore } from "pinia";
import { getDetailInfos } from "@/services";

const useDetailStore = defineStore("detailStore", {
  state: () => ({
    infos: {},
    housePicture: [],
  }),
  actions: {
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfos(houseId);
      this.infos = res.data;
      this.housePicture = res.data.mainPart.topModule.housePicture;
    },
  },
});

export default useDetailStore;
