import Input from "./input";

export default class Email extends Input {
  constructor(...args) {
    super();
    this.element.setAttribute("type", "email");
  }
}
