import Block from '~src/utils/Block';
import buttonTemplate from './button.template';

export type ButtonProps = {
  className?: string;
  text: string;
  events?: Record<string, (e: Event) => void>;
};

export default class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  protected getAttributes(): Record<string, string> {
    return {
      class: `btn ${this.props.className || ''}`,
    };
  }

  protected getEvents(): Record<string, (e: Event) => void> {
    return this.props.events ? this.props.events : {};
  }

  protected render(): DocumentFragment {
    return this.compile(buttonTemplate, { text: this.props.text });
  }
}
