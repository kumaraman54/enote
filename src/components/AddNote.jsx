import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    setShowModal(false);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
     
      <button
        onClick={openModal}
        className="fixed bottom-4 right-4 bg-yellow-500 text-white py-6 px-6 rounded-full hover: bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg transition-transform transform hover:scale-110 active:scale-95 hover:animate-bounce z-50 flex items-center justify-center sm:py-5 sm:px-5"
        style={{ width: "70px", height: "70px" }}
        title="Add Note"
      >
        <span className="text-4xl font-bold">+</span>
      </button>

    
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full sm:max-w-sm md:max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold sm:text-2xl">Add a Note</h1>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-lg sm:text-xl"
              >
                &times;
              </button>
            </div>

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
                  id="title"
                  name="title"
                  placeholder="Enter note title"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
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
                  id="description"
                  name="description"
                  placeholder="Write your note here..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
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
                  id="tag"
                  name="tag"
                  placeholder="Enter a tag"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                  value={note.tag}
                  onChange={onChange}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 text-sm sm:text-base mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNote;
