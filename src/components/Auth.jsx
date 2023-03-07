import React from "react";
import UserCard from "./UserCard";

const Auth = () => {
  return (
    <div>
      <h2>Auth</h2>
      <div className="multiForm">
        <form>
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <button>Register</button>
        </form>
        <form>
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <button>Log in</button>
        </form>
        <div className="v-separator"></div>
        <div className="auth-status">
            <h6>First Name:</h6>
            <h6>Last Name:</h6>
            <h6>Email:</h6>
            <button>Log out</button>
        </div>
        <div className="v-separator"></div>
        <div className="firestrore-status">
          <div className="firestrore-status-header">
            <button>Get All</button>
            <h6>Count:</h6>
          </div>
          <div className="scroll-box">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
