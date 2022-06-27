import Block from '~src/utils/Block';
import ChatTemplate from './Chat.template';
import { ChatProps } from '~src/utils/mock';

export default class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super('div', props);
  }

  protected getAttributes(): Record<string, string> {
    return {
      class: 'chat',
    };
  }

  protected getEvents(): Record<string, (e: Event) => void> {
    return this.props.events ? this.props.events : {};
  }

  protected render(): DocumentFragment {
    return this.compile(ChatTemplate, {
      chatSelected: this.props.chatSelectedId === this.props.id ? 'chat__selected' : '',
      avatar: this.props.avatar,
      contact: this.props.contact,
      message: this.props.message,
      date: this.props.date,
      unread: this.props.unread,
    });
  }
}
