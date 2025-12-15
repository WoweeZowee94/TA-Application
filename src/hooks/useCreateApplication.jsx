import { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

export const useCreateApplication = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    i9: "",
    firstName: "",
    lastName: "",
    email: "",
    nuid: "",
    gpa: "",
    major: "",
    entranceSemester: "",
    entranceYear: "",
    graduationSemester: "",
    graduationYear: "",
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

  const submitApplication = async () => {
    try {
      const appDef = collection(db, "applications");
      await setDoc(doc(db, "applications", formData.nuid), {
        ...formData,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      throw new Error(`Firebase error: ${error.message}`);
    }
  };

  return {
    formData,
    handleFormState,
    loading,
    toggleLoading,
    submitApplication,
  };
};
