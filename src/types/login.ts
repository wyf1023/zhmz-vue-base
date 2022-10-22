/**
 * 账号登录参数
 */
export interface UsernamePassword {
  /**
   * 用户名
   */
  username: string;
  /**
   * @description 密码
   */
  password: string;
  /**
   * @description 验证码
   */
  captcha?: string;
  /**
   * @description 验证码Key
   */
  captchaKey?: string;
}

/**
 * Token 响应类型
 */
export interface TokenResult {
  token: string;
  refreshToken?: string;
}
