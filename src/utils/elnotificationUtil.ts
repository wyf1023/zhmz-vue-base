/*
 * 提示框工具
 * @Author: wuyefan
 * @Date: 2022-10-18 16:09:17
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 15:15:45
 */
import { remindType } from "@/utils/common/remindType";
import { remindMessage } from "@/utils/common/message";

const errorMsg = (type: remindType, msg?: string) => {
  ElNotification({
    title: remindMessage.remindTitle,
    message: msg || remindMessage.netError,
    type: type,
  });
};

/**
 *
 * @param msgType 弹框类型（/utils/common/remindType）
 */
const notificationMsg = (type: remindType, msg?: string) => {
  switch (type) {
    case remindType.error:
      errorMsg(type, msg);
      break;
    default:
      errorMsg(type, msg);
      break;
  }
};

export { notificationMsg };
