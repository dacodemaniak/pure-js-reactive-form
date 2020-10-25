import Field from "./../field";

export default class Textarea extends Field {
  constructor(...args) {
    super(args);
    this.element = document.createElement("textarea");
  }
}
