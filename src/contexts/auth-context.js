import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import { methodGetPost } from '../utils/customFetch';

const HANDLERS = {
  INITIALIZE: 'INITIALIZE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
};

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    // const user = action.payload;

    return initialState;
    // {
      // ...state,
      // ...(
      //   // if payload (user) is provided, then is authenticated
      //   user
      //     ? ({
      //       isAuthenticated: true,
      //       isLoading: false,
      //       user
      //     })
      //     : ({
      //       isLoading: false,
      //     })
      // )

    // };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload.user;
    const userVer = action.payload.verification;

    return {
      ...state,
      isAuthenticated: userVer,
      user
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null
    };
  }
};

const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    // if (initialized.current) {
    //   return;
    // }
    //
    // initialized.current = true;

    let isAuthenticated, res;

    try {
      isAuthenticated = window.sessionStorage.getItem('authenticated') === 'true';
    } catch (err) {
      console.error(err);
    }

    if (isAuthenticated) {
      const token = window.sessionStorage.getItem('token');
      try{
        res = await methodGetPost('/api/verification', 'POST', token);

      }catch(e){
        console.log('catch error', e.message);
      }

      if (res.verification) {
        const user = {
          id: res.userData.id,
          avatar: res.userData.avatar ?? '/assets/avatars/avatar-anika-visser.png',
          name: res.userData.name ?? 'oksana',
          email: res.userData.mail,
        };
        dispatch({
          type: HANDLERS.INITIALIZE,
          payload: user
        });
      }
    } else {
      window.sessionStorage.removeItem('authenticated');
      window.sessionStorage.removeItem('token');
      dispatch({
        type: HANDLERS.INITIALIZE
      });
    }
  };

  useEffect(
    () => {
      // initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const skip = () => {
    try {
      window.sessionStorage.setItem('authenticated', 'true');
    } catch (err) {
      console.error(err);
    }

    const user = {
      id: 'guest',
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: 'guest user',
      email: 'guest.user@devias.io',
    };

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    });
  };

  const signIn = async (email, password) => {
    let res;
    const data = {
      email,
      password
    }

    try {
      res = await methodGetPost('http://localhost:3000/api/authCheck', 'POST', data);
    } catch (err) {
      console.error(err);
    }
    if (res.verification && res.token) {
      window.sessionStorage.setItem('authenticated', `${res.verification}`);
      window.sessionStorage.setItem('token', res.token);

      const user = {
        id: res.userData.id,
        avatar: res.userData.avatar ?? '/assets/avatars/avatar-anika-visser.png',
        name: res.userData.name ?? 'аноним',
        email: res.userData.mail,
      };
      const verification = res.verification;
      dispatch({
        type: HANDLERS.SIGN_IN,
        payload: {
          user,
          verification,
        }
      });
      return;
    }
    dispatch({
      type: HANDLERS.INITIALIZE,
    });
  };

  const signUp = async (email, name, password) => {
    throw new Error('Sign up is not implemented');
  };

  const signOut = () => {
    dispatch({
      type: HANDLERS.SIGN_OUT
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        skip,
        signIn,
        signUp,
        signOut,
        initialize,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
