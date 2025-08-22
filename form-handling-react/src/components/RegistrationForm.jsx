import { useState } from "react";
import { registerUser } from "../services/api";

export default function RegistrationForm() {
  const [values, setValues] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!values.username.trim()) errs.username = "Username required";
    if (!values.email.trim()) errs.email = "Email required";
    if (!values.password.trim()) errs.password = "Password required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      setSubmitting(true);
      const data = await registerUser({ email: values.email, password: values.password });
      setStatus({ ok: true, msg: `Success! token: ${data.token}` });
      setValues({ username: "", email: "", password: "" });
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input name="username" value={values.username} onChange={handleChange} />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>

        <div>
          <label>Email</label>
          <input name="email" type="email" value={values.email} onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input name="password" type="password" value={values.password} onChange={handleChange} />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Registering..." : "Register"}
        </button>
      </form>
      {status && <p style={{ color: status.ok ? "green" : "red" }}>{status.msg}</p>}
    </div>
  );
}
