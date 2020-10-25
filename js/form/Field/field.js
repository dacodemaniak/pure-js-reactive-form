import Label from "./Label/label";

export default class Field {
  constructor({ ...args }) {
    /** 
     Element himself (any acceptable form field)
     @var HTMLElement
     */
    this.element = null;

    /**
     * Associated label
     * @var Label
     */
    this.labelObject = null;

    /**
     * id attribute
     * @var string
     */
    this.id = args.id;

    /**
     * name attribute
     * @var string
     */
    this.name = args.id;

    /**
     * placeholder attribute value
     * @var string
     */
    this.placeholder = args.hasOwnProperty("placeholder")
      ? args.placeholder
      : "";

    // Do we have to make a label ?
    if (args.hasOwnProperty("label")) {
      this.labelObject = new Label(args);
    }

    this.fieldWrapper = document.createElement("div");
    this.fieldWrapper.classList.add("form-group");

    // Validators
    this.validators = args.hasOwnProperty("validators") ? args.validators : [];
  }

  setId(id) {
    this.id = id;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }

  /**
   * Get validators for this form field
   * @return array
   */
  getValidators() {
    return this.validators;
  }

  /**
   * Check this field against specified validators
   * @return bool
   */
  check() {}

  render() {
    if (this.labelObject !== null) {
      this.fieldWrapper.append(this.labelObject.render());
    }

    if (this.placeholder.trim().length) {
      this.element.setAttribute("placeholder", this.placeholder);
    }
    this.element.setAttribute("id", this.id);
    this.element.setAttribute("name", this.name);

    // @todo Add some custom classes
    this.element.classList.add("form-control");

    this.fieldWrapper.append(this.element);

    return this.fieldWrapper;
  }
}
