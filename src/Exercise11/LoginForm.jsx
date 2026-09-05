import { useState } from "react";

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoggedIn, setIsLoggedin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (userEmail.trim() !== "" && userPassword.trim() !== "") {
      setIsLoggedin(true);
    }
  };

  const handleLogout = () => {
    setUserEmail("");
    setUserPassword("");
    setIsLoggedin(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome, {userEmail}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
        <h1>Login</h1>
        <label htmlFor="htmlFor">Email</label>
        <input
          type="text"
          placeholder="Enter Your Email"
          required
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
        />

        <label htmlFor="htmlFor">Password</label>
        <input
          type="text"
          placeholder="Enter Your Password"
          required
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
        />

        <button>Login</button>
      </div>
    </form>

  )
}

export default LoginForm;