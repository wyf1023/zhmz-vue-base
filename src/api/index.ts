/*
 * @Author: wuyefan
 * @Date: 2022-10-20 21:04:25
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 21:05:24
 */
import UserService from "@/api/user";
import ResourceService from "@/api/resource";

const API = {
  user: new UserService(),
  permission: new ResourceService(),
};

export default API;
