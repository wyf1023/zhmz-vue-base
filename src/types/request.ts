/**
 * 请求参数类型
 */
export interface ReqParams {
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
export interface RspParams {
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
  succeed?: boolean;

  /**
   * 返回消息
   */
  msg?: string;
  /**
   * 总条数
   */
  total?: number;
}
