import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  console.log("Hello integration");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/notes`)
    .then((res) => {
      setNotes(res.data.notes);
    });
  }, []);

  return (
    <>
      <div className="notes">
        {notes.map((note, index) => {
          return (
            <div key={index} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
