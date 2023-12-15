import React, { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import FormInput from "./form/FormInput";

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
        <FormInput
          id="petname"
          label={"Nombre del paciente"}
          type={"text"}
          placeholder={"Nombre de la mascota"}
          value={petName}
          setValue={setPetName}
        />
        <FormInput
          id="ownerName"
          label={"Nombre del propietario"}
          type={"text"}
          placeholder={"Nombre del propietario"}
          value={ownerName}
          setValue={setOwnerName}
        />
        <FormInput
          id="ownerEmail"
          label={"Email del propietario"}
          type={"email"}
          placeholder={"Email del propietario"}
          value={ownerEmail}
          setValue={setOwnerEmail}
        />
        <FormInput
          id="altaDate"
          label={"Fecha de alta"}
          type={"date"}
          placeholder={""}
          value={altaDate}
          setValue={setAltaDate}
        />
        <FormInput
          id="symptoms"
          label={"Sintomas"}
          type={"textArea"}
          placeholder={"Describe los sintomas"}
          value={petSymptoms}
          setValue={setPetSymptoms}
        />
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
