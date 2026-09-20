import { useReducer, useState } from "react";
import { reducer, initialState } from "./Reducer";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export const ContactManager = () => {
  const [contacts, dispatch] = useReducer(reducer, initialState);
  const [editingContact, setEditingContact] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fb",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#222",
            marginBottom: "30px",
          }}
        >
          Contact Manager
        </h1>

        <ContactForm
          dispatch={dispatch}
          editingContact={editingContact}
          setEditingContact={setEditingContact}
        />

        <ContactList
          contacts={contacts}
          dispatch={dispatch}
          setEditingContact={setEditingContact}
        />
      </div>
    </div>
  );
};

export default ContactManager;
