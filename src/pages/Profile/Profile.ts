import Block from '~src/utils/Block';
import Button from '~src/components/button/button';
import template from './Profile.template';

export default class Profile extends Block {
  constructor() {
    super('div');
  }

  protected getAttributes(): Record<string, string> {
    return {
      class: 'profile-wrappers',
    };
  }

  protected getChildren(): Record<string, Block> {
    const editProfile = new Button({
      className: 'btn-link btn-md',
      text: 'Изменить данные',
      events: {
        click: (e) => {
          e.preventDefault();
          window.location.href = '/profile-edit';
        },
      },
    });
    const editPassword = new Button({
      className: 'btn-link btn-md',
      text: 'Изменить пароль',
      events: {
        click: (e) => {
          e.preventDefault();
          window.location.href = '/profile-edit';
        },
      },
    });
    const Logout = new Button({
      className: 'btn-link btn-md red',
      text: 'Выйти',
      events: {
        click: (e) => {
          e.preventDefault();
          window.location.href = '/login';
        },
      },
    });
    return {
      editProfile,
      editPassword,
      Logout,
    };
  }

  protected render(): DocumentFragment {
    return this.compile(template);
  }
}
