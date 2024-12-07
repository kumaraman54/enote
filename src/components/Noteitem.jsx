import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { note, updateNote } = props;

  return (
    <div className="relative max-w-sm mx-auto my-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{note.title}</h3>
      <p className="text-gray-600 mb-4">{note.description}</p>
      

      <div className="absolute top-2 right-2 flex space-x-2">
        <i className="fa-solid fa-trash text-gray-600 cursor-pointer" onClick={()=>{deleteNote(note._id)}}></i>
        <i className="fa-solid fa-pen-to-square text-gray-600 cursor-pointer" onClick={() => {updateNote(note)}}></i>
      </div>
    </div>
  );
};

export default Noteitem;
