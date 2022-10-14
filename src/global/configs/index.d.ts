export interface AppConfig {
  avatarToolBar: AvatarToolBar[];
}

/**
 * 头像工具栏
 */
interface AvatarToolBar {
  /**
   * id
   */
  id: string;
  /**
   *  工具栏标题
   */
  title: string;
  /**
   *  工具栏图片
   */
  icon?: string;
  /**
   * 工具栏跳转地址
   */
  url: string;
}
