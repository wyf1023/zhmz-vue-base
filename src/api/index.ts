/*
 * @Author: wuyefan
 * @Date: 2022-10-20 21:04:25
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-21 15:38:07
 */
import UserService from "@/api/user";
import ResourceService from "@/api/resource";

const API = {
  user: new UserService(),
  resource: new ResourceService(),
};

export default API;
