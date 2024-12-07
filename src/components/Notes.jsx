import React, { useContext, useEffect, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [currentNote, setCurrentNote] = useState(null); // State to store the note to be edited
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateNote = (currentNote) => {
    setCurrentNote(note); 
    setShowModal(true); 
    setNote(currentNote);
  };
  
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value }); // Update state for corresponding input field
  };
  const handleClick = (e) => {
    e.preventDefault();
  
  };

  const closeModal = () => {
    setShowModal(false); 
    setCurrentNote(null); 
  };

  return (
    <>
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

       
            <div className="mb-4">
              <p className="text-gray-700">
                Editing note: <strong>{currentNote?.title}</strong>
              </p>
     
              <form onSubmit={handleClick}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="etitle"
              name="etitle" 
              placeholder="Enter note title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={note.title}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Add Note:
            </label>
            <textarea
              id="edescription"
              name="edescription" 
              placeholder="Write your note here..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              value={note.description}
              onChange={onChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="tag"
              className="block text-gray-700 font-medium mb-2"
            >
              Tag:
            </label>
            <input
              type="text"
              id="etag"
              name="etag" 
              placeholder="Enter a tag"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={note.tag}
              onChange={onChange}
            />
          </div>
        </form>
              {/* Add a form or input fields here for editing */}
            </div>

        
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

   
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Your Notes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {notes.map((note) => (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
