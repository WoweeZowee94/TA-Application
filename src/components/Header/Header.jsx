import "./header.css";
import logo from "../../media/logo.png"

const Header = ({ ...props }) => {
  return (
    <div className="header-container">
      <img src={logo} alt="NEU Logo" height="150px"/>
      <>
        <button className="header-button" type="button">
          {" "}
          Faculty
        </button>
      </>
    </div>
  );
};

export default Header;
