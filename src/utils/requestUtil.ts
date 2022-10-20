/*
 * 请求封装
 * @Author: wuyefan
 * @Date: 2022-10-18 11:03:29
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 21:22:57
 */
import axios from "axios";
import {
  notificationMsg,
  remindType,
  serviceError,
  serviceCode,
  serviceCodeMsg,
} from "@/utils";
import { ReqParams, RspParams } from "@/types";
import { useUserStore } from "@/plugins/stores/store/user";

/**
 * 默认请求参数
 */
const reqParams: ReqParams = {
  baseURL: import.meta.env.APP_BASE_URL,
  responseType: "json",
  headers: {
    Authorization: "",
  },
  timeout: 10000,
  micservice: import.meta.env.APP_MICSERVICE,
};

/**
 * 初始化对象
 */
const service = axios.create();

/**
 * @returns 获取Token
 */
const getToken = (): string => {
  let userStore = useUserStore();
  return userStore.userState.token;
};

/**
 * 请求拦截
 */
service.interceptors.request.use((config) => {
  config.headers.Authorization = getToken() || "";
  // 自定义header，可添加项目token
  return config;
});

/**
 * 响应拦截
 */
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let response: RspParams;
    let userStore = useUserStore();

    /**
     * 系统超时
     */
    if (error.code === serviceError.timeout) {
      response = {
        status: serviceCode.timeout,
        succeed: false,
        msg: serviceCodeMsg.timeout,
      };
    } else if (error.code === serviceError.unauthorized) {
      /**
       * 服务器错误
       */
      if (error.response.status === serviceCode.unauthorized) {
        userStore.unauthorized();
        response = {
          status: serviceCode.unauthorized,
          succeed: false,
          msg: serviceCodeMsg.unauthorized + error.response.data.msg,
        };
      } else if (error.response.status === serviceCode.error) {
        response = {
          status: serviceCode.error,
          succeed: false,
          msg: serviceCodeMsg.error + error.response.data.msg,
        };
      }
    }
    return Promise.reject(response);
  }
);

/**
 * 请求函数
 * @param {string} url
 * @param {string} options 请求参数 {micservice:微服务前缀，pramas:参数，method:请求方法（post,get）}
 */
async function request<T>(
  url: string,
  options?: any
): Promise<RspParams | T | any> {
  try {
    options = { url, ...reqParams, ...options };
    options.url = options.micservice + url;
    let result = await service(options);
    return result.data;
  } catch (error) {
    notificationMsg(remindType.error, error.msg);
  }
}

export { request };
