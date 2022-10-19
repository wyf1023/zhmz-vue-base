import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate"; // pinia数据持久化存储

const store = createPinia();
store.use(
  createPersistedState({
    serializer: {
      // 指定参数序列化器
      serialize: JSON.stringify,
      deserialize: JSON.parse,
    },
  })
);

export default store;

/**
 * 全局存储名称
 */
export enum StoreNameEnum {
  User = "User",
}
