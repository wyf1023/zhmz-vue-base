/*
 * @Author: wuyefan
 * @Date: 2022-10-18 11:03:29
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-18 16:22:46
 */
import axios from "axios";
/**
 * 请求参数类型
 */
interface ReqParams {
  baseURL?: string;
  /**
   * 超时时间
   */
  timeout?: number;
  /**
   * 头文件
   */
  headers?: any;
  /**
   * 响应类型
   */
  responseType?: string;
  /**
   * 微服务前缀
   */
  micservice?: string;
}

/**
 *响应类型
 */
interface RspParams {
  /**
   * 返回的数据
   */
  data?: any;
  /**
   * 返回状态码
   */
  status?: number;
  /**
   * 请求状态
   */
  success?: boolean;
  /**
   * 总条数
   */
  total?: number;
}

/**
 * 默认请求参数
 */
const reqParams: ReqParams = {
  baseURL: import.meta.env.APP_BASE_URL,
  responseType: "json",
  headers: {
    Authorization: "",
  },
  timeout: 30000,
  micservice: import.meta.env.APP_MICSERVICE,
};

/**
 * 初始化对象
 */
const service = axios.create();
/**
 * 请求拦截
 */
service.interceptors.request.use((config) => {
  // 自定义header，可添加项目token
  config.headers.token = "token";
  return config;
});

/**
 * 请求函数
 * @param {string} url
 * @param {string} options 请求参数 {micservice:微服务前缀，pramas:参数，method:请求方法（post,get）}
 */
const request = async (url: string, options?: any): Promise<RspParams> => {
  try {
    options = { url, ...reqParams, ...options };
    options.url = options.micservice + url;

    let result = await service(options);
    let res: RspParams = result.data;
    return res;
  } catch (error) {
    return error;
  }
};

export { request };
