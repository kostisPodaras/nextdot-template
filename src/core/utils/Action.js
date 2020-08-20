import snakeCase from 'lodash/snakeCase';

const ACTION_SCHEMA_VALIDATION_ERROR = '@@ACTION_SCHEMA/VALIDATION_ERROR';

const actionError = (action, errors) => {
  console.log(`ACTION of type ${action.type} ERROR START!`);
  console.dir(action);
  console.dir(errors);
  console.log(`ACTION of type ${action.type} ERROR END!`);

  return {
    type: ACTION_SCHEMA_VALIDATION_ERROR,
    payload: {
      type: action.type,
      errors,
    },
  };
};

const noValidation = () => true;
noValidation.errors = null;

const Action = (namespace = '', nsValidate = noValidation) => (
  name = '',
  validate = nsValidate,
) => {
  const actionCreator = (payload, shouldValidate = true) => {
    const action = {
      type: actionCreator.type,
      payload,
    };

    if (!shouldValidate) {
      return action;
    }

    const isValid = validate(action);

    return isValid ? action : actionError(action, validate.errors);
  };

  actionCreator.type = `${namespace}/${snakeCase(name).toUpperCase()}`;
  actionCreator.validate = validate;

  return actionCreator;
};

export default Action;
