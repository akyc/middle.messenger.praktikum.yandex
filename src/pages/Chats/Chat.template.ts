const ChatTemplate = `
.chat__inner(class=chatSelected)
    .chat__avatar
        if avatar
            img(src=avatar alt="Аватар")
        else
            img(src='https://fakeimg.pl/50x50/?text=Аватар' alt="Аватар")
    .chat__info
        .chat__info__title #{contact}
        .chat__info__last-message
            #{chatSelectedId}
            !=chatSelectedId
            !=message
    .chat__params
        .chat__params__date #{date}
        if unread
            .chat__params__unread 
                span #{unread}
`;

export default ChatTemplate;
