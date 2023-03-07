import React from "react";
import FileCard from "./FileCard";

const Firestore = () => {
  return (
    <div>
      <h2>Firestore</h2>
      <div className="multiForm">
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="category" placeholder="Category" />
          <button>Create</button>
        </form>
        <div className="v-separator"></div>
        <div className="firestrore-status">
          <div className="firestrore-status-header">
            <h6>Email:</h6>
            <h6>Count:</h6>
          </div>
          <div className="scroll-box">
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
          </div>
        </div>
        <div className="v-separator"></div>
        <div className="firestrore-status">
          <div className="firestrore-status-header">
            <button>Get All</button>
            <h6>Count:</h6>
          </div>
          <div className="scroll-box">
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firestore;
