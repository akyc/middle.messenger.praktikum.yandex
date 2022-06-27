const inputContainerTemplate = `
!=inputField
.input-validation-message!=validationMessage
if labelText
    label(for=name).input-label!=labelText
`;

export default inputContainerTemplate