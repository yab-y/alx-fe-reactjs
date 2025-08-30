import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;
