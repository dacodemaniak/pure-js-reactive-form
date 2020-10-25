import Field from "./../field";

export default class Button extends Field {
  constructor({ ...args }) {
    super(args);
    this.element = document.createElement("button");

    if (args.hasOwnProperty("buttonType")) {
      this.element.setAttribute("type", args.buttonType);
    } else {
      this.element.setAttribute("type", "submit");
    }
    if (args.hasOwnProperty("disabled")) {
      this.element.setAttribute("disabled", "disabled");
    }

    this.element.textContent = args.content;
  }

  disabled(disabledState) {
    if (disabledState) {
      this.element.setAttribute("disabled", "disabled");
    } else {
      this.element.removeAttribute("disabled");
    }
  }
}
