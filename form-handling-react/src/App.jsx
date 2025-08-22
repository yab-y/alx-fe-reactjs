import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  const [mode, setMode] = useState("controlled");

  return (
    <div>
      <h1>User Registration</h1>
      <button onClick={() => setMode("controlled")}>Controlled</button>
      <button onClick={() => setMode("formik")}>Formik</button>
      {mode === "controlled" ? <RegistrationForm /> : <FormikForm />}
    </div>
  );
}
