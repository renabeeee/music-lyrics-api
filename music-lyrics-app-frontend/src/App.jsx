import "./App.css";

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

function LyricsIndex() {
  return (
    <div id="lyrics-index" className="content-section">
      <h1>All tracks</h1>

      <div className="track-card">
        <h2>Destiny's Child</h2>
        <img
          src="https://i.scdn.co/image/ab6761610000e5ebf75e64532704bd6acf0b4e76"
          alt=""
          className="track-image"
        />
        <button className="info-button">See more info</button>
      </div>
      <div className="track-card">
        <h2>JB</h2>
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/63d0095c7f394c0690922d82/Justin-Bieber-performs-on-day-three-of-Sziget-Festival-2022-on--budai-sziget-Island/0x0.jpg?crop=1617,910,x0,y80,safe&height=400&width=711&fit=bounds"
          alt=""
          className="track-image"
        />
        <button className="info-button">See more info</button>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div>
      <LyricsNew />
      <LyricsIndex />
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
