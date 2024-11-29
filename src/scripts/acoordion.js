import { createApp } from "vue";
document.addEventListener("DOMContentLoaded", () => {
  const elementAcoordion = document.getElementById("acoordion");
  if (!elementAcoordion) return;
  createApp({
    name: "Acoordion",
    data() {
      return {
        isOpen: [],
      };
    },
  }).mount(elementAcoordion);
});
