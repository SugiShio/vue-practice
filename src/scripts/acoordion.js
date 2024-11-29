import { createApp } from "vue";
document.addEventListener("DOMContentLoaded", () => {
  const elementAcoordion = document.getElementById("acoordion");
  createApp({
    name: "Acoordion",
    data() {
      return {
        isOpen: [],
      };
    },
  }).mount(elementAcoordion);
});
