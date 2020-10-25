import FieldCollection from "./field-collection";
import Email from "./Field/Input/email";
import Text from "./Field/Input/text";
import Textarea from "./Field/Textarea/textarea";
import Button from "./Field/Button/button";

export default class FormBuilder {
  constructor() {
    this.formElement = document.createElement("form");
    this._id = "form";
    this._method = "post";
    this._acceptFiles = false;

    // Instance of submit button (to manage UX)
    this.submitButton = null;

    // Create an instance of the form
    this._fieldCollection = new FieldCollection();
  }

  /**
   * Sets the id attribute of this form
   * @param string id
   * @return FormBuilder
   */
  setId(id) {
    this.id = id;
    return this;
  }

  setMethod(method) {
    this._method = method;
    return this;
  }

  acceptFiles(accept) {
    this._acceptFiles = accept;
    return this;
  }

  /**
   * Add a field to collection
   * @return FieldCollection
   */
  addField(fieldDef) {
    let fieldObject = null;
    switch (fieldDef.type.toUpperCase()) {
      case "TEXT":
        fieldObject = new Text(fieldDef);
        break;

      case "EMAIL":
        fieldObject = new Email(fieldDef);
        break;

      case "TEXTAREA":
        fieldObject = new Textarea(fieldDef);
        break;
      case "BUTTON":
        fieldObject = new Button(fieldDef);
        // Is the submit button ?
        if (
          fieldDef.hasOwnProperty("buttonType") &&
          fieldDef.buttonType.toUpperCase() === "SUBMIT"
        ) {
          this.submitButton = fieldObject;
        }
        break;
    }
    if (fieldDef.hasOwnProperty("placeholder")) {
      fieldObject.setPlaceholder(fieldDef.placeholder);
    }

    this._fieldCollection.addField(fieldDef.id, fieldObject);

    return this;
  }

  /**
   * Process form and fields
   * @return HTMLElement
   */
  render() {
    this.formElement.setAttribute("id", this._id);
    this.formElement.setAttribute("method", this._method);
    if (this._acceptFiles) {
      this.formElement.setAttribute("enctype", "multipart-form-data");
    }

    // Append all of the field in collection
    this._fieldCollection.getFields().forEach((fieldObject, id) => {
      this.formElement.append(fieldObject.render());
    });

    // Sets event handler
    this._setEventHandler();

    return this.formElement;
  }

  _setEventHandler() {
    this.formElement.addEventListener("keyup", event => {
      const isValid = this._checkValidators();
      if (isValid) {
        this.submitButton.disabled(false);
      } else {
        this.submitButton.disabled(true);
      }
    });
  }

  _checkValidators() {
    let isOk = true;
    this._fieldCollection.getFields().forEach(fieldObject => {
      if (fieldObject.getValidators().length) {
        if (fieldObject.check() === false) {
          isOk = false;
        }
      }
    });
    return isOk;
  }
}
