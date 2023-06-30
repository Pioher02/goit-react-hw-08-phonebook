import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/operations';
import { clearError, clearFormError, setFormError } from '../redux/auth/slice';
import { useEffect } from 'react';
import Notiflix from 'notiflix';

const Register = () => {
  const dispatch = useDispatch();
  const { formError, error } = useSelector(state => state.auth);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const credentials = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    if (name.value && email.value && password.value) {
      dispatch(register(credentials));
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
      <h1>New User</h1>

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
          UserName
          <input type="text" name="name"/>
        </label>

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
          <input type="password" name="password" pattern="\w{7,50}" />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
