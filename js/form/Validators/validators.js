const validateField = (fieldObject, validatorFn) => validatorFn(fieldObject);

export const isRequired = fieldObject => {
  const value = fieldObject.element.value.trim();
  return value.length ? true : false;
};

export const minLength = fieldObject => true;

export const maxLength = fieldObject => true;

export const matchPattern = fieldObject => true;

export const emailPattern = fieldObject => true;

export default validateField;
