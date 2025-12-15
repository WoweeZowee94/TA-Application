import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

export const useCreateUser = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    nuid: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUserState = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkIfUserExists = async (email, nuid) => {
    try {
      const userRef = collection(db, "users");

      const emailQuery = query(userRef, where("email", "==", email));
      const emailSnapshot = await getDocs(emailQuery);

      if (!emailSnapshot.empty) {
        return { exists: true, field: "email" };
      }

      const nuidQuery = query(userRef, where("nuid", "==", nuid));
      const nuidSnapshot = await getDocs(nuidQuery);

      if (!nuidSnapshot.empty) {
        return { exists: true, field: "nuid" };
      }

      return { exists: false };
    } catch (error) {
      throw new Error(`Firebase error: ${error}`);
    }
  };

  const validateFormData = () => {
    if (
      userData.email.trim() === "" ||
      userData.firstName.trim() === "" ||
      userData.lastName.trim() === "" ||
      userData.nuid.trim() === "" ||
      userData.passwordOne.trim() === "" ||
      userData.passwordTwo.trim() === ""
    ) {
      setError("Fields cannot be empty.");
      return false;
    } else if (userData.passwordOne !== userData.passwordTwo) {
      setError("Passwords do not match.");
      return false;
    } else if (userData.passwordOne.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    } else {
      return true;
    }
  };

  const registerUser = async () => {
    setLoading(true);
    setError(null);

    // Validate form inputs
    if (!validateFormData()) {
        return
    }

    // Check for existing user with input credentials
    const duplicateCheck = await checkIfUserExists(
      userData.email,
      userData.nuid
    );

    try {
      if (!duplicateCheck.exists) {
        const cred = await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.passwordOne
        );

        const uid = cred.user.uid;

        await setDoc(doc(db, "users", uid), {
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          nuid: userData.nuid,
          password: userData.passwordOne,
          createdAt: serverTimestamp(),
        });
      } else {
        setError(
          duplicateCheck.field === "email"
            ? "A user with this email already exists"
            : "This NUID is already registered"
        );
        console.log("User already exists in database.");
      }
    } catch (error) {
      throw new Error(`Registration Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    userData,
    setUserData,
    handleUserState,
    registerUser,
    error,
    loading,
  };
};
