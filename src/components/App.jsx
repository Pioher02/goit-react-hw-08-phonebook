import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const WelcomePage = lazy(() => import('../pages/Welcome'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute
              component={<WelcomePage />}
              redirectTo="/goit-react-hw-08-phonebook/contacts"
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/goit-react-hw-08-phonebook/contacts"
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              component={<LoginPage />}
              redirectTo="/goit-react-hw-08-phonebook/contacts"
            />
          }
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook"
              component={<ContactsPage/>}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
