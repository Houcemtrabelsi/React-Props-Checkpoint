import React from "react";
import "./App.css";
import Profile from "./profile/Profile";


function App() {
  return (
    <div className="App">
      <Profile bio="This is my bio" profession="WEB DEVELOPER" />
    </div>
  );
}
Profile.defaultProps = {
  fullName: "houcem Trabelsi",
};


export default App;
