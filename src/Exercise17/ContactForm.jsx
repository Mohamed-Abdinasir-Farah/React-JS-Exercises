import useForm from './useForm';

const ContactForm = () => {
  const { values, handleChange } = useForm({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', values);
  };


  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f3f5",
        padding: "30px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginBottom: "25px",
          }}
        >
          Contact Form
        </h1>

        {/* Name */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: "bold",
              marginBottom: "7px",
            }}
          >
            Name
          </label>

          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Phone */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: "bold",
              marginBottom: "7px",
            }}
          >
            Phone
          </label>

          <input
            type="number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: "bold",
              marginBottom: "7px",
            }}
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Message */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: "bold",
              marginBottom: "7px",
            }}
          >
            Message
          </label>

          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            rows="5"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxSizing: "border-box",
              resize: "vertical",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#222",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;