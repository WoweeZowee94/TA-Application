import { useCreateApplication } from "../../hooks/useCreateApplication";
import { ClipLoader } from "react-spinners";
import "./form.css";

const Form = () => {
  const { loading, toggleLoading, formData, handleFormState } =
    useCreateApplication();
  return (
    <>
      {loading ? (
        <ClipLoader loading={loading} size={50} aria-label="Loading..." />
      ) : (
        <div className="app-container">
          <div className="app-section">
            <div className="app-title">I9 on File?</div>
            <select className="app-select" name="i9">
                <option value="Yes"> Yes</option>
                <option value="No"> No</option>
            </select>
          </div>
          <div className="app-section">
            <div className="app-title">First Name:</div>
            <input
              className="app-input"
              type="text"
              placeholder="Legal First Name per university record"
              name="firstName"
              value={formData.firstName}
              onChange={handleFormState}
            />
          </div>
          <div className="app-section">
            <div className="app-title">Last Name:</div>
            <input
              className="app-input"
              type="text"
              placeholder="Legal Last Name per university record"
              name="lastName"
              value={formData.lastName}
              onChange={handleFormState}
            />
          </div>
          <div className="app-section">
            <div className="app-title">Email:</div>
            <input
              className="app-input"
              type="text"
              name="email"
              placeholder="University email"
              value={formData.email}
              onChange={handleFormState}
            />
          </div>
          <div className="app-section">
            <div className="app-title">NUID:</div>
            <input
              className="app-input"
              type="text"
              value={formData.nuid}
              onChange={handleFormState}
            />
          </div>
          <div className="app-section">
            <div className="app-title">GPA:</div>
            <input className="app-input" type="number" placeholder="GPA should be above 3.4 for serious consideration" />
          </div>
          <div className="app-section">
            <div className="app-title">Major:</div>
            <select className="app-select" name="major">
                <option value="">---Choose an option---</option>
                <option value="MSIS-Boston">MSIS Boston</option>
                <option value="CSYE-Boston">CSYE Boston</option>
                <option value="DAMG-Boston">DAMG Boston</option>
                <option value="TNET-Boston">TNET Boston</option>
                <option value="CYPS-Boston">CYPS Boston</option>
                <option value="MSIS-Seattle">MSIS Seattle</option>
                <option value="CSYE-Seattle">CSYE Seattle</option>
                <option value="MSIS-Silicon-Valley">MSIS Silicon Valley</option>
                <option value="CSYE-Silicon-Valley">CSYE Silicon Valley</option>
                <option value="MSIS-Arlington">MSIS Arlington</option>
                <option value="MSIS-Miami">MSIS Miami</option>
                <option value="MSIS-Oakland">MSIS Oakland</option>
                <option value="MSIS-Portland">MSIS Portland</option>
                <option value="MSIS-Toronto">MSIS Toronto</option>
                <option value="CYPS-Toronto">CYPS Toronto</option>
                <option value="MSIS-Vancouver">MSIS Vancouver</option>
            </select>
          </div>
          <div className="app-section">
            <div className="app-title">MGEN Entrance Date:</div>
          </div>
          <div className="app-section">
            <div className="app-title">MGEN Graduation Date:</div>
          </div>
          <div className="app-section">
            <div className="app-title">Skills and Interests:</div>
            <textarea className="app-textarea" />
          </div>
          <div className="app-section">
            <div className="app-title">Coop Experience:</div>
            <textarea className="app-textarea" />
          </div>
          <div className="app-section">
            <div className="app-title">Previous TA Experience:</div>
            <textarea className="app-textarea" />
          </div>
          <div className="app-section">
            <div className="app-title">Courses Taken:</div>
            <textarea className="app-textarea" />
          </div>
          <div className="app-section">
            <div className="app-title">TA for Which Class?</div>
            <textarea className="app-textarea" />
          </div>
          <button type="button" className="form-button" onClick={toggleLoading}>
            {" "}
            Submit{" "}
          </button>
        </div>
      )}
    </>
  );
};

export default Form;
