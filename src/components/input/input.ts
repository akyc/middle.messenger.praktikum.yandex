import Block from '~src/utils/Block';
import template from './input.template';

export type InputProps = {
  type: string;
  name: string;
  className?: string;
  placeholder: string;
  value?: string;
  events?: Record<string, (e: Event) => void>;
};

export default class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super('input', props);
  }

  protected getAttributes() {
    return {
        type: this.props.type,
        class: `${this.props.className || ''}`,
        placeholder: this.props.placeholder,
        name: this.props.name,
        value: `${this.props.value || ''}`,
    };
  }

  public get value(): string {
    return (this.element as HTMLInputElement)?.value;
  }

  protected getEvents() {
    return this.props.events ? this.props.events : {};
  }

  render() {
    return this.compile(template);
  }
}