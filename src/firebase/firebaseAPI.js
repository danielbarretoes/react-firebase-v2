/* ---------------------------------------- */
/* || FIREBASE API - V2.0.1 ||
/*
/* Last update: 10 03 2023
/* By Daniel Izef Barreto Tejada
/*
/*
    Status Code: Funtional (F), forTesting (T), Development (D), Empy (E)

    AUTH FUNTIONS
    - Register a new user in Auth with email (Asynchronous).                   T
        registerUserByEmailAndPassword()
    - Log in user from Auth with email (Asynchronous).                         T
        userLogin()
    - Log out user from Auth (Asynchronous).                                   T
        userLogout()

    FIRESTORE FUNTIONS

    Profiles
    - Create a new user profile in database with email (Asynchronous).         T
        createNewUserProfile()
    - Read a single user profile by user email from database (Asynchronous).   F
        readSingleUserProfileByEmail()
    - Read all user profiles from whole database (Asynchronous).               F
        readAllUserProfilesFromWholeDatabase()
    - Update an user profile on database with ID and object (Asynchronous).    F
        updateSingleUserProfleByUserProfileID()
    - Delete an user profile on database with ID (Asynchronous).               E

    
    Files
    - Create a new user file in database with an object (Asynchronous).        T
        createNewUserFile()
    - Read all user files by user email from database (Asynchronous).          F
        readUserFilesByUserEmail()
    - Read a single user file by user file ID from database (Asynchronous).    F
        readSingleUserFileByUserFileID()
    - Read all user files from whole database (Asynchronous).                  F
        readAllUserFilesFromWholeDatabase()
    - Update an user file on database with an object (Asynchronous).           F
        updateSingleUserFileByUserFileID()
    - Delete an user file on database with ID (Asynchronous).                  E


    STORAGE FUNTIONS
    - Upload a photoFile.
    - Read a photoFile
    - Delete a photoFile.

    UTILITIES
    - Compress a photoFile.

    NOTES:
    - There are two databases on Firestore: (1) "users", (2) "files".

    OBJECTS SAMPLE
    - userProfileDocument
    {
      id: 
      email:
      fisrt:
      last:
    }

    - userFileDocument
    {
      id: 
      owner: 
      name: 
      category:
      storage: [
        {},{},
      ]
    }
*/

/* ---------------------------------------- */
/* || LIBRARY IMPORTS || */

import { auth } from "./firebaseConfig";
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
  doc,
  getDocs,
  getDoc,
  updateDoc,
  //deleteDoc,
} from "firebase/firestore";

/* ---------------------------------------- */
/* || AUTH FUNTIONS || */

/**
 * Register a new user in Auth with email (Asynchronous).
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
 * Log in user from Auth with email (Asynchronous).
 * @param {string} userEmail
 * @param {string} userPassword
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {object} firebaseUser.
 * @public
 */
export const userLogin = async (userEmail, userPassword) => {
  try {
    const firebaseUser = await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword
    );
    // console.log(firebaseUser);
    return firebaseUser;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Log out user from Auth (Asynchronous).
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {string} Message.
 * @public
 */
export const userLogout = async () => {
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

/* User profiles */

/**
 * Create a new user profile in database with email (Asynchronous).
 * @param {object} userProfileDocument
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {number} Document ID.
 * @public
 */
export const createNewUserProfile = async (userProfileDocument) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userProfileDocument);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Read a single user profile by user email from database (Asynchronous).
 * @param {string} userEmail
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {object} userProfile
 * @public
 */
export const readSingleUserProfileByEmail = async (userEmail) => {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", String(userEmail))
    );
    let userProfile;
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userProfile = doc.data(doc);
      //console.log(doc.id);
    });
    //console.log(userProfile);
    return userProfile;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Read all user profiles from whole database (Asynchronous).
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {array} userFileDocuments
 * @public
 */
export const readAllUserProfilesFromWholeDatabase = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    //console.log(querySnapshot.docs);
    let userProfilesDocuments = [];
    querySnapshot.forEach((doc) => {
      //console.log(Object.values(doc.data(doc)));
      userProfilesDocuments.push(doc.data(doc));
    });
    //console.log(userProfilesDocuments);
    return userProfilesDocuments;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Update an user profile on database with ID and object (Asynchronous).
 * @param {string} userProfileID
 * @param {object} userProfileUpdateObject
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {object} userProfile
 * @public
 */
export const updateSingleUserProfleByUserProfileID = async (
  userProfileID,
  userProfileUpdateObject
) => {
  /* Input validation */
  if (userProfileID === null || typeof userProfileID !== "string") {
    console.log("userProfileID is invalid.");
    return null;
  }
  if (
    userProfileUpdateObject === null ||
    typeof userProfileUpdateObject !== "object"
  ) {
    console.log("userProfileUpdateObject is invalid.");
    return null;
  }

  /* Local variables */
  const docID = userProfileID;
  const docRef = doc(db, "users", docID);

  /* Execution */
  try {
    // Send request.
    let querySnapshot = await getDoc(docRef);
    // Check if exists the document.
    if (querySnapshot.exists()) {
      //console.log("Document data:", querySnapshot.data());
      // Make the update with a new object.
      await updateDoc(docRef, userProfileUpdateObject);
      // Refreshing the query with the updated document.
      querySnapshot = await getDoc(docRef);
      //console.log("Document data:", querySnapshot.data());
      // Return the response.
      return querySnapshot.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error.message);
  }
};

// Delete an user profile on database with ID (Asynchronous).

/* User files */

/**
 * Create a new user file in database with an object (Asynchronous).
 * @param {object} userFileDocument
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {number} Document ID.
 * @public
 */
export const createNewUserFile = async (userFileDocument) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userFileDocument);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Read all user files by user email from database (Asynchronous).
 * @param {string} userEmail
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {array} userFileDocuments
 * @public
 */
export const readUserFilesByUserEmail = async (userEmail) => {
  try {
    const q = query(
      collection(db, "files"),
      where("email", "==", String(userEmail))
    );
    const querySnapshot = await getDocs(q);
    let userFileDocuments = [];
    querySnapshot.forEach((doc) => {
      //console.log(Object.values(doc.data(doc)));
      userFileDocuments.push(doc.data(doc));
    });
    //console.log(userFileDocuments);
    return userFileDocuments;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Read a single user file by user file ID from database (Asynchronous).
 * @param {string} userFileID
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {object} userFile
 * @public
 */
export const readSingleUserFileByUserFileID = async (userFileID) => {
  /* Input validation */
  if (userFileID === null || typeof userFileID !== "string") {
    console.log("userFileID is invalid.");
    return null;
  }

  /* Local variables */
  const docID = userFileID;
  const docRef = doc(db, "files", docID);

  /* Execution */
  try {
    // Send request.
    let querySnapshot = await getDoc(docRef);
    // Check if exists the document.
    if (querySnapshot.exists()) {
      console.log("Document data:", querySnapshot.data());
      // Return the response.
      return querySnapshot.data();
    } else {
      // doc.data() will be undefined in this case.
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Read all user files from whole database (Asynchronous).
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {array} userFileDocuments
 * @public
 */
export const readAllUserFilesFromWholeDatabase = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "files"));
    //console.log(querySnapshot.docs);
    let userFileDocuments = [];
    querySnapshot.forEach((doc) => {
      //console.log(Object.values(doc.data(doc)));
      userFileDocuments.push(doc.data(doc));
    });
    //console.log(userFileDocuments);
    return userFileDocuments;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

/**
 * Update an user file on database with an object by ID (Asynchronous).
 * @param {string} userFileID
 * @param {object} userFileUpdateObject
 * @author [Daniel Izef Barreto Tejada]
 * @version 2.0.1
 * @returns {object} userFile
 * @public
 */
export const updateSingleUserFileByUserFileID = async (
  userFileID,
  userFileUpdateObject
) => {
  /* Input validation */
  if (userFileID === null || typeof userFileID !== "string") {
    console.log("userFileID is invalid.");
    return null;
  }
  if (
    userFileUpdateObject === null ||
    typeof userFileUpdateObject !== "object"
  ) {
    console.log("userFileUpdateObject is invalid.");
    return null;
  }

  /* Local variables */
  const docID = userFileID;
  const docRef = doc(db, "files", docID);

  /* Execution */
  try {
    // Send request.
    let querySnapshot = await getDoc(docRef);
    // Check if exists the document.
    if (querySnapshot.exists()) {
      //console.log("Document data:", querySnapshot.data());
      // Make the update with a new object.
      await updateDoc(docRef, userFileUpdateObject);
      // Refreshing the query with the updated document.
      querySnapshot = await getDoc(docRef);
      //console.log("Document data:", querySnapshot.data());
      // Return the response.
      return querySnapshot.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error.message);
  }
};

// Delete an user file on database by ID (Asynchronous).

/* ---------------------------------------- */
/* || STORAGE FUNTIONS || */

/* ---------------------------------------- */
/* || UTILITIES || */
