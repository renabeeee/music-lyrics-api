export function LyricsNew() {
  return (
    <div id="lyrics-new" className="content-section">
      <h1>New track</h1>
      <form className="form">
        <div className="form-field">
          Title: <input type="text" />
        </div>
        <div className="form-field">
          Artist: <input type="text" />
        </div>
        <div className="form-field">
          Duration: <input type="text" />
        </div>
        <div className="form-field">
          BPM: <input type="text" />
        </div>
        <button className="submit-button" type="submit">
          Add track
        </button>
      </form>
    </div>
  );
}
