import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../services/api";

const schema = Yup.object({
  username: Yup.string().required("Username required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "At least 6 chars").required("Password required"),
});

export default function FormikForm() {
  return (
    <div>
      <h2>Formik Form</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          setStatus(null);
          try {
            const data = await registerUser({ email: values.email, password: values.password });
            setStatus({ ok: true, msg: `Success! token: ${data.token}` });
            resetForm();
          } catch (err) {
            setStatus({ ok: false, msg: err.message });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div>
              <label>Username</label>
              <Field name="username" />
              <ErrorMessage name="username" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
            {status && <p style={{ color: status.ok ? "green" : "red" }}>{status.msg}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
