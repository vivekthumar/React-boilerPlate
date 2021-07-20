import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.scss';

import AppLayout from 'components/core/AppLayout/AppLayout';
import AuthLayout from 'components/core/AuthLayout';
import { AUTH_ROUTES } from 'config/constant';
import rootReducer from '../redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const currentRoutePath = router.pathname;

  let appContent = (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
  if (AUTH_ROUTES.includes(currentRoutePath)) {
    appContent = (
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    );
  }
  return <Provider store={store}>{appContent}</Provider>;
};

MyApp.propTypes = {
  pageProps: PropTypes.shape({}).isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
