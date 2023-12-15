import React from "react";

const FormInput = ({ id, label, type, placeholder, value, setValue }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="block text-gray-700 uppercase font-bold">
        {label}
      </label>
      {type === "textArea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className="w-full border-2 focus:outline-indigo-700 px-2 py-2 rounded-md resize-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full border-2 focus:outline-indigo-700 px-2 py-2 rounded-md resize-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormInput;
