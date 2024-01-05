/* eslint-disable react/prop-types */
export function LyricsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateLyric(props.lyric.id, params);
    event.target.reset();
  };

  const handleDestroyLyric = () => {
    props.onDestroyLyric(props.lyric);
  };

  return (
    <div id="lyrics-show" className="show_text">
      <p>Lyric Information</p>
      <p>
        {props.lyric.BPM} by {props.lyric.artist}
      </p>
      <p>Duration: {props.lyric.duration} minutes</p>
      <p>BPM: {props.lyric.bpm}</p>

      <div id="lyrics-edit" className="content-section">
        <h1>Edit track</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            Title:{" "}
            <input defaultValue={props.lyric.title} name="title" type="text" />
          </div>
          <div className="form-field">
            Artist:{" "}
            <input
              defaultValue={props.lyric.artist}
              name="artist"
              type="text"
            />
          </div>
          <div className="form-field">
            Duration:{" "}
            <input
              defaultValue={props.lyric.duration}
              name="duration"
              type="text"
            />
          </div>
          <div className="form-field">
            BPM: <input defaultValue={props.lyric.bpm} name="bpm" type="text" />
          </div>
          <div className="form-field">
            Image_url:{" "}
            <input
              defaultValue={props.lyric.image_url}
              name="image_url"
              type="text"
            />
          </div>
          <button type="submit">Update lyric</button>
        </form>
        <button onClick={handleDestroyLyric}>Destroy lyric</button>
      </div>
    </div>
  );
}
