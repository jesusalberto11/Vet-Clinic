import React from "react";
//import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-500 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
