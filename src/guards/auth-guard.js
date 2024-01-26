import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {checkVerification} from '../lib/Redux/operation';

export const AuthGuard = (props) => {
  const { children } = props;
  const router = useRouter();
  const ignore = useRef(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();



  // Only do authentication check on component mount.
  // This flow allows you to manually redirect the user after sign-out, otherwise this will be
  // triggered and will automatically redirect to sign-in page.

  useEffect( () => {
      const { isAuth: isAuthSession, token } = JSON.parse(window.sessionStorage.getItem('auth'));
      if (!router.isReady) {
        return;
      }

      // Prevent from calling twice in development mode with React.StrictMode enabled
      if (ignore.current) {
        return;
      }

      ignore.current = true;


      // 🦄🦄🦄можно сделвть доп запрос на сервер для проверки аутентификации user в случаи если Redux store почищен а есть только auth в sessionStore. Это необходимо так как при очистке Redux store и перехода в Dashboard authGuard делает проверку так как Redux store очищен перекидует на страничку /auth/login. В auth/login запускается useEffect который выполняет проверку sessionStore и в случаи успешной проверки в Redux Store  запишится обновленная информация о user  и только после /auth/login перенаправляет на гдавную страницу а от главной страницы можна уже добратся к Dashboard (authGuard также выполнит повторно проверку но данные в Redux store обновились проверка будет выполнена успешно🦄🦄🦄)
      if (!isAuthSession) {
        console.log('Not authenticated, redirecting');
        router
          .replace({
            pathname: '/auth/login',
            query: router.asPath !== '/' ? { continueUrl: router.asPath } : undefined
          })
          .catch(console.error);
      } else {
        dispatch(checkVerification(token))
        setChecked(true);
      }
    },
    [router.isReady]
  );

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};
