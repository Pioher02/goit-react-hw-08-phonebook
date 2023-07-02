import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { userLogout } from 'redux/auth/slice';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/goit-react-hw-08-phonebook');
  };

  return (
    <header style={{ border: '1px solid black', padding: '0 18px' }}>
      <nav
        style={{
          maxWidth: 1200,
          height: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 15,
          }}
        >
          <h2>
            <NavLink
              to={
                isLoggedIn
                  ? '/goit-react-hw-08-phonebook/contacts'
                  : '/goit-react-hw-08-phonebook/'
              }
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              Phonebook
            </NavLink>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
          {isLoggedIn ? (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ margin: 1 }}>{user.email}</p>
              <button
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  cursor: 'pointer',
                }}
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <h3>
                <NavLink
                  to="/goit-react-hw-08-phonebook/register"
                  style={{ textDecoration: 'none', color: 'unset' }}
                >
                  Register
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="/goit-react-hw-08-phonebook/login"
                  style={{ textDecoration: 'none', color: 'unset' }}
                >
                  Login
                </NavLink>
              </h3>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
