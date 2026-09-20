import ContactCard from "./ContactCard";

const ContactList = ({
  contacts,
  dispatch,
  setEditingContact,
}) => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        My Contacts
      </h2>

      {contacts.length > 0 ? (
        <ul
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditingContact={setEditingContact}
            />
          ))}
        </ul>
      ) : (
        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#777",
              fontSize: "16px",
            }}
          >
            No contacts available.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactList;
