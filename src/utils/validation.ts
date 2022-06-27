export const validation = {
  login: (value: string): { isValid: boolean; message: string } => ({
    isValid: /^(?=.*[A-Za-z\-_])(?=.*[\d]*)[A-Za-z\d\-_]{3,20}$/.test(value),
    message: 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов',
  }),
  password: (value: string): { isValid: boolean; message: string } => ({
    isValid: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/.test(value),
    message: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  }),
  passwordEqual: (value: string, valueEqual?: string): { isValid: boolean; message: string } => ({
    isValid: value === valueEqual,
    message: 'Пароли не совпали',
  }),
  name: (value: string): { isValid: boolean; message: string } => ({
    isValid: /^[А-ЯA-Z]+[А-Яа-яЁёA-Za-z-]+$/.test(value),
    message: 'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов',
  }),
  email: (value: string): { isValid: boolean; message: string } => ({
    isValid: /^[\w-.]+@[a-zA-Z]+\.[\w-]*$/.test(value),
    message: 'Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы',
  }),
  phone: (value: string): { isValid: boolean; message: string } => ({
    isValid: /^[\d+][\d]{10,15}$/.test(value),
    message: 'От 10 до 15 символов, состоит из цифр, может начинается с плюса',
  }),
  message: (value: string): { isValid: boolean; message: string } => ({
    isValid: Boolean(value.length),
    message: 'Не должно быть пустым',
  }),
};

export type validationRuleStrings = keyof typeof validation;
