function SingleNote({ note }) {
  return (
    <div
      style={{
        width: "200px",
        margin: "20px",
        borderRadius: "10px",
        padding: "5px",
        background: "#fed700",
      }}
    >
      <li>
        {note.title} & {note.id}
      </li>
    </div>
  );
}
export default SingleNote;
