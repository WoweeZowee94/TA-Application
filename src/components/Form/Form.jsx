import { useCreateApplication } from "../../hooks/useCreateApplication";
import { ClipLoader } from "react-spinners";
import "./form.css";

const Form = () => {
  const {
    loading,
    toggleLoading,
    formData,
    handleFormState,
    submitApplication,
  } = useCreateApplication();
  return (
    <>
      {loading ? (
        <ClipLoader loading={loading} size={50} aria-label="Loading..." />
      ) : (
        <div className="app-container">
          <div className="app-section">
            <div className="app-title">I9 on File?</div>
            <select className="app-select" name="i9" onChange={handleFormState}>
              <option values="">Choose an option</option>
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
              name="nuid"
              value={formData.nuid}
              onChange={handleFormState}
            />
          </div>
          <div className="app-section">
            <div className="app-title">GPA:</div>
            <input
              className="app-input"
              type="number"
              name="gpa"
              placeholder="GPA should be above 3.4 for serious consideration"
              onChange={handleFormState}
            />
          </div>
          <div className="app-section">
            <div className="app-title">Major:</div>
            <select
              className="app-select"
              name="major"
              onChange={handleFormState}
            >
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
            <select
              className="app-select"
              name="entranceSemester"
              onChange={handleFormState}
            >
              <option className="select-option" value="">
                {" "}
                --{" "}
              </option>
              <option className="select-option" value="Fall">
                Fall
              </option>
              <option className="select-option" value="Spring">
                Spring
              </option>
              <option className="select-option" value="Summer">
                Summer
              </option>
            </select>
            <select
              className="app-select"
              name="entranceYear"
              onChange={handleFormState}
            >
              <option className="select-option" value="">
                {" "}
                --{" "}
              </option>
              <option className="select-option" value="2023">
                2023
              </option>
              <option className="select-option" value="2024">
                2024
              </option>
              <option className="select-option" value="2025">
                2025
              </option>
              <option className="select-option" value="2026">
                2026
              </option>
            </select>
          </div>
          <div className="app-section">
            <div className="app-title">MGEN Graduation Date:</div>
            <select
              className="app-select"
              name="graduationSemester"
              onChange={handleFormState}
            >
              <option className="select-option" value="">
                {" "}
                --{" "}
              </option>
              <option className="select-option" value="Fall">
                Fall
              </option>
              <option className="select-option" value="Spring">
                Spring
              </option>
              <option className="select-option" value="Summer">
                Summer
              </option>
            </select>
            <select
              className="app-select"
              name="graduationYear"
              onChange={handleFormState}
            >
              <option className="select-option" value="">
                {" "}
                --{" "}
              </option>
              <option className="select-option" value="2026">
                2026
              </option>
              <option className="select-option" value="2027">
                2027
              </option>
              <option className="select-option" value="2028">
                2028
              </option>
              <option className="select-option" value="2029">
                2029
              </option>
              <option className="select-option" value="2030">
                2030
              </option>
            </select>
          </div>
          <div className="app-section">
            <div className="app-title">Skills and Interests:</div>
            <textarea
              className="app-textarea"
              name="skills_interests"
              onChange={handleFormState}
            />
          </div>
          <div className="app-section">
            <div className="app-title">Coop Experience:</div>
            <textarea
              className="app-textarea"
              name="coop"
              onChange={handleFormState}
            />
          </div>
          <div className="app-section">
            <div className="app-title">Previous TA Experience:</div>
            <textarea
              className="app-textarea"
              name="previous"
              onChange={handleFormState}
            />
          </div>
          <div className="app-section">
            <div className="app-title">Courses Taken:</div>
            <textarea
              className="app-textarea"
              name="courses_taken"
              onChange={handleFormState}
            />
          </div>
          <div className="app-section">
            <div className="app-title">TA for Which Class?</div>
            <textarea
              className="app-textarea"
              name="desired_courses"
              onChange={handleFormState}
            />
          </div>
          <button
            type="button"
            className="form-button"
            onClick={submitApplication}
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      )}
    </>
  );
};

export default Form;
