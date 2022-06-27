const LoginTemplate = `
form.form(action="")
    .form-entries
        h1.form-entries__title Вход
        !=loginInput 
        !=passwordInput
    .form-controls
        !=submitButton 
        !=signinButton
`;

export default LoginTemplate;
