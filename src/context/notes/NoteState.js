import NoteContext from "./noteContext";
import { useState, useCallback } from "react";

const NoteState = (props) => {
  // const host = "http://localhost:5000";
  const host = "https://enote-rho.vercel.app"
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = useCallback(async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZGZlYmM1ZGU1NDFjY2FmMzM1Zjk3In0sImlhdCI6MTczMzE2NDczMn0.14U5bpUwQXJCaNWL-n4DlF85O3s-BQTvELMr0n37Cuw",
            "Access-Control-Allow-Origin" : "*",
            "Content-Type" : "application/json"
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch notes: ${response.statusText}`);
      }

      const json = await response.json();
      console.log("Fetched notes:", json);
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }, [host]); // Include 'host' in the dependency array

  // Add a note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZGZlYmM1ZGU1NDFjY2FmMzM1Zjk3In0sImlhdCI6MTczMzE2NDczMn0.14U5bpUwQXJCaNWL-n4DlF85O3s-BQTvELMr0n37Cuw",
            "Access-Control-Allow-Origin" : "*",
            "Content-Type" : "application/json"


        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        throw new Error(`Failed to add note: ${response.statusText}`);
      }

      const json = await response.json();
      console.log("Note added:", json);
      setNotes(notes.concat(json));
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZGZlYmM1ZGU1NDFjY2FmMzM1Zjk3In0sImlhdCI6MTczMzE2NDczMn0.14U5bpUwQXJCaNWL-n4DlF85O3s-BQTvELMr0n37Cuw",
            "Access-Control-Allow-Origin" : "*",
            "Content-Type" : "application/json"



        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete note: ${response.statusText}`);
      }

      const json = await response.json();
      console.log("Note deleted:", json);

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZGZlYmM1ZGU1NDFjY2FmMzM1Zjk3In0sImlhdCI6MTczMzE2NDczMn0.14U5bpUwQXJCaNWL-n4DlF85O3s-BQTvELMr0n37Cuw",
            "Access-Control-Allow-Origin" : "*",
            "Content-Type" : "application/json"



        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update note: ${response.statusText}`);
      }

      const json = await response.json();
      console.log("Note updated:", json);

      const newNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );
      setNotes(newNotes);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
