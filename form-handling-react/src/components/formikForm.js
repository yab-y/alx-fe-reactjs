// alx-fe-reactjs/form-handling-react/src/components/formikForm.js
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../services/api';

const schema = Yup.object({
  username: Yup.string().min(3, 'Min 3 characters').required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Min 6 characters').required('Password is required'),
});

export default function FormikForm() {
  return (
    <div className="card">
      <h2>Formik + Yup Registration Form</h2>
      <p className="muted">
        Tip: Use email <code>eve.holt@reqres.in</code> and a password (e.g., <code>pistol</code>) to see a successful response from reqres.
      </p>

      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          setStatus(null);
          try {
            const data = await registerUser({ email: values.email, password: values.password });
            setStatus({ ok: true, message: `Registered! token: ${data.token}` });
            resetForm();
          } catch (err) {
            setStatus({ ok: false, message: err.message });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form noValidate>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field id="username" name="username" type="text" placeholder="your_username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" placeholder="you@example.com" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" placeholder="••••••••" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>

            {status && (
              <div className={status.ok ? 'success' : 'error-banner'}>
                {status.message}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
