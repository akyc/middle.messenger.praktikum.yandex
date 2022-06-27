import Block from '~src/utils/Block';
import InputContainer from '~src/components/input/input-container';
import Button from '~src/components/button/button';
import template from './Signin.template';

export default class Signin extends Block {
  constructor() {
    super('div');
  }

  protected getAttributes(): Record<string, string> {
    return {
      class: 'signin-page form-container',
    };
  }

  protected getChildren(): Record<string, Block> {
    const emailInput = new InputContainer({
      type: 'email',
      name: 'email',
      className: 'input-line input-email',
      placeholder: 'Почта',
      labelText: 'Почта',
      isValid: false,
      validationRule: 'email',
    });
    const loginInput = new InputContainer({
      type: 'text',
      name: 'login',
      className: 'input-line input-login',
      placeholder: 'Логин',
      labelText: 'Логин',
      isValid: false,
      validationRule: 'login',
    });
    const firstNameInput = new InputContainer({
      type: 'text',
      name: 'first_name',
      className: 'input-line input-first_name',
      placeholder: 'Имя',
      labelText: 'Имя',
      isValid: false,
      validationRule: 'name',
    });
    const secondNameInput = new InputContainer({
      type: 'text',
      name: 'first_name',
      className: 'input-line input-second_name',
      placeholder: 'Фамилия',
      labelText: 'Фамилия',
      isValid: false,
      validationRule: 'name',
    });
    const phoneInput = new InputContainer({
      type: 'text',
      name: 'phone',
      className: 'input-line input-phone',
      placeholder: 'Телефон',
      labelText: 'Телефон',
      isValid: false,
      validationRule: 'phone',
    });
    const passwordInput = new InputContainer({
      type: 'password',
      name: 'password',
      className: 'input-line input-password',
      placeholder: 'Пароль',
      labelText: 'Пароль',
      isValid: false,
      validationRule: 'password',
    });
    const passwordCheckInput = new InputContainer({
      type: 'password',
      name: 'password-check',
      className: 'input-line input-password-check',
      placeholder: 'Пароль (ещё раз)',
      labelText: 'Пароль (ещё раз)',
      isValid: false,
      validationRule: 'passwordEqual',
    });
    const formData = [emailInput, loginInput, firstNameInput, secondNameInput, phoneInput, passwordInput];
    const submitButton = new Button({
        className: 'btn-primary btn-block',
        text: 'Зарегистрироваться',
        events: {
            click: (e) => {
                e.preventDefault();
                formData.forEach((input) => {
                    input.validate();
                })
                passwordCheckInput.validate(passwordInput.value)
                console.log(
                     {
                        email: emailInput.value, 
                        login: loginInput.value, 
                        firstName: firstNameInput.value, 
                        secondName: secondNameInput.value, 
                        phone: phoneInput.value, 
                        password: passwordInput.value,
                     }
                )
            }
        }
    });
    const loginButton = new Button({
        className: 'btn-link btn-block',
        text: 'Войти',
        events: {
            click: (e) => {
                e.preventDefault();
                window.location.href = '/login'
            }
        }
    });
    return {
        emailInput,
        loginInput,
        firstNameInput,
        secondNameInput,
        phoneInput,
        passwordInput,
        passwordCheckInput,
        submitButton,
        loginButton
    };
  }

  public render(): DocumentFragment {
    return this.compile(template);
  }
}