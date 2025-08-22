// alx-fe-reactjs/form-handling-react/src/App.jsx
import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm.jsx';
import FormikForm from './components/formikForm.js';
import './index.css';

export default function App() {
  const [mode, setMode] = useState('controlled'); // 'controlled' | 'formik'

  return (
    <div className="container">
      <h1>React Form Handling — Controlled → Formik</h1>

      <div className="switcher">
        <button
          className={mode === 'controlled' ? 'active' : ''}
          onClick={() => setMode('controlled')}
        >
          Controlled
        </button>
        <button
          className={mode === 'formik' ? 'active' : ''}
          onClick={() => setMode('formik')}
        >
          Formik + Yup
        </button>
      </div>

      {mode === 'controlled' ? <RegistrationForm /> : <FormikForm />}
    </div>
  );
}
