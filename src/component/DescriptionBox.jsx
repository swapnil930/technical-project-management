
import React from "react";

const DescriptionBox = ({ description }) => {
  return (
    <div className="description-box">
      <span className="label">Description:</span>
      <span className="text">{description}</span>
    </div>
  );
};export default DescriptionBox