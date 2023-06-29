import { Route, Routes } from 'react-router-dom';
import {lazy} from "react";
import Layout from "./Layout";

const WelcomePage = lazy(() => import('../pages/Welcome'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
