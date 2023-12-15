import React from "react";
import PatientCard from "./PatientCard";

const PatientsList = ({ patients, setPatient, handleDeletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="mt-2 text-lg text-center mb-5">
        Administa tus {""}
        <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
      </p>
      {patients && patients.length ? (
        <>
          <div className="h-max md:h-screen md:overflow-y-scroll flex flex-col gap-2 p-5 mb-10 md:p-0 md:pr-3">
            {patients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                handleDeletePatient={handleDeletePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes registrados
          </h2>
          <p className="mt-5 text-lg text-center mb-10">
            Agrega alguno y {""}
            <span className="text-indigo-600 font-bold ">
              aparecerá en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientsList;
