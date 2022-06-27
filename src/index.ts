import render from './utils/renderDOM';
import Login from '~src/pages/Login/Login';
import Signin from '~src/pages/Signin/Signin';
import Profile from '~src/pages/Profile/Profile';
import ProfileEdit from '~src/pages/Profile/ProfileEdit';
import Error404 from '~src/pages/Error/404';
import Error505 from '~src/pages/Error/505';
import Chats from '~src/pages/Chats/Chats';

const loginPage = new Login();
const signinPage = new Signin();
const profilePage = new Profile();
const profileEditPage = new ProfileEdit();
const chatsPage = new Chats();
const error505 = new Error505();
const error404 = new Error404();
document.addEventListener('DOMContentLoaded', () => {
  switch (window.location.pathname) {
    case '/':
    case '/login':
      render('.app', loginPage);
      break;
    case '/signin':
      render('.app', signinPage);
      break;
    case '/chats':
      render('.app', chatsPage);
      break;
    case '/profile':
      render('.app', profilePage);
      break;
    case '/profile-edit':
      render('.app', profileEditPage);
      break;
    case '/505':
      render('.app', error505);
      break;
    default:
      render('.app', error404);
  }
});
