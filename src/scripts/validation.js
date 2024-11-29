import { createApp } from "vue";
const REGEX_EMAIL =
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

document.addEventListener("DOMContentLoaded", () => {
  const elementValidation = document.getElementById("validation");
  if (!elementValidation) return;
  createApp({
    name: "Validation",
    data() {
      return {
        email: "",
      };
    },
    computed: {
      errorText() {
        return REGEX_EMAIL.test(this.email) || !this.email
          ? ""
          : "形式が不正です";
      },
    },
  }).mount(elementValidation);
});
