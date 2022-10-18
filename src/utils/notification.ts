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


const errorMsg = (type) => {
  ElNotification({
    title: remindMessage.remindTitle,
    message: remindMessage.netError,
    type: type,
  });
};

/**
 *
 * @param msgType 弹框类型（/utils/common/notificationType）
 */
const notificationMsg = (type: notificationType) => {
  switch (type) {
    case notificationType.error:
      errorMsg(type);
      break;
    default:
      errorMsg(type);
      break;
  }
};

export { notificationMsg };
