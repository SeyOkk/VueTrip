import request from "@/services/request";

export function getAllCity() {
  return request.get({
    url: "/city/all",
  });
}
