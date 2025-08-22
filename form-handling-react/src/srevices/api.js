// alx-fe-reactjs/form-handling-react/src/services/api.js
// Simple mock API using reqres.in (registration).
// NOTE: reqres only "succeeds" for certain emails like "eve.holt@reqres.in" with any password (e.g., "pistol").

export async function registerUser({ email, password }) {
  const res = await fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    // reqres returns { error: "Only defined users succeed registration" } for unknown emails
    throw new Error(data.error || 'Registration failed');
  }
  // Success returns: { id, token }
  return data;
}
