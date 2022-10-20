/*
 * @Author: wuyefan
 * @Date: 2022-10-20 14:36:20
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 16:01:35
 */

import { remindMessage } from "./common/message";
import { remindType } from "./common/remindType";

const messageBox = (msg: string, callback: () => void) => {
  ElMessageBox.confirm(msg, remindMessage.remindTitle, {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: remindType.warning,
    customStyle: "width:300px;height:130px;",
  })
    .then(() => {
      callback();
      ElMessage({
        type: remindType.success,
        message: remindMessage.okMessage,
      });
    })
    .catch(() => {});
};

export { messageBox };
