import { Outlet, useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";

export default function Layout() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="app-container">
      <SideNav />

      <div className="main-content">
        <nav style={{ position: "fixed", top: 10, right: 20 }}>
          <button onClick={goHome}>Back to Dashboard</button>
        </nav>

        <Outlet />
      </div>
    </div>
  );
}