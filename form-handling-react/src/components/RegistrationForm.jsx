// alx-fe-reactjs/form-handling-react/src/components/RegistrationForm.jsx
import { useState } from 'react';
import { registerUser } from '../services/api';

export default function RegistrationForm() {
  const [values, setValues] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);  // success or error message

  function handleChange(e) {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  }

  function validate() {
    const errs = {};
    if (!values.username.trim()) errs.username = 'Username is required';
    if (!values.email.trim()) errs.email = 'Email is required';
    if (!values.password.trim()) errs.password = 'Password is required';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setResult(null);
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    try {
      setSubmitting(true);
      // Only email & password are used by the demo API
      const data = await registerUser({ email: values.email, password: values.password });
      setResult({ ok: true, message: `Registered! token: ${data.token}` });
      setValues({ username: '', email: '', password: '' });
    } catch (err) {
      setResult({ ok: false, message: err.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="card">
      <h2>Controlled Registration Form</h2>
      <p className="muted">
        Tip: For a successful mock call, try email <code>eve.holt@reqres.in</code> and any password (e.g., <code>pistol</code>).
      </p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username" name="username" type="text"
            value={values.username} onChange={handleChange} placeholder="your_username"
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email"
            value={values.email} onChange={handleChange} placeholder="you@example.com"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password" name="password" type="password"
            value={values.password} onChange={handleChange} placeholder="••••••••"
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button disabled={submitting} type="submit">
          {submitting ? 'Submitting...' : 'Register'}
        </button>
      </form>

      {result && (
        <div className={result.ok ? 'success' : 'error-banner'}>
          {result.message}
        </div>
      )}
    </div>
  );
}
