// Import stylesheets
import FormBuilder from "./js/form/form-builder";
import {
  isRequired,
  minLength,
  maxLength,
  matchPattern,
  emailPattern
} from "./js/form/Validators/validators";
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");

(() => {
  const formBuilder = new FormBuilder();
  formBuilder
    .addField({
      type: "text",
      placeholder: "Votre nom",
      id: "name-field",
      label: "Nom",
      validators: [isRequired]
    })
    .addField({
      id: "send-field",
      type: "button",
      buttonType: "submit",
      content: "Valider",
      disabled: true
    });

  // Reconciliate form to the actual DOM
  document.getElementById("form-holder").append(formBuilder.render());
})();
