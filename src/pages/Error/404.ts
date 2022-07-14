import Block from '~src/utils/Block';
import Error from '~src/components/error/error';
import Button from '~src/components/button/button';
import Error404Template from './Error.template';

export default class Error404 extends Block {
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
      title: '404',
      subtitle: 'Страница не найдена',
    });
    const button = new Button({
      className: 'btn btn-link',
      text: 'Назад к чатам',
      events: {
        click: (e) => {
          e.preventDefault();
          window.location.href = '/'; // demo routing only
        },
      },
    });
    return { errorBlock, button };
  }

  protected render(): DocumentFragment {
    return this.compile(Error404Template);
  }
}
