import React from "react";
//import './PatientCard.css';

const PatientCard = ({ patient, setPatient, handleDeletePatient }) => {
  const { id, petName, ownerName, ownerEmail, altaData, petSymptoms } = patient;

  return (
    <div className="bg-white shadow-md rounded-lg px-5 py-5 flex flex-col gap-3">
      <p className="block text-gray-700 uppercase font-bold">
        Nombre: {""} <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="block text-gray-700 uppercase font-bold">
        Propietario: {""}{" "}
        <span className="font-normal normal-case">{ownerName}</span>
      </p>
      <p className="block text-gray-700 uppercase font-bold">
        Email: {""}{" "}
        <span className="font-normal normal-case">{ownerEmail}</span>
      </p>
      <p className="block text-gray-700 uppercase font-bold">
        Fecha de alta: {""}{" "}
        <span className="font-normal normal-case">{altaData}</span>
      </p>
      <p className="block text-gray-700 uppercase font-bold">
        Sintomas: {""}{" "}
        <span className="font-normal normal-case">{petSymptoms}</span>
      </p>

      <div className="flex gap-4">
        <button
          type="button"
          className="uppercase transition-all py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-center text-white font-bold rounded-md"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="uppercase transition-all py-2 px-10 bg-red-600 hover:bg-red-700 text-center text-white font-bold rounded-md"
          onClick={() => handleDeletePatient(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
