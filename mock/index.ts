/*
 * @Author: wuyefan
 * @Date: 2022-10-18 16:21:06
 * @Last Modified by:   wuyefan
 * @Last Modified time: 2022-10-18 16:21:06
 */
import { url } from "inspector";
import mockJS from "mockjs";

const userList = mockJS.mock({
  "data|100": [
    {
      name: "@name", //生成不同的中文名
      ename: "@name", //生成不同的英文名
      "id|+1": 1,
    },
  ],
});

const mocks = [
  {
    method: "post",
    url: "/api/users",
    response: ({ body }) => {
      return {
        code: 200,
        msg: "success",
        data: userList.data,
      };
    },
  },
];

export default mocks;
