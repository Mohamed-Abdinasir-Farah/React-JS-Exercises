const ContactCard = ({
  contact,
  dispatch,
  setEditingContact,
}) => {
  const { id, name, email, phone, favorite } = contact;

  return (
    <li
      style={{
        listStyle: "none",
        backgroundColor: "white",
        padding: "20px",
        marginBottom: "15px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          color: "#222",
        }}
      >
        {name} {favorite && "⭐"}
      </h3>

      <p
        style={{
          margin: "7px 0",
          color: "#555",
        }}
      >
        <strong>Email:</strong> {email}
      </p>

      <p
        style={{
          margin: "7px 0 15px",
          color: "#555",
        }}
      >
        <strong>Phone:</strong> {phone}
      </p>

      <div>
        <button
          onClick={() =>
            dispatch({
              type: "toggleFavorite",
              payload: id,
            })
          }
          style={{
            padding: "8px 12px",
            marginRight: "8px",
            border: "none",
            borderRadius: "7px",
            backgroundColor: "#f3f4f6",
            cursor: "pointer",
          }}
        >
          {favorite ? "Unfavorite" : "Favorite"}
        </button>

        <button
          onClick={() => setEditingContact(contact)}
          style={{
            padding: "8px 12px",
            marginRight: "8px",
            border: "none",
            borderRadius: "7px",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Edit
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "delete",
              payload: id,
            })
          }
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "7px",
            backgroundColor: "#dc2626",
            color: "white",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactCard;
