import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios.get(`${import.meta.env.VITE_API_URL}/api/notes`).then((res) => {
      setNotes(res.data.notes);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/notes`, {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }

  function handleDeleteNote(noteId) {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/notes/` + noteId)
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }

  const [isEditing, setIsEditing] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  function handleUpdateNote(){
    axios.patch(`${import.meta.env.VITE_API_URL}/api/notes/`+selectedNote._id, {
      title: selectedNote.title,
      description: selectedNote.description
    })
    .then((res)=>{
      console.log(res.data);
      fetchNotes();
      setIsEditing(false);
    })
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter title" />
        <input name="description" type="text" placeholder="Enter description" />
        <button>Create Note</button>
      </form>
      <div className="notes">
        {notes.map((note, index) => {
          return (
            <div key={index} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  handleDeleteNote(note._id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setIsEditing(true);
                  setSelectedNote(note);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
      {isEditing && (
        <div className="edit-note">
          <h2>Edit Note</h2>

          <input
            onChange={(e) => {
              setSelectedNote({
                ...selectedNote,
                title: e.target.value,
              });
            }}
            value={selectedNote?.title}
            type="text"
            placeholder="Enter New Title"
          />

          <textarea
            onChange={(e) => {
              setSelectedNote({
                ...selectedNote,
                description: e.target.value,
              });
            }}
            value={selectedNote?.description}
            placeholder="Enter New Description"
          ></textarea>

          <div className="edit-note-buttons">
            <button 
              onClick={handleUpdateNote}
              >
                Update
              </button>

            <button
              onClick={() => {
                setIsEditing(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
