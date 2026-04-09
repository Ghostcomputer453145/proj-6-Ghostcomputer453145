import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailPage() {
  const [item, setItem] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("selectedItem");

    if (stored) {
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
            }
          });
      } else if (parsed.description) {
        setDescription(parsed.description);
      }
    }
  }, []);

  if (!item) return <p style={{ marginLeft: "220px" }}>No data available.</p>;

  const cleanText = (text) =>
    text?.length > 300 ? text.slice(0, 300) + "..." : text;

  return (
    <div style={{ marginLeft: "220px", padding: "20px" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{item.name}</h1>

      {description && (
        <p>
          <strong>Description:</strong> {cleanText(description)}
        </p>
      )}

      <table>
        <tbody>
          {Object.entries(item).map(([k, v]) => (
            <tr key={k}>
              <th>{k}</th>
              <td>{v || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}