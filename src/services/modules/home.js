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
