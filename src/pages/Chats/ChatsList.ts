import Block from '~src/utils/Block';
import getChats from '~src/utils/mock';
import Chat from './Chat';

export type ChatlistProps = {
  onChatClick: (id: number) => void;
};
export default class ChatsList extends Block<ChatlistProps> {
  constructor(props: ChatlistProps) {
    super('div', props);
  }

  protected getAttributes(): Record<string, string> {
    return {
      class: 'sidebar__chats-list',
    };
  }

  protected getChildren(): Record<string, Block> {
    const chats: Record<string, Block> = {};
    [...getChats()].forEach((chat) => {
      Object.assign(this.props, chat);
      chats[`chat${chat.id}`] = new Chat({
        ...chat,
        events: {
          click: () => {
            this.props.onChatClick(chat.id);
            Object.keys(chats).forEach((contact) => {
              chats[contact].setProps({ chatSelectedId: chat.id });
            });
            chats[`chat${chat.id}`].setProps({ chatSelectedId: chat.id });
          },
        },
      });
    });
    return { ...chats };
  }

  protected render(): DocumentFragment {
    const template = Object.keys(this.children).map((child) => `!=${child}\n`).join('');
    return this.compile(template, this.props);
  }
}
