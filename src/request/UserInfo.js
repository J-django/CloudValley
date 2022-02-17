import request from "../axios/request";

export function GetUid(...param) {
  return request.get("http://192.168.16.72:8083/Account/Login", ...param);
}

export function GetBaseInfo(...param) {
  return request.get("", ...param);
}

export function GetPayInfo(...param) {
  return request.get("", ...param);
}
