import AddPatientsForm from "./components/AddPatientsForm";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";
import { usePatients } from "./hooks/usePatients";

function App() {
  const {
    patient,
    patients,
    handleAddPatients,
    handleAddPatient,
    handleDeletePatient,
  } = usePatients();

  return (
    <div className="container mx-auto">
      <Header />
      <div className="pt-10 container w-auto flex flex-col sm:flex-row align-middle justify-center gap-3">
        <AddPatientsForm
          patients={patients}
          setPatients={handleAddPatients}
          patient={patient}
          setPatient={handleAddPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={handleAddPatient}
          handleDeletePatient={handleDeletePatient}
        />
      </div>
    </div>
  );
}

export default App;
