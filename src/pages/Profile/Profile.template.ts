const ProfileTemplate = `
.panel
    a.panel__back(href="/chats")
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/></svg>
.profile-page
    .profile-page__avatar
        img(src="https://fakeimg.pl/130x130/?text=Аватар" alt="Аватар")
    .profile-page__name 
        h1 Иван
    .profile-page__settings
        each val,key in {'Почта': 'pochta@yandex.ru', 'Логин': 'ivanivanov', 'Имя': 'Иван', 'Фамилия': 'Иванов', 'Имя в чате': 'Иван', 'Телефон': '+7 (909) 967 30 30'}
            .row
                .setting=key
                .value=val
    .profile-page__controls
        .row
            .setting 
                !=editProfile
        .row
            .setting 
                !=editPassword
        .row
            .setting 
                !=Logout
`;
export default ProfileTemplate;
