/* eslint-disable react/prop-types */
import { useState } from "react";

export function LyricsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);

  return (
    <div id="lyrics-index" className="container text-center">
      <h1>All tracks</h1>
      Search:
      <input
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        list="titles"
      />
      <datalist id="titles">
        {props.lyrics.map((lyric) => (
          <option key={lyric.id} value={lyric.title} />
        ))}
      </datalist>
      <div className="row">
        {/* <div className="lyrics-container"> */}

        {props.lyrics
          .filter((lyric) =>
            lyric.title.toLowerCase().includes(searchFilter.toLowerCase())
          )
          .map((lyric) => (
            <div key={lyric.id} className="lyrics col">
              {" "}
              <div className="card-section">
                <div className="card mb-3">
                  <img
                    src={lyric.image_url}
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h5 className="card-title">{lyric.artist}</h5>

                    <div className="card-text">
                      {" "}
                      <p>Title: {lyric.title}</p>
                      <p>Duration: {lyric.duration}</p>
                      {/* This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. */}
                    </div>
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
