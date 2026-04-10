import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const goHome = () => {
    const lastTheme = localStorage.getItem("lastTheme");
    navigate("/", { state: { theme: lastTheme } });
  };

  return (
    <>
      <nav style={{ position: "fixed", top: 10, right: 20 }}>
        <button onClick={goHome}>Back to Dashboard</button>
      </nav>
      <Outlet />
    </>
  );
}