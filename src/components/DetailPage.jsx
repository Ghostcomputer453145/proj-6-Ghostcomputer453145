import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailPage() {
  const [item, setItem] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("selectedItem");
    if (!stored) return;
    const parsed = JSON.parse(stored);
    setItem(parsed);

    if (parsed.key) {
      fetch(`https://openlibrary.org${parsed.key}.json`)
        .then(res => res.json())
        .then(data => {
          if (data.description) {
            setDescription(
              typeof data.description === "string"
                ? data.description
                : data.description.value
            );
          } else {
            setDescription("No description available.");
          }
        })
        .catch(() => setDescription("Failed to load description."));
    }

    else if (parsed.id) {
      fetch(`https://api.openbrewerydb.org/v1/breweries/${parsed.id}`)
        .then(res => res.json())
        .then(data => {
          setDescription(
            `${data.name} is a ${data.brewery_type} brewery located in ${data.city}, ${data.state_province}.`
          );
        })
        .catch(() => setDescription("No description available."));
    }

  }, []);

  if (!item) return <p>No data available.</p>;

  const cleanText = (text) =>
    text?.length > 400 ? text.slice(0, 400) + "..." : text;
  const goBackToDashboard = () => {
    const lastTheme = localStorage.getItem("lastTheme");
    navigate("/", { state: { theme: lastTheme } });
  };
  return (
    <div style={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <button onClick={goBackToDashboard}>⬅ Back</button>
      <h1>{item.name}</h1>
      <p style={{ maxWidth: "700px", margin: "20px auto" }}>
        <strong>Description:</strong> {cleanText(description)}
      </p>

      <table className="detail-table">
        <tbody>
          {Object.entries(item)
            .filter(([k]) => k !== "description" && k !== "key")
            .map(([k, v]) => {
              const formattedKey = k
                .replace(/_/g, " ")
                .replace(/\b\w/g, c => c.toUpperCase());

              return (
                <tr key={k}>
                  <th>{formattedKey}</th>
                  <td>{v || "N/A"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}