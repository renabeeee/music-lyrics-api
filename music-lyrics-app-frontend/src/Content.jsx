import axios from "axios";
import { useState, useEffect } from "react";
import { LyricsNew } from "./LyricsNew";
import { LyricsIndex } from "./LyricsIndex";
import { Modal } from "./Modal";

export function Content() {
  // let lyrics = [];
  const [lyrics, setLyrics] = useState([]);
  const [isLyricsShowVisible, setIsLyricsShowVisible] = useState(false);
  const [currentLyric, setCurrentLyric] = useState({});

  const handleIndexLyrics = () => {
    axios
      .get("http://localhost:3000/all-lyrics.json", {
        auth: {
          email: "serena@test.com", // Replace with actual credentials
          password: "password", // Replace with actual credentials
        },
      })
      .then((response) => {
        console.log(response.data);
        // lyrics = response.data;
        setLyrics(response.data);
      });
  };

  const handleShowLyric = (lyric) => {
    setIsLyricsShowVisible(true);
    setCurrentLyric(lyric);
  };

  const handleCloseLyric = () => {
    setIsLyricsShowVisible(false);
  };

  useEffect(handleIndexLyrics, []);
  // handleIndexLyrics(); this causes an infinite loop - you can see it in the console if this and the handleIndexLyrics button is active because React it built this way
  return (
    <div>
      <LyricsNew />
      <LyricsIndex lyrics={lyrics} onShowLyric={handleShowLyric} />
      <Modal show={isLyricsShowVisible} onClose={handleCloseLyric}>
        <h2>
          {currentLyric.title} by {currentLyric.artist}
        </h2>
        <p>Duration: {currentLyric.duration} minutes</p>
        <p>BPM: {currentLyric.bpm}</p>
      </Modal>
    </div>
  );
}
