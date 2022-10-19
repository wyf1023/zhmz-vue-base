/*
 * sm2加密工具类
 * @Author: wuyefan
 * @Date: 2022-10-19 10:58:43
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-19 11:46:51
 */

import sm from "sm-crypto";

/**
 * sm2加密
 */
const sm2Encrpt = (password: string) => {
  let publicKey =
    "0495f30a0752abe637302c243c91d854ae1c5acce7c03698024c60288c3b4a071cd32f67386c948c671f399c7db0c6875c16b603ed24df2ce08ea5ad50a3246e46";

  let passWord = sm.sm2Encrpt(password, publicKey);
  console.log(passWord);
  return passWord;
};

function SM2Cipher(a) {
  this.ct = 1;
  this.sm3c3 = this.sm3keybase = this.p2 = null;
  this.key = Array(32);
  this.keyOff = 0;
  this.cipherMode = "undefined" != typeof a ? a : 1;
}

export { sm2Encrpt };
