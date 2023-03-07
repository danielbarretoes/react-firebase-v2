import React from "react";

const FileCard = () => {
  return (
    <div className="FileCard">
      <h6>Name</h6>
      <h6 className="category-text">Category</h6>
      <button className="btn-secondary">Open</button>
      <button className="btn-alert">Delete</button>
    </div>
  );
};

export default FileCard;
