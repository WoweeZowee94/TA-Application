import "./header.css";

const Header = ({ ...props }) => {
  return (
    <div className="header-container">
      <div className="header-title"> TA Application </div>
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
