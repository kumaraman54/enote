import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { notes, getNotes, editNote } = context;

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate("/login"); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Open the modal and set the current note
  const updateNote = (currentNote) => {
    setShowModal(true);
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  // Handle input changes
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  // Handle the save action
  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Updating the note...");
    await editNote(note.id, note.etitle, note.edescription, note.etag);
    setShowModal(false); // Close the modal after saving
    setNote({ id: "", etitle: "", edescription: "", etag: "" }); // Reset state
  };

  // Close the modal without saving
  const closeModal = () => {
    setShowModal(false);
    setNote({ id: "", etitle: "", edescription: "", etag: "" });
  };

  return (
    <div className="min-h-screen bg-[#0d1333] p-6">
      <AddNote />

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Edit Note</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleClick}>
              <div className="mb-4">
                <label htmlFor="etitle" className="block text-gray-700 font-medium mb-2">
                  Title:
                </label>
                <input
                  type="text"
                  id="etitle"
                  name="etitle"
                  className="w-full border rounded-lg px-3 py-2"
                  value={note.etitle}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="edescription" className="block text-gray-700 font-medium mb-2">
                  Description:
                </label>
                <textarea
                  id="edescription"
                  name="edescription"
                  className="w-full border rounded-lg px-3 py-2"
                  rows="4"
                  value={note.edescription}
                  onChange={onChange}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="etag" className="block text-gray-700 font-medium mb-2">
                  Tag:
                </label>
                <input
                  type="text"
                  id="etag"
                  name="etag"
                  className="w-full border rounded-lg px-3 py-2"
                  value={note.etag}
                  onChange={onChange}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button className="bg-gray-300 py-2 px-4 rounded" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className=" bg-[#0d1333] p-6 rounded-lg w-full">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Your Notes</h2>
        {notes.length === 0 && "No notes to display"}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {notes.map((note) => (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
