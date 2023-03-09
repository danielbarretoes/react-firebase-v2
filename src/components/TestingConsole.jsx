import {
  readSingleUserProfileByEmail,
  readUserFilesByUserEmail,
  readAllUserProfilesFromWholeDatabase,
  readAllUserFilesFromWholeDatabase,
  readSingleUserFileByUserFileID,
} from "../firebase/firebaseAPI";

const TestingConsole = () => {
  //console.log(readSingleUserProfileByEmail("daniel_izef@hotmail.com"));
  //console.log(readUserFilesByUserEmail("daniel_izef@hotmail.com"));
  //console.log(readAllUserProfilesFromWholeDatabase());
  //console.log(readAllUserFilesFromWholeDatabase());
  //console.log(readSingleUserFileByUserFileID("12a"));
  return <h2>TestingConsole</h2>;
};

export default TestingConsole;
