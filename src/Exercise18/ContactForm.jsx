import { useState, useEffect } from "react";

const ContactForm = ({ dispatch, editingContact, setEditingContact, }) => {
  const [contact, setContact] = useState( editingContact || {
      id: null,
      name: "",
      email: "",
      phone: "",
    }
  );

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsEditing(true);
    }
  }, [editingContact]);

  const changeInput = (e) => {
    const { name, value } = e.target;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (contact.name && contact.email && contact.phone) {
      if (isEditing) {
        dispatch({
          type: "edit",
          payload: contact,
        });

        setIsEditing(false);
        setEditingContact(null);
      } else {
        dispatch({
          type: "add",
          payload: {
            ...contact,
            id: Date.now(),
            favorite: false,
          },
        });
      }

      setContact({
        id: null,
        name: "",
        email: "",
        phone: "",
      });
    }
  };

  const cancelEdit = () => {
    setContact({
      id: null,
      name: "",
      email: "",
      phone: "",
    });

    setIsEditing(false);
    setEditingContact(null);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "7px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "15px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    marginRight: "10px",
  };

  return (
    <form
      onSubmit={submitForm}
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
        marginBottom: "30px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#333",
        }}
      >
        {isEditing ? "Edit Contact" : "Add New Contact"}
      </h2>

      <label>
        <strong>Name</strong>

        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeInput}
          placeholder="Enter name"
          required
          style={inputStyle}
        />
      </label>

      <label>
        <strong>Email</strong>

        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={changeInput}
          placeholder="Enter email"
          required
          style={inputStyle}
        />
      </label>

      <label>
        <strong>Phone</strong>

        <input
          type="tel"
          name="phone"
          value={contact.phone}
          onChange={changeInput}
          placeholder="Enter phone number"
          required
          style={inputStyle}
        />
      </label>

      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        <button
          type="submit"
          style={{
            ...buttonStyle,
            backgroundColor: "#2563eb",
            color: "white",
          }}
        >
          {isEditing ? "Update Contact" : "Add Contact"}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            style={{
              ...buttonStyle,
              backgroundColor: "#e5e7eb",
              color: "#333",
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
