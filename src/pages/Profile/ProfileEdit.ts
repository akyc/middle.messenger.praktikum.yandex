import Block from '~src/utils/Block';
import InputContainer from '~src/components/input/input-container';
import Button from '~src/components/button/button';
import template from './ProfileEdit.template';

export default class Profile extends Block {
  constructor() {
    super('div');
  }

  protected getAttributes(): Record<string, string> {
    return {
      class: 'profile-edit-wrapper',
    };
  }

  protected getChildren(): Record<string, Block> {
    const emailInput = new InputContainer({
      type: 'email',
      name: 'email',
      className: 'input-block input-line input-line-secondery input-email',
      placeholder: 'Почта',
      value: 'pochta@yandex.ru',
      isValid: false,
      validationRule: 'email',
    });
    const loginInput = new InputContainer({
      type: 'text',
      name: 'login',
      className: 'input-block input-line input-line-secondery input-login',
      placeholder: 'Логин',
      value: 'ivanivanov',
      isValid: false,
      validationRule: 'login',
    });
    const firstNameInput = new InputContainer({
      type: 'text',
      name: 'first_name',
      className: 'input-block input-line input-line-secondery input-first_name',
      placeholder: 'Имя',
      value: 'Иван',
      isValid: false,
      validationRule: 'name',
    });
    const secondNameInput = new InputContainer({
      type: 'text',
      name: 'first_name',
      className: 'input-block input-line input-line-secondery input-second_name',
      placeholder: 'Фамилия',
      value: 'Иванов',
      isValid: false,
      validationRule: 'name',
    });
    const chatNameInput = new InputContainer({
      type: 'text',
      name: 'first_name',
      className: 'input-block input-line input-line-secondery input-second_name',
      placeholder: 'Имя в чате',
      value: 'Иван',
      isValid: false,
      validationRule: 'name',
    });
    const phoneInput = new InputContainer({
      type: 'text',
      name: 'phone',
      className: 'input-block input-line input-line-secondery input-phone',
      placeholder: 'Телефон',
      value: '+7 (909) 967 30 30',
      isValid: false,
      validationRule: 'phone',
    });
    const formData = [
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      chatNameInput,
      phoneInput,
    ];
    const saveProfile = new Button({
      className: 'btn-primary btn-block',
      text: 'Сохранить',
      events: {
        click: (e) => {
          e.preventDefault();
          formData.forEach((input) => {
            input.validate();
          });
          console.log({
            email: emailInput.value,
            login: loginInput.value,
            firstName: firstNameInput.value,
            secondName: secondNameInput.value,
            chatName: chatNameInput.value,
            phone: phoneInput.value,
          });
        },
      },
    });
    return {
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      chatNameInput,
      phoneInput,
      saveProfile,
    };
  }

  protected render(): DocumentFragment {
    return this.compile(template);
  }
}
