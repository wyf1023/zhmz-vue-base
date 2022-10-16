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
      //body->请求体
      //page pageSize
      return {
        code: 200,
        msg: "success",
        data: userList.data,
      };
    },
  },
];

export default mocks;
