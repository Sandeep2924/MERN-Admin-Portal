import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect only if token doesn't exist
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/login");
  };

  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-nav-right">
          {admin && <span className="admin-email">{admin.email}</span>}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <main className="dashboard-content">
        <h2>Welcome{admin?.email ? `, ${admin.email}` : ""}!</h2>
        <p>You are now logged in as an administrator.</p>
      </main>
    </div>
  );
};

export default Dashboard;
