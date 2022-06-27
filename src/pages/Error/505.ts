import Block from '~src/utils/Block';
import Error from '~src/components/error/error';
import Button from '~src/components/button/button';
import ErrorTemplate from './Error.template';

export default class Error505 extends Block {
  constructor() {
    super('div');
  }

  protected getAttributes(): Record<string, string> {
    return {
      class: 'error-page',
    };
  }

  protected getChildren(): Record<string, Block> {
    const errorBlock = new Error({
      title: '505',
      subtitle: 'Мы уже фиксим',
    });
    const button = new Button({
      className: 'btn btn-link',
      text: 'Назад к чатам',
      events: {
        click: (e) => {
          e.preventDefault();
          window.location.href = '/chats'; // demo routing
        },
      },
    });
    return { errorBlock, button };
  }

  public render(): DocumentFragment {
    return this.compile(ErrorTemplate);
  }
}
