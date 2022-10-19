import { UsernamePassword, TokenResult } from "@/types";
import { request } from "@/utils";

enum Url {
  ACCOUNT_LOGIN = "/auths/login",
}

/**
 * 用户接口
 */
export interface IUser {
  accountLogin: (data: UsernamePassword) => Promise<any>;
}

class User implements IUser {
  /**
   * 账户登录
   * @param data
   */
  async accountLogin(data: UsernamePassword): Promise<TokenResult> {
    const options = {
      method: "post",
      data: {
        captcha: data.captcha,
        captchaKey: data.captchaKey,
        username: data.username,
        password: data.password,
      },
    };

    const res = await request(Url.ACCOUNT_LOGIN, options);

    let tokenResult: TokenResult = {
      token: "",
      refreshToken: "",
    };
    tokenResult.token = res.data.token;
    tokenResult.refreshToken = res.data.refreshToken;
    return tokenResult;
  }
}

export default User;
