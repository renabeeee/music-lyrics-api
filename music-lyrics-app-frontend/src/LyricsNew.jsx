// import axios from "axios";
// import { useState } from "react";

export function LyricsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    props.onCreateLyrics(params);
    event.target.reset();
  };

  return (
    <div id="lyrics-new" className="content-section">
      <h1>New track</h1>

      <form
        // method="POST"
        // action="http://localhost:3000/new-lyrics.json"
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
