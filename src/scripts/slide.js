import { createApp } from "vue";

document.addEventListener("DOMContentLoaded", () => {
  const elementSlide = document.getElementById("slide");
  if (!elementSlide) return;
  createApp({
    name: "Slide",
    data() {
      return {
        email: "",
        stepNo: 0,
        slide: "slide",
      };
    },
    computed: {
      isInput() {
        return this.stepNo === 0;
      },
      isConfirm() {
        return this.stepNo === 1;
      },
      isComplete() {
        return this.stepNo === 2;
      },
    },
    methods: {
      incrementPage() {
        if (this.stepNo < 2) this.stepNo++;
        this.slide = "slide-to-right";
      },
      decrementPage() {
        if (0 < this.stepNo) this.stepNo--;
        this.slide = "slide-to-left";
      },
    },
  }).mount(elementSlide);
});
