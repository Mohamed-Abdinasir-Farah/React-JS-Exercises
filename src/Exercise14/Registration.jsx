import { useReducer, useState } from "react";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.name]: action.value, };

    case "GO_NEXT":
      return { ...state, step: state.step + 1, };

    case "GO_BACK":
      return { ...state, step: state.step - 1, };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};


const Registration = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const changeInput = (event) => {
    dispatch({
      type: "CHANGE_INPUT",
      name: event.target.name,
      value: event.target.value,
    });
  };

  const goNext = () => {
    dispatch({ type: "GO_NEXT" });
  };

  const goBack = () => {
    dispatch({ type: "GO_BACK" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const submitForm = () => {
    // alert("Registration completed!");
    dispatch({ type: "GO_NEXT" });
  };


  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f1f3f5", padding: "30px" }}>

      <div style={{ width: "100%", maxWidth: "450px", backgroundColor: "white", padding: "30px", borderRadius: "15px", boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}>

        <h1 style={{ textAlign: "center", fontSize: "28px", marginBottom: "8px" }}>
          Student Registration
        </h1>

        <p style={{ textAlign: "center", fontSize: "14px", color: "#777", marginBottom: "25px" }}>
          Step {state.step} of 4
        </p>

        {state.step === 1 ? (
          <div style={{padding: "20px"}}>

            <h2 style={{ fontSize: "21px", marginBottom: "20px" }}>
              Personal Information
            </h2>

            <label style={{ display: "block", fontSize: "15px", fontWeight: "bold", marginBottom: "7px" }}>
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={changeInput}
              placeholder="Enter first name"
              style={{ width: "100%", padding: "12px", fontSize: "15px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "15px" }}
            />

            <label style={{ display: "block", fontSize: "15px", fontWeight: "bold", marginBottom: "7px" }}>
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={changeInput}
              placeholder="Enter last name"
              style={{ width: "100%", padding: "12px", fontSize: "15px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "10px" }}
            />

            <button
              onClick={goNext}
              style={{ width: "100%", padding: "12px", marginTop: "15px", border: "none", borderRadius: "8px", backgroundColor: "#222", color: "white", fontSize: "16px", cursor: "pointer" }}
            >
              Continue
            </button>

          </div>

        ) : state.step === 2 ? (
          <div style={{padding: "20px"}}>

            <h2 style={{ fontSize: "21px", marginBottom: "20px" }}>
              Contact Information
            </h2>

            <label style={{ display: "block", fontSize: "15px", fontWeight: "bold", marginBottom: "7px" }}>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={state.email}
              onChange={changeInput}
              placeholder="Enter email"
              style={{ width: "100%", padding: "12px", fontSize: "15px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "15px" }}
            />

            <label style={{ display: "block", fontSize: "15px", fontWeight: "bold", marginBottom: "7px" }}>
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              value={state.phone}
              onChange={changeInput}
              placeholder="Enter phone number"
              style={{ width: "100%", padding: "12px", fontSize: "15px", border: "1px solid #ccc", borderRadius: "8px" }}
            />

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>

              <button
                onClick={goBack}
                style={{ flex: 1, padding: "12px", border: "none", borderRadius: "8px", backgroundColor: "#ddd", color: "#222", fontSize: "15px", cursor: "pointer" }}
              >
                Back
              </button>

              <button
                onClick={goNext}
                style={{ flex: 1, padding: "12px", border: "none", borderRadius: "8px", backgroundColor: "#222", color: "white", fontSize: "15px", cursor: "pointer" }}
              >
                Continue
              </button>

            </div>

          </div>

        ) : state.step === 3 ? (
          <div style={{padding: "20px"}}>

            <h2 style={{ fontSize: "21px", marginBottom: "20px" }}>
              Review Information
            </h2>

            <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px" }}>

              <p>
                <strong>First Name:</strong> {state.firstName}
              </p>

              <p>
                <strong>Last Name:</strong> {state.lastName}
              </p>

              <p>
                <strong>Email:</strong> {state.email}
              </p>

              <p>
                <strong>Phone:</strong> {state.phone}
              </p>

            </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>

              <button
                onClick={goBack}
                style={{ flex: 1, padding: "12px", border: "none", borderRadius: "8px", backgroundColor: "#ddd", fontSize: "15px", cursor: "pointer" }}
              >
                Back
              </button>

              <button
                onClick={submitForm}
                style={{ flex: 1, padding: "12px", border: "none", borderRadius: "8px", backgroundColor: "#222", color: "white", fontSize: "15px", cursor: "pointer" }}
              >
                Submit
              </button>

            </div>

          </div>

        ) :
          (
            <div style={{ textAlign: "center", padding: "20px" }}>

              <h2 style={{ fontSize: "23px", marginBottom: "10px" }}>
                Registration Complete
              </h2>

              <p style={{ fontSize: "15px", color: "#666", marginBottom: "20px" }}>
                Your information was submitted successfully.
              </p>

              <button
                onClick={reset}
                style={{ width: "100%", padding: "12px", border: "none", borderRadius: "8px", backgroundColor: "#222", color: "white", fontSize: "16px", cursor: "pointer" }}
              >
                Start Again
              </button>

            </div>
          )
        }

      </div>
    </div>
  );

};

export default Registration;