export function LyricsIndex(props) {
  console.log(props);

  return (
    <div id="lyrics-index" className="content-section">
      <h1>All tracks</h1>

      <div className="lyrics-container">
        {props.lyrics.map((lyric) => (
          <div key={lyric.id} className="lyrics">
            {/* Moved card section within lyrics container */}
            <div className="card-section">
              <div className="card mb-3">
                <img src={lyric.image_url} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h5 className="card-title">{lyric.artist}</h5>

                  <p className="card-text">
                    {" "}
                    <p>Title: {lyric.title}</p>
                    <p>Duration: {lyric.duration}</p>
                    {/* This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. */}
                  </p>
                </div>
              </div>
              <button
                onClick={() => props.onShowLyric(lyric)}
                className="info-button"
              >
                See more info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
