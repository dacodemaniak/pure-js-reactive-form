export default class Label {
  constructor({ ...args }) {
    this.content = args.label;
    this.forField = args.id;
  }

  /**
   * Render a label HTMLElement
   * @return HTMLElement
   */
  render() {
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", this.forField);
    labelElement.textContent = this.content;

    return labelElement;
  }
}
