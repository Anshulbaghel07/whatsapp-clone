import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { auth, db } from "./config";
  import { doc, setDoc, getDoc } from "firebase/firestore";
  
  // ---------- Authentication ----------
  
  /**
   * Registers a user with email and password.
   * @param {string} name - The name of the user.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {Promise} - The registered user object.
   */
  export const registerUser = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      return userCredential.user;
    } catch (error) {
      console.error("Error during user registration:", error);
      throw new Error("Could not register user. Please try again.");
    }
  };
  
  /**
   * Logs in a user with email and password.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {Promise} - The logged-in user object.
   */
  export const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error during user login:", error);
      throw new Error("Invalid email or password. Please try again.");
    }
  };
  
  /**
   * Logs out the current user.
   * @returns {Promise} - A promise that resolves when the user is logged out.
   */
  export const logoutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during user logout:", error);
      throw new Error("Could not log out. Please try again.");
    }
  };
  
  // ---------- Interest Selection ----------
  
  /**
   * Saves the user's interest to their profile in Firestore.
   * @param {string} uid - The user ID (UID).
   * @param {string} interest - The user's selected interest.
   * @returns {Promise} - A promise that resolves when the interest is saved.
   */
  export const saveUserInterest = async (uid, interest) => {
    try {
      const userRef = doc(db, "users", uid);
      await setDoc(userRef, { interest }, { merge: true });
    } catch (error) {
      console.error("Error saving user interest:", error);
      throw new Error("Could not save interest. Please try again.");
    }
  };
  
  /**
   * Retrieves the user's interest from Firestore.
   * @param {string} uid - The user ID (UID).
   * @returns {Promise} - A promise that resolves with the user's interest, or null if not found.
   */
  export const getUserInterest = async (uid) => {
    try {
      const userRef = doc(db, "users", uid);
      const docSnap = await getDoc(userRef);
      return docSnap.exists() ? docSnap.data().interest : null;
    } catch (error) {
      console.error("Error retrieving user interest:", error);
      throw new Error("Could not fetch interest. Please try again.");
    }
  };
  