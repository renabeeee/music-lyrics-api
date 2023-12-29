export function LyricsShow(props) {
  return (
    <div id="lyrics-show">
      <h1>Lyric Information</h1>
      <h2>
        {props.lyric.title} by {props.lyric.artist}
      </h2>
      <p>Duration: {props.lyric.duration} minutes</p>
      <p>BPM: {props.lyric.bpm}</p>
    </div>
  );
}
