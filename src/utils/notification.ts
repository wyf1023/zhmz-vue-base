/*
 * @Author: wuyefan
 * @Date: 2022-10-18 16:09:17
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-18 16:20:44
 */

/**
 * 提示框工具
 */
import { notificationType } from "@/utils/common/notificationType";
import { remindMessage } from "@/utils/common/message";

const errorMsg = (type: notificationType, msg?: string) => {
  ElNotification({
    title: remindMessage.remindTitle,
    message: msg || remindMessage.netError,
    type: type,
  });
};

/**
 *
 * @param msgType 弹框类型（/utils/common/notificationType）
 */
const notificationMsg = (type: notificationType, msg?: string) => {
  switch (type) {
    case notificationType.error:
      errorMsg(type, msg);
      break;
    default:
      errorMsg(type, msg);
      break;
  }
};

export { notificationMsg };
