/* eslint-disable react/prop-types */
export function LyricsShow(props) {
  return (
    <div id="lyrics-show" className="show_text">
      <p>Lyric Information</p>
      <p>
        {props.lyric.title} by {props.lyric.artist}
      </p>
      <p>Duration: {props.lyric.duration} minutes</p>
      <p>BPM: {props.lyric.bpm}</p>
    </div>
  );
}
