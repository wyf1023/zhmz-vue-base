/*
 * 验证码工具类
 * @Author: wuyefan
 * @Date: 2022-10-19 10:59:05
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-19 22:22:10
 */

import { request } from "@/utils/common/request";

interface captcha {
  captchaImageBase64: string;
  captchaKey: string;
}

/**
 * 生成验证码
 */
const loadCaptcha = async (): Promise<captcha> => {
  const res = await request("/captcha?" + Math.random(), {
    method: "get",
  });
  return {
    captchaImageBase64: res.captchaImageBase64,
    captchaKey: res.captchaKey,
  };
};

export { loadCaptcha };
