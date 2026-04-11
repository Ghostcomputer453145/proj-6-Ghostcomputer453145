import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    const storedList = JSON.parse(localStorage.getItem("cachedList") || "[]");
    const found = storedList.find((x) => x.id === id);

    if (!found) return;

    setItem(found);

    if (found.key) {
      fetch(`https://openlibrary.org${found.key}.json`)
        .then((res) => res.json())
        .then((data) => {
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
    } else if (found.id) {
      fetch(`https://api.openbrewerydb.org/v1/breweries/${found.id}`)
        .then((res) => res.json())
        .then((data) => {
          const parts = [];

          if (data.name) parts.push(`Name: ${data.name}`);
          if (data.brewery_type) parts.push(`Type: ${data.brewery_type}`);
          if (data.address_1) parts.push(`Address: ${data.address_1}`);
          if (data.city) parts.push(`City: ${data.city}`);
          if (data.state_province) parts.push(`State: ${data.state_province}`);
          if (data.postal_code) parts.push(`ZIP: ${data.postal_code}`);
          if (data.country) parts.push(`Country: ${data.country}`);
          if (data.phone) parts.push(`Phone: ${data.phone}`);
          if (data.website_url) parts.push(`Website: ${data.website_url}`);

          setDescription(parts.length ? parts.join("\n") : "No additional brewery details available.");
        })
        .catch(() => setDescription("No description available."));
    }
  }, [id]);

  if (!item) return <p style={{ marginLeft: "200px" }}>Loading...</p>;

  const goBack = () => {
    navigate("/");
  };

  const formatKey = (key) => {
    return key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={goBack}>⬅ Back</button>

      <h1>{item.name}</h1>

      <p style={{ maxWidth: "700px" }}>
        <strong>Description:</strong> {description}
      </p>

      <table className="detail-table">
        <tbody>
          {Object.entries(item)
            .filter(([k]) => k !== "description" && k !== "key")
            .map(([k, v]) => (
              <tr key={k}>
                <th>{formatKey(k)}</th>
                <td>{v || "N/A"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}