import { StrictMode } from "react";
import Auth from "./components/Auth";
import Firestore from "./components/Firestore";
import Storage from "./components/Storage";

const App = () => {
  return (
    <StrictMode>
      <>
        <h1>React - Firebase - V2</h1>
        <h6>By Daniel Izef Barreto Tejada</h6>
        <Auth />
        <Firestore />
        <Storage />
      </>
    </StrictMode>
  );
};

export default App;
