import moment from 'moment';

const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const required = (value) => (value ? undefined : 'Required');

const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

const number = (value) =>
  value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined;

const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const emails = (values) =>
  values.reduce(
    (error, emailAddress) => error || email(emailAddress),
    undefined,
  );

const tooOld = (value) =>
  value && value > 65 ? 'You might be too old for this' : undefined;

const alphaNumeric = (value) =>
  value && /[^a-zA-Zα-ωΑ-Ωίϊΐόάέύϋΰήώ0-9- ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

const mobilePhone = (value) =>
  value && !value.startsWith('69')
    ? 'Mobile phone number must be 69********'
    : undefined;

const idNumber = (value) =>
  value && value.includes('%') ? '% character is not allowed' : undefined;

const passwordsMatch = (value, { password }) =>
  value === password ? undefined : 'Passwords do not match';

const duration = (value) => {
  const error = 'Invalid duration';

  if (!value.includes(' ')) {
    return error;
  }

  const [unit, val] = value.split(' ');
  const unitNum = parseInt(unit, 10);

  if (moment.duration(unitNum, val).toISOString() === 'P0D') {
    return error;
  }

  return undefined;
};

const minLength2 = minLength(2);
const minLength5 = minLength(5);
const minLength9 = minLength(9);
const minLength15 = minLength(15);
const maxLength30 = maxLength(30);
const maxLength120 = maxLength(120);

export {
  composeValidators,
  required,
  maxLength,
  maxLength30,
  maxLength120,
  minLength,
  minLength2,
  minLength5,
  minLength9,
  minLength15,
  number,
  minValue,
  emails,
  email,
  tooOld,
  alphaNumeric,
  phoneNumber,
  passwordsMatch,
  duration,
  mobilePhone,
  idNumber,
};
