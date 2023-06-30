import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/operations';
import { clearError, clearFormError, setFormError } from '../redux/auth/slice';
import { useEffect } from 'react';
import Notiflix from 'notiflix';

const Login = () => {
  const dispatch = useDispatch();
  const { formError, error } = useSelector(state => state.auth);

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    if (email.value && password.value) {
      dispatch(login(credentials));
    } else {
      dispatch(setFormError('Verify the provided info and try again.'));
    }
    const form = e.currentTarget;
    form.reset();
  };

  useEffect(() => {
    if (formError) {
      Notiflix.Notify.failure(formError);
      dispatch(clearFormError());
    }
  }, [dispatch, formError]);

  useEffect(() => {
    if (error) {
      Notiflix.Notify.failure(error);
      dispatch(clearError());
    } 
  }, [dispatch, error]);

  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Login</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label
          style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}
        >
          Email
          <input type="email" name="email" />
        </label>
        <label
          style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}
        >
          Password <i style={{ fontSize: 12 }}>(mínimo 7 caracteres)</i>
          <input type="password" name="password" pattern="\w{7,12}" />
        </label>
        <button
          type="submit"
          style={{
            color: 'white',
            backgroundColor: 'black',
            marginTop: 20,
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;