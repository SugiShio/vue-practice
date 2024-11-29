import { createApp } from "vue";
document.addEventListener("DOMContentLoaded", () => {
  const elementMemo = document.getElementById("memo");
  createApp({
    name: "Memo",
    data() {
      return {
        text: "hello?!",
      };
    },
  }).mount(elementMemo);
});
