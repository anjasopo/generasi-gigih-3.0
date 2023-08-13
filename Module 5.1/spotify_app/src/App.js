import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import debounce from "lodash.debounce";

const MIN_SEARCH_LENGTH = 3;

function App() {
  const [access_token, set_access_token] = useState(null);
  const [query, set_query] = useState("");
  const [tracks, set_tracks] = useState([]);

  const LoginButton = () => {
    let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    let scope = "playlist-modify-private";
    let redirect_uri = "http://localhost:3000";

    let spotify_url = "https://accounts.spotify.com/authorize";
    spotify_url += "?response_type=token";
    spotify_url += "&client_id=" + encodeURIComponent(client_id);
    spotify_url += "&scope=" + encodeURIComponent(scope);
    spotify_url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

    return (
      <a
        href={spotify_url}
        className="bg-spotify_main hover:bg-gray-600 w-60 rounded-full text-white font-medium px-1 py-1 flex cursor-pointer justify-center align-middle"
      >
        LOG IN WITH SPOTIFY
      </a>
    );
  };

  const handleClick = () => {
    if (query.length >= MIN_SEARCH_LENGTH) {
      try {
        let url =
          "https://api.spotify.com/v1/search?q=" + query + "&type=track,artist";
        axios
          .get(url, {
            headers: {
              Authorization: "Bearer " + access_token,
            },
          })
          .then((res) => {
            set_tracks(res.data.tracks.items);
          });
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    const debouncedHandleClick = debounce(handleClick, 500); // Debounce the handleClick function

    // Use useEffect to trigger the search whenever the query changes
    debouncedHandleClick();
  }, [query]);

  function getHashParams() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    let params = getHashParams();
    let token = params.access_token;
    set_access_token(token);
  }, []);

  return (
    <div className="bg-dark_main min-h-screen p-5">
      <LoginButton /> {/* Add the LoginButton component */}
      <input
        onChange={(event) => {
          set_query(event.target.value);
        }}
        value={query}
        type="text"
        className="bg-white px-2 py-1 rounded-bl rounded-tl w-80 mb-3"
        placeholder="Type anything..."
      />
      <button
        onClick={() => {
          handleClick();
        }}
        className="bg-spotify_main hover:bg-gray-600 px-2 py-1 mb-3 text-white rounded-br rounded-tr"
      >
        <i className="fa fa-search"></i>
      </button>

      <div className="mt-5 flex flex-wrap">
        {tracks.map((item) => {
          return (
            <div
              key={item.album.id}
              className="bg-spotify_card px-5 py-5 rounded w-1/5 mr-4 mb-4 cursor-pointer hover:bg-spotify_card_hover"
            >
              <img
                src={item.album.images[0].url}
                title={item.album.name}
                alt={item.album.name}
                className="object-cover rounded h-40 w-full"
              />
              <p className="text-base mt-2 mb-1 font-bold text-gray-100">
                {item.name}
              </p>
              <div className="">
                <p className="text-sm text-gray-300">
                  {item.album.artists[0].name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
