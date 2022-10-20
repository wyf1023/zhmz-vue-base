/*
 * @Author: wuyefan
 * @Date: 2022-10-20 20:33:17
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-10-20 21:24:33
 */
import { MenuInfo } from "@/types";
import { request } from "@/utils";
import { RspParams } from "@/types";

enum Url {
  MENUS_PERMISSION = "/auths/categoryRes",
}

interface IResource {
  /**
   * 获取菜单列表
   */
  getMenus: () => Promise<RspParams>;
}

/**
 * 权限类
 */
class ResourceService implements IResource {
  async getMenus(): Promise<RspParams> {
    const options = {
      method: "get",
      params: {
        subsystem_id: import.meta.env.APP_SUBSYSTEM_ID,
        has_action: false,
        tree_mode: true,
        category: "classify_office",
      },
    };
    let res = request(Url.MENUS_PERMISSION, options);

    return res;
  }
}

export default ResourceService;
