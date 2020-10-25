import Field from "./../field";

export default class Input extends Field {
  constructor({ ...args }) {
    super(args);
    this.element = document.createElement("input");
  }
}
