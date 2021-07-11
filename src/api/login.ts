import request from "@/utils/request";
import { valueTypes } from "@/types/loginTypes";
export const login = (data: valueTypes): Promise<any> => {
  return request({
    url: "/api/user/login",
    method: "post",
    data
  });
};
