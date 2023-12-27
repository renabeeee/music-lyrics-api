export function LyricsIndex(props) {
  console.log(props);
  return (
    <div id="lyrics-index" className="content-section">
      <h1>All tracks</h1>

      {props.lyrics.map((lyric) => (
        <div key={lyric.id} className="lyrics">
          <h2>{lyric.title}</h2>
          <img
            src={lyric.image_url}
            alt={lyric.title}
            className="lyrics-image"
          />
          <p>Artist: {lyric.artist}</p>
          <button
            onClick={() => props.onShowLyric(lyric)}
            className="info-button"
          >
            See more info
          </button>
        </div>
      ))}
    </div>
  );
}
