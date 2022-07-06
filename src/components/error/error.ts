import Block from '~src/utils/Block';
import template from './error.template';

export type ErrorProps = {
  title: string;
  subtitle: string;
};

export default class Error extends Block<ErrorProps> {
  constructor(props: ErrorProps) {
    super('div', props);
  }

  protected getAttributes() {
    return {
      class: 'error-message',
    };
  }

  protected render() {
    return this.compile(template, {
      title: this.props.title,
      subtitle: this.props.subtitle,
    });
  }
}
