import axios from "axios";
import { useState, useEffect } from "react";
import { LyricsNew } from "./LyricsNew";
import { LyricsIndex } from "./LyricsIndex";
import { Modal } from "./Modal";

export function Content() {
  // let lyrics = [];
  const [lyrics, setLyrics] = useState([]);
  const [isLyricsShowVisible, setIsLyricsShowVisible] = useState(false);

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

  const handleShowLyric = () => {
    setIsLyricsShowVisible(true);
  };

  const handleCloseLyric = () => {
    setIsLyricsShowVisible(false);
  };

  useEffect(handleIndexLyrics, []);
  // handleIndexLyrics(); this causes an infinite loop - you can see it in the console if this and the handleIndexLyrics button is active because React it built this way
  return (
    <div>
      <LyricsNew />
      {/* <button onClick={handleIndexLyrics}>Load Lyrics</button> not user friendly */}
      <LyricsIndex lyrics={lyrics} onShowLyric={handleShowLyric} />
      <Modal show={isLyricsShowVisible} onClose={handleCloseLyric}>
        <p>Test</p>
      </Modal>
    </div>
  );
}
