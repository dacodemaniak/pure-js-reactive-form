import Input from "./input";
import validateField from "./../../Validators/validators";

export default class Text extends Input {
  constructor({ ...args }) {
    super(args);
    this.element.setAttribute("type", "text");
  }

  check() {
    let isOk = true;
    this.validators.forEach(validator => {
      if (validateField(this, validator) === false) {
        isOk = false;
      }
    });
    return isOk;
  }
}
