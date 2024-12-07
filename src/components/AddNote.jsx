import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
   addNote(note.title, note.description,note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value }); // Update state for corresponding input field
  };

  return (
    <div className="p-4 flex flex-col md:flex-row justify-center items-start gap-8">

      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Add a Note</h1>

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
              id="description"
              name="description" 
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
              id="tag"
              name="tag" 
              placeholder="Enter a tag"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={note.tag}
              onChange={onChange}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
