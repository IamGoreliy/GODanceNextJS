import {useSelector} from 'react-redux';

// ⬇️⬇️⬇️функция которая используеться устарела. Данная функция будет отформатирована и будет выполнять запись в -
// SessionStore token пользователя
export const authStoreSelect = state => state.authStore;

// ⬇️⬇️⬇️дання функция будет проводить верификацию пользователя и возвращять данные о пользователе
export const userData = state => state.userDataStore;