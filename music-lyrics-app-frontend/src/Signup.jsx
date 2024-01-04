import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="content-section">
      <h1>Sign up!</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          Name: <input name="name" type="text" />
        </div>
        <div className="form-field">
          Email: <input name="email" type="email" />
        </div>
        <div className="form-field">
          Password: <input name="password" type="password" />
        </div>
        <div className="form-field">
          Password Confirmation:{" "}
          <input name="password_confirmation" type="password" />
        </div>
        <button type="submit"> Sign up</button>
      </form>
    </div>
  );
}
