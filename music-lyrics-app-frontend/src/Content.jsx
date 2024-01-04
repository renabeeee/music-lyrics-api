import axios from "axios";
import { useState, useEffect } from "react";
import { LyricsNew } from "./LyricsNew";
import { LyricsIndex } from "./LyricsIndex";
import { Modal } from "./Modal";
import { LyricsShow } from "./LyricsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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
    console.log(lyric);
    setIsLyricsShowVisible(true);
    setCurrentLyric(lyric);
  };

  const handleCloseLyric = () => {
    setIsLyricsShowVisible(false);
  };

  useEffect(handleIndexLyrics, []);
  // handleIndexLyrics(); this causes an infinite loop - you can see it in the console if this and the handleIndexLyrics button is active because React it built this way
  return (
    <div className="container" id="content-component">
      <Signup />
      <Login />
      <LogoutLink />
      <LyricsNew />
      <LyricsIndex lyrics={lyrics} onShowLyric={handleShowLyric} />
      <Modal show={isLyricsShowVisible} onClose={handleCloseLyric}>
        <LyricsShow lyric={currentLyric} />
      </Modal>
    </div>
  );
}
