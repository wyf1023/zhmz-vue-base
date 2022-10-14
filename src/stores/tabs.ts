import { defineStore } from "pinia";
import { ref } from "vue";

export const useTabStore = defineStore("tabs", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
