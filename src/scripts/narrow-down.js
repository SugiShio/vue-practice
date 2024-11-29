import { createApp } from "vue";
document.addEventListener("DOMContentLoaded", () => {
  const elementNarrowDown = document.getElementById("narrow-down");

  const baseUrl = elementNarrowDown.dataset.baseUrl || "";
  createApp({
    name: "NarrowDown",
    data() {
      return {
        conditions: [],
      };
    },
    computed: {
      url() {
        const queryText = this.conditions.length
          ? `?${this.conditions.join("+")}`
          : "";
        return baseUrl + queryText;
      },
    },
    methods: {
      sendRequest() {
        alert(`ここにAPIリクエストを送る処理などを書きます\n${this.url}`);
      },
    },
  }).mount(elementNarrowDown);
});
