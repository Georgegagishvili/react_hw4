import { useEffect, useState } from "react";
import SingleNote from "../../components/single-note/singlenote";

function MainPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error has been spotted.</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            textDecoration: "none",
            listStyle: "none",
            textAlign: "center",
          }}
        >
          {items.map((item) => (
            <SingleNote note={item} key={item.id}></SingleNote>
          ))}
        </ul>
      </div>
    );
  }
}

export default MainPage;
