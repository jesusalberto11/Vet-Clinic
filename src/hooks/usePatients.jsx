import { useEffect, useState } from "react";

export const usePatients = () => {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) ?? []
  );
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const savedPatients = JSON.parse(localStorage.getItem("patients")) ?? [];

    setPatients(savedPatients);
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handleAddPatients = (value) => {
    setPatients(value);
  };

  const handleAddPatient = (value) => {
    setPatient(value);
  };

  const handleDeletePatient = (id) => {
    if (!window.confirm("Deseas eliminar este paciente?")) return;

    const filteredPatients = patients.filter(
      (statePatients) => statePatients.id !== id
    );

    setPatients(filteredPatients);
  };

  return {
    patient,
    patients,
    handleAddPatients,
    handleAddPatient,
    handleDeletePatient,
  };
};
