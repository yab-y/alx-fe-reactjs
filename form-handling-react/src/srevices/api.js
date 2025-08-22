// alx-fe-reactjs/form-handling-react/src/services/api.js
export async function registerUser({ email, password }) {
  const res = await fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Registration failed");
  }
  return data; // {id, token}
}
