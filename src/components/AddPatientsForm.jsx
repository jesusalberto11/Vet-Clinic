import React, { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

const AddPatientsForm = ({ patients, setPatients, patient, setPatient }) => {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [altaDate, setAltaDate] = useState("");
  const [petSymptoms, setPetSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length === 0) return;

    setPetName(patient.petName);
    setOwnerName(patient.ownerName);
    setOwnerEmail(patient.ownerEmail);
    setAltaDate(patient.altaDate);
    setPetSymptoms(patient.petSymptoms);
  }, [patient]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if ([petName, ownerName, ownerEmail, altaDate, petSymptoms].includes("")) {
      setError(true);
      return;
    }

    const newPatient = {
      petName,
      ownerName,
      ownerEmail,
      altaDate,
      petSymptoms,
    };

    if (patient.id) {
      newPatient.id = patient.id;

      const updatedPatients = patients.map((statePatient) =>
        statePatient.id === newPatient.id ? newPatient : statePatient
      );

      setPatients(updatedPatients);
      setPatient({});
    } else {
      newPatient.id = crypto.randomUUID();
      setPatients([...patients, newPatient]);
    }

    setError(false);

    setPetName("");
    setOwnerName("");
    setOwnerEmail("");
    setAltaDate("");
    setPetSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-lg text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={onFormSubmit}
        className="bg-white shadow-md rounded-lg p-5 mb-20 flex flex-col gap-5 m-5 md:m-0 md:mb-0"
      >
        {error && (
          <ErrorMessage message={"Todos los campos son obligatorios"} />
        )}
        <div className="flex flex-col gap-2">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="petName"
          >
            Nombre del paciente
          </label>
          <input
            id="petName"
            name="petname"
            type="text"
            placeholder="Nombre de la mascota"
            className="w-full border-2 focus:outline-indigo-700 px-2 py-2 rounded-md"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="ownerName"
          >
            Nombre del propietario
          </label>
          <input
            required
            id="ownerName"
            name="ownername"
            type="text"
            placeholder="Nombre del propietario"
            className="w-full border-2 focus:outline-indigo-700 px-2 py-2 rounded-md"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="ownerEmail"
          >
            Email del propietario
          </label>
          <input
            required
            id="ownerEmail"
            name="owneremail"
            type="email"
            placeholder="Email del propietario"
            className="w-full border-2 focus:outline-indigo-700 px-2 py-2 rounded-md"
            value={ownerEmail}
            onChange={(e) => setOwnerEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="altaDate"
          >
            Fecha de alta
          </label>
          <input
            required
            id="altaDate"
            name="altadate"
            type="date"
            className="w-full border-2 focus:outline-indigo-700 px-2 py-2 rounded-md"
            value={altaDate}
            onChange={(e) => setAltaDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Sintomas
          </label>
          <textarea
            required
            id="symptoms"
            name="petsymptoms"
            type="email"
            placeholder="Describe los sintomas"
            className="w-full border-2 focus:outline-indigo-700 px-2 py-2 rounded-md resize-none"
            value={petSymptoms}
            onChange={(e) => setPetSymptoms(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="transition-all bg-indigo-600 text-white p-3 rounded-md uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer active:bg-green-500"
        >
          {patient.id ? "Editar paciente" : "Guardar paciente"}
        </button>
      </form>
    </div>
  );
};

export default AddPatientsForm;
