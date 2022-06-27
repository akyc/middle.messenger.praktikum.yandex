import Block from '~src/utils/Block';
import InputContainer from '~src/components/input/input-container';
import Button from '~src/components/button/button';
import LoginTemplate from './Login.template';

export default class Login extends Block {
  constructor() {
    super('div');
  }

  protected getAttributes(): Record<string, string> {
    return {
      class: 'login-page form-container',
    };
  }

  protected getChildren(): Record<string, Block> {
    const loginInput = new InputContainer({
      type: 'text',
      name: 'login',
      className: 'input-line input-login',
      placeholder: 'Логин',
      labelText: 'Логин',
      isValid: false,
      validationRule: 'login',
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
    const formData = [loginInput, passwordInput];
    const submitButton = new Button({
      className: 'btn-primary btn-block',
      text: 'Авторизоваться',
      events: {
        click: (e) => {
          e.preventDefault();
          formData.forEach((input) => {
            input.validate();
          });
          // eslint-disable-next-line no-console
          console.log({
            login: loginInput.value,
            password: passwordInput.value,
          });
        },
      },
    });
    const signinButton = new Button({
      className: 'btn-link btn-block',
      text: 'Нет аккаунта?',
      events: {
        click: (e) => {
          e.preventDefault();
          window.location.href = '/signin';
        },
      },
    });
    return {
      loginInput,
      passwordInput,
      submitButton,
      signinButton,
    };
  }

  public render(): DocumentFragment {
    return this.compile(LoginTemplate);
  }
}
