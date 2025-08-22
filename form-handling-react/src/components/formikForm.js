import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("Username required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const res = await fetch("https://reqres.in/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: values.email, password: values.password }),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error);
          alert(`Success! Token: ${data.token}`);
          resetForm();
        } catch (err) {
          alert(`Error: ${err.message}`);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Formik Registration Form</h2>

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
        </Form>
      )}
    </Formik>
  );
}
