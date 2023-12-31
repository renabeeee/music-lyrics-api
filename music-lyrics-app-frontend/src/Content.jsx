import axios from "axios";
import { useState, useEffect } from "react";
import { LyricsNew } from "./LyricsNew";
import { About } from "./About";
import { LyricsIndex } from "./LyricsIndex";
import { Modal } from "./Modal";
import { LyricsShow } from "./LyricsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { LyricsShowPage } from "./LyricsShowPage";

export function Content() {
  const [lyrics, setLyrics] = useState([]);
  const [isLyricsShowVisible, setIsLyricsShowVisible] = useState(false);
  const [currentLyric, setCurrentLyric] = useState({});

  const handleIndexLyrics = () => {
    axios.get("http://localhost:3000/all-lyrics.json").then((response) => {
      console.log(response.data);
      setLyrics(response.data);
    });
  };

  const handleCreateLyric = (params) => {
    axios
      .post("http://localhost:3000/new-lyrics.json", params)
      .then((response) => {
        console.log(response.data);
        setLyrics([...lyrics, response.data]);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  const handleUpdateLyric = (id, params) => {
    axios
      .patch("http://localhost:3000/lyrics/" + id + ".json", params)
      .then((response) => {
        console.log(response.data);
        setLyrics(
          lyrics.map((lyric) => {
            if (lyric.id === response.data.id) {
              return response.data;
            } else {
              return lyric;
            }
          })
        );
      })
      .then(handleCloseLyric);
  };

  const handleDestroyLyric = (lyric) => {
    axios
      .delete("http://localhost:3000/lyrics/" + lyric.id + ".json")
      .then((response) => {
        console.log(response.data);
        setLyrics(lyrics.filter((lyric) => lyric.id !== lyric.id));
        handleCloseLyric();
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
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/lyrics/new"
          element={<LyricsNew onCreateLyrics={handleCreateLyric} />}
        />
        <Route
          path="/lyrics"
          element={
            <LyricsIndex lyrics={lyrics} onShowLyric={handleShowLyric} />
          }
        />
        <Route
          path="/"
          element={
            <LyricsIndex recipes={lyrics} onShowLyric={handleShowLyric} />
          }
        />
        <Route path="/lyrics/:id" element={<LyricsShowPage />} />
      </Routes>

      {/* <Signup /> */}
      {/* <Login /> */}
      <LogoutLink />
      <Modal show={isLyricsShowVisible} onClose={handleCloseLyric}>
        <LyricsShow
          lyric={currentLyric}
          onUpdateLyric={handleUpdateLyric}
          onDestroyLyric={handleDestroyLyric}
        />
      </Modal>
    </div>
  );
}
