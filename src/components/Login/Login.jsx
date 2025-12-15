const Login = () => {
  return (
    <div className="login-form">
      <div className="form-section">
        <div className="form-title"></div>
        <input type="text" className="form-input" />
      </div>
      <div className="form-section">
        <div className="form-title"></div>
      </div>
      <button
        className="form-button"
        type="button"
        onClick={() => console.log("Logging in...")}
      >
        {" "}
        Login{" "}
      </button>
    </div>
  );
};
