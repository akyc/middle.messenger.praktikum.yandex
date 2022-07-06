import { VALIDATION, validationRuleStrings } from '~src/utils/validation';
import Block from '~src/utils/Block';
import Input, { InputProps } from './input';
import template from './input-container.template';

export type InputContainerProps = {
  labelText?: string,
  isValid: boolean;
  validationRule: validationRuleStrings;
  validationMessage?: string;
};

export default class InputContainer extends Block<InputContainerProps & InputProps> {
  constructor(props: InputContainerProps & InputProps) {
    super('div', props);
  }

  protected getChildren(): Record<string, Block<InputProps>> {
    const inputField = new Input({
      ...this.props,
      events: {
        blur: this.validate.bind(this),
      },
    });
    return {
      inputField,
    };
  }

  protected getAttributes(): Record<string, string> {
    return ({
      class: 'input-container',
    });
  }

  public get value(): string {
    return this.children.inputField.value;
  }

  public validate(value?: string) {
    const { validationRule } = this.props;
    const { isValid, message } = VALIDATION[validationRule](this.children.inputField.value, value);
    this.setProps({
      validationMessage: isValid ? '' : message,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      labelText: this.props.labelText,
      validationMessage: this.props.validationMessage || '',
    });
  }
}
