import axios from "axios";
import { useState } from "react";

export function LyricsNew() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]); // Clear any previous errors

    console.log("handleSubmit");

    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/new-lyrics.json", params, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        event.target.reset(); // Clear form fields
        window.location.href = "/"; // Redirect to home page
      })
      .catch((error) => {
        // Handle errors gracefully
        console.error("Axios error:", error);

        if (error.response && error.response.data.errors) {
          // Server-side validation errors
          setErrors(error.response.data.errors);
        } else {
          // Generic error message
          setErrors([
            "An error occurred while submitting the form. Please try again.",
          ]);
        }
      });
  };

  return (
    <div id="lyrics-new" className="content-section">
      <h1>New track</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form
        method="POST"
        action="http://localhost:3000/new-lyrics.json"
        onSubmit={handleSubmit}
      >
        <div className="form-field">
          Title: <input name="title" type="text" />
        </div>
        <div className="form-field">
          Artist: <input name="artist" type="text" />
        </div>
        <div className="form-field">
          Duration: <input name="duration" type="text" />
        </div>
        <div className="form-field">
          BPM: <input name="bpm" type="text" />
        </div>
        <div className="form-field">
          Image URL: <input name="image_url" type="text" />
        </div>
        <button className="submit-button" type="submit">
          Add track
        </button>
      </form>
    </div>
  );
}
