import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const goBackToDashboard = () => {
    const lastTheme = localStorage.getItem("lastTheme");
    navigate("/", { state: { theme: lastTheme } });
  };

  return (
    <div
      style={{
        marginLeft: "180px",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h2>There's nothing here!</h2>
      <button onClick={goBackToDashboard}>
        ⬅ Back
      </button>
    </div>
  );
}