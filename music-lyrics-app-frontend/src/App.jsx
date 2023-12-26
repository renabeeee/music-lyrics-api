import "./App.css";
import axios from "axios";

function Header() {
  return (
    <div className="app-container">
      <header className="header">
        <a href="#">Home</a> | <a href="#lyrics-index">All tracks</a> |{" "}
        <a href="#lyrics-new">New track</a>
      </header>
    </div>
  );
}

function LyricsNew() {
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

function LyricsIndex(props) {
  console.log(props);
  return (
    <div id="lyrics-index" className="content-section">
      <h1>All tracks</h1>

      {props.lyrics.map((lyric) => (
        <div key={lyric.id} className="lyrics">
          <h2>{lyric.title}</h2>
          <img src={lyric.image_url} alt={lyric.title} />
          <p>Artist: {lyric.artist}</p>
          <button className="info-button">See more info</button>
        </div>
      ))}
    </div>
  );
}

function Content() {
  let lyrics = [];

  const handleIndexLyrics = () => {
    axios.get("http://localhost:3000/all-lyrics.json").then((response) => {
      console.log(response.data);
      lyrics = response.data;
    }); // Semicolon added here
  };

  return (
    <div>
      <LyricsNew />
      <button onClick={handleIndexLyrics}>Load Lyrics</button>
      <LyricsIndex lyrics={lyrics} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
