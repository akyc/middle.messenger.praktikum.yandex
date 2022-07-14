import Block from '~src/utils/Block';
import Button from '~src/components/button/button';
import Input from '~src/components/input/input';
import ChatsTemplate from './Chats.template';
import ChatsList from './ChatsList';

export default class Chats extends Block {
  constructor() {
    super('div');
    this.setState({ chatSelectedId: null });
  }

  protected getAttributes(): Record<string, string> {
    return {
      class: 'chats-page',
    };
  }

  protected getChildren(): Record<string, Block<{}>> {
    const profileLink = new Button({
      className: 'btn-link btn-link-secondary',
      text: 'Профиль',
      events: {
        click: (e) => {
          e.preventDefault();
          window.location.href = '/profile';
        },
      },
    });
    const searchInput = new Input({
      type: 'search',
      name: 'search',
      className: 'search-input',
      placeholder: 'Поиск',
    });
    const chatsList = new ChatsList({
      onChatClick: (id: number) => this.setState({ chatSelectedId: id }),
    });
    return {
      profileLink,
      searchInput,
      chatsList,
    };
  }

  protected render(): DocumentFragment {
    return this.compile(ChatsTemplate, { chatSelectedId: this.state.chatSelectedId });
  }
}
