import { AuthGuard } from 'src/guards/auth-guard';
import {Provider} from 'react-redux';
import {store} from '../lib/Redux/store';

export const withAuthGuard = (Component) => (props) => (
  <Provider store={store}>
    <AuthGuard>
      <Component {...props} />
    </AuthGuard>
  </Provider>

);
