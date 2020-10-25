export default class FieldCollection {
  constructor() {
    /**
     * @var Map
     * Contains all required fields needed by this Form object
     */
    this.fields = new Map();
  }

  /**
   * Add a Field object in the fields collection
   * @param string id - id attribute value for the field
   * @param Field fieldObject - The object field
   */
  addField(id, fieldObject) {
    fieldObject.setId(id);
    fieldObject.setName(id);

    this.fields.set(id, fieldObject);
  }

  getFields() {
    return this.fields;
  }
}
