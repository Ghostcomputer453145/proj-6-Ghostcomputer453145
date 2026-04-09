import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ marginLeft: "220px", textAlign: "center", marginTop: "100px" }}>
      <h2>There's nothing here!</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
}