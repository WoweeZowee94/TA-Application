import { useState } from "react";
export const useCreateApplication = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    i9: false,
    firstName: "",
    lastName: "",
    email: "",
    nuid: "",
    gpa: "",
    major: "",
    entrance: "",
    graduation: "",
    skills_interests: "",
    coop: "",
    previous: "",
    courses_taken: "",
    desired_courses: "",
    resume: "",
  });

  const toggleLoading = () => {
    setLoading((prev) => !prev);
  };

  const handleFormState = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { formData, handleFormState, loading, toggleLoading };
};
