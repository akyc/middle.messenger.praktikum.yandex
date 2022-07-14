export type ChatProps = {
  id: number;
  avatar: string;
  contact: string;
  message: string;
  date: string;
  unread: number | null;
  events?: Record<string, (e: Event) => void>;
  chatSelectedId?: number | null;
};

const chats: ChatProps[] = [
  {
    id: 1,
    avatar: 'https://fakeimg.pl/50x50/eaeaea/?text=Аватар',
    contact: 'Андрей',
    message: 'Изображение',
    date: '10:49',
    unread: 2,
  },
  {
    id: 2,
    avatar: 'https://fakeimg.pl/50x50/e4edfd/?text=Аватар',
    contact: 'Киноклуб',
    message: '<b>Вы:</b> стикер',
    date: '12:00',
    unread: null,
  },
  {
    id: 3,
    avatar: 'https://fakeimg.pl/50x50/999999/?text=Аватар',
    contact: 'Илья',
    message: 'Друзья, у меня для вас особенный выпуск новостей!...',
    date: '15:12',
    unread: 4,
  },
  {
    id: 4,
    avatar: 'https://fakeimg.pl/50x50/?text=Аватар',
    contact: 'Вадим',
    message: '<b>Вы:</b> круто',
    date: 'Пт',
    unread: null,
  },
  {
    id: 5,
    avatar: 'https://fakeimg.pl/50x50/?text=Аватар',
    contact: 'тет-а-теты',
    message: 'И Human Interface Guidelines и Material Design рекомендуют...',
    date: 'Ср',
    unread: null,
  },
  {
    id: 6,
    avatar: 'https://fakeimg.pl/50x50/?text=Аватар',
    contact: '1, 2, 3',
    message: 'Миллионы россиян ежедневно проводят десятки часов свое...',
    date: '',
    unread: null,
  },
];

const getChats = ():ChatProps[] => chats;

export default getChats;
