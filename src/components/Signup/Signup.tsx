import { useCreateUser } from "../../hooks/useCreateUser";
import "./signup.css";
const Signup = () => {
  const { userData, handleUserState, registerUser, error } = useCreateUser();
  return (
    <div className="signup-form">
      <div> Sign up</div>
      <div className="form-section">
        <div className="input-title">First Name</div>
        <input
          className="form-input"
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleUserState}
        />
      </div>
      <div className="form-section">
        <div className="input-title">Last Name</div>
        <input
          className="form-input"
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleUserState}
        />
      </div>
      <div className="form-section">
        <div className="input-title">Email</div>
        <input
          className="form-input"
          type="text"
          name="email"
          value={userData.email}
          onChange={handleUserState}
        />
      </div>
      <div className="form-section">
        <div className="input-title">NUID</div>
        <input
          className="form-input"
          type="text"
          name="nuid"
          value={userData.nuid}
          onChange={handleUserState}
        />
      </div>
      <button className="form-button" title="button" onClick={registerUser}>
        {" "}
        Submit{" "}
      </button>
      {error && <div className="error-text"> {error} </div>}
    </div>
  );
};

export default Signup;
