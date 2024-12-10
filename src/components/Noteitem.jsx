import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="note-item relative w-full sm:w-64 mx-auto my-4 p-4 bg-[#242949] rounded-lg shadow-[0_4px_6px_rgba(255,255,255,0.2)]">
      <h3 className="text-lg sm:text-xl font-semibold text-[#aaaaac] mb-2">{note.title}</h3>
      <p className="text-[#666a86] mb-4 text-sm sm:text-base">{note.description}</p>

      <div className="absolute top-2 right-2 flex space-x-2">
        <i
          className="fa-solid fa-trash text-gray-300 cursor-pointer text-base sm:text-lg"
          onClick={() => {
            deleteNote(note._id);
          }}
        ></i>
        <i
          className="fa-solid fa-pen-to-square text-gray-300 cursor-pointer text-base sm:text-lg"
          onClick={() => {
            updateNote(note);
          }}
        ></i>
      </div>
    </div>
  );
};

export default Noteitem;
