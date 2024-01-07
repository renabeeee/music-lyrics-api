import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function LyricsShowPage() {
  const [lyric, setLyric] = useState({});
  const params = useParams();

  const handleShowLyric = () => {
    console.log({ "Lyric id is": params.id });
    axios.get(`/lyrics/${params.id}.json`).then((response) => {
      console.log(response);
      setLyric(response.data);
    });
  };

  useEffect(handleShowLyric, [params.id]);

  return (
    <div>
      <h1>Lyric Info</h1>
      <img src={lyric.image_url} />
      <h4>{lyric.title}</h4>
      <p>Artist: {lyric.artist}</p>
      <p>BPM: {lyric.bpm}</p>
      <p>Duration: {lyric.duration}</p>
    </div>
  );
}
