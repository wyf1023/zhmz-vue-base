/*
 * 通知提示消息
 * @Author: wuyefan
 * @Date: 2022-10-18 16:21:00
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-19 22:48:20
 */
export enum remindMessage {
  remindTitle = "温馨提示",
  netError = "对不起，系统开小差了，请稍后再试。",
  require = "请完善您的必填项。",
}

/**
 * 服务器错误提示
 */
export enum serviceError {
  timeout = "ECONNABORTED",
  unauthorized = "ERR_BAD_REQUEST",
}

/**
 * 服务器错误代码
 */
export enum serviceCode {
  /**
   * 超时
   */
  timeout = 504,
  /**
   * 成功
   */
  success = 200,
  /**
   * 未找到
   */
  notfound = 404,
  /**
   * 服务器错误
   */
  error = 500,

  /**
   * 未授权
   */
  unauthorized = 401,
}

export enum serviceCodeMsg {
  /**
   * 超时
   */
  timeout = "对不起，系统开小差了，请稍后再试。CODE:504",
  /**
   * 成功
   */
  success = "成功返回请求的数据。",
  /**
   * 未找到
   */
  notfound = "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  /**
   * 服务器错误
   */
  error = "对不起，系统开小差了，请稍后再试。",
  /**
   * 未授权
   */
  unauthorized = "对不起，系统开小差了，请稍后再试。",
}

// 200: "成功返回请求的数据。",
// 400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
// 401: "用户没有权限（令牌、用户名、密码错误）。",
// 403: "用户得到授权，但是访问是被禁止的。",
// 404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
// 405: "请求方法不被允许。",
// 406: "请求的格式不可得。",
// 410: "请求的资源被永久删除，且不会再得到的。",
// 422: "当创建一个对象时，发生一个验证错误。",
// 500: "服务器发生错误，请检查服务器。",
// 502: "网关错误。",
// 503: "服务不可用，服务器暂时过载或维护。",
// 504: "网关超时。",
