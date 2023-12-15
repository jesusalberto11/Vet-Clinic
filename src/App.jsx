import { useEffect, useState } from "react";
import "./App.css";
import AddPatientsForm from "./components/AddPatientsForm";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {
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

  const handleDeletePatient = (id) => {
    if (!window.confirm("Deseas eliminar este paciente?")) return;

    const filteredPatients = patients.filter(
      (statePatients) => statePatients.id !== id
    );

    setPatients(filteredPatients);
  };

  return (
    <div className="container mx-auto pt-20">
      <Header />
      <div className="pt-20 container w-auto flex flex-col sm:flex-row align-middle justify-center gap-3">
        <AddPatientsForm
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          handleDeletePatient={handleDeletePatient}
        />
      </div>
    </div>
  );
}

export default App;
