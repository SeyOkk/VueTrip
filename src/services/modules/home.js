import request from "@/services/request";

export function getHotSuggests() {
  return request.get({
    url: "/home/hotSuggests",
  });
}

export function getCategories() {
  return request.get({
    url: "/home/categories",
  });
}

export function getHouseList(pageNo = 1) {
  return request.get({
    url: "/home/houselist",
    params: {
      page: pageNo,
    },
  });
}
