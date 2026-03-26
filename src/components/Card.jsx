function Card({ item }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px" }}>
      <p>{item.name || item.title || "No Name"}</p>
      <p>{item.city || item.author_name || "No Info"}</p>
    </div>
  );
}

export default Card;