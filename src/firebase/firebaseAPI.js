import { auth } from "../services/firebase/firebaseConfig";
import { db } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  //deleteDoc,
} from "firebase/firestore";

/* ---------------------------------------- */
/* || AUTH FUNTIONS || */

/**
 * Register a new user in Auth (Asynchronous).
 * @param {string} userEmail
 * @param {string} userPassword
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {number} Document ID.
 * @public
 */
export const registerUserByEmailAndPassword = async (
  userEmail,
  userPassword
) => {
  try {
    const register = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );
    console.log(register);
    return register;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Log in user from Auth (Asynchronous).
 * @param {string} userEmail
 * @param {string} userPassword
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {object} firebaseUser.
 * @public
 */
const userLogin = async (userEmail, userPassword) => {
  try {
    const firebaseUser = await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );
    return firebaseUser;
    console.log(firebaseUser);
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Log out user from Auth (Asynchronous).
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {string} Document ID.
 * @public
 */
const userLogout = async () => {
  try {
    await signOut(auth);
    return "Logged out succesfully.";
  } catch (error) {
    console.log(error.message);
    return "Logged out fail.";
  }
};

/* ---------------------------------------- */
/* || FIRESTORE FUNTIONS || */

/**
 * Add a new user in database (Asynchronous).
 * @param {object} userDocument
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {number} Document ID.
 * @public
 */
export const addNewUser = async (userDocument) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userDocument);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Add a new user in database (Asynchronous).
 * @param {object} userDocument
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {number} Document ID.
 * @public
 */
export const addNewUserFile = async (userDocument) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userDocument);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

// Update File

// Delete File

/**
 * Get all files by user email from database (Asynchronous).
 * @param {string} userEmail
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {array} userFiles
 * @public
 */
export const getFilesByUserEmail = async (userEmail) => {
  try {
    const q = query(
      collection(db, "files"),
      where("email", "==", String(email))
    );
    const querySnapshot = await getDocs(q);
    let userFiles = [];
    querySnapshot.forEach((doc) => {
      //console.log(Object.values(doc.data(doc)));
      userFiles.push(doc.data(doc));
    });
    //console.log(userFiles);
    return userFiles;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/* ---------------------------------------- */
/* || STORAGE FUNTIONS || */

/* ---------------------------------------- */
/* || UTILITIES || */
