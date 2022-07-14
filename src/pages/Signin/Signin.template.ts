const SigninTemplate = `
form.form(action="")
    .form-entries
        h1.form-entries__title Регистрация
        !=emailInput
        !=loginInput
        !=firstNameInput
        !=secondNameInput
        !=phoneInput
        !=passwordInput
        !=passwordCheckInput
    .form-controls
        !=submitButton
        !=loginButton
`;

export default SigninTemplate