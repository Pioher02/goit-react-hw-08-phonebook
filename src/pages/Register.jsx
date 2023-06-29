const Register = () => {
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
        // onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label
          style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}
        >
          UserName
          <input type="text" name="name" pattern="\w{5,12}" />
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
          Password <i style={{ fontSize: 12 }}>(5 - 12 chars)</i>
          <input type="password" name="password" pattern="\w{5,12}" />
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
