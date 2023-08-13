import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoList = () => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state

  useEffect(() => {
    let apiUrl = "http://localhost:3000/api/videos";
    
    if (searchQuery) {
      apiUrl += `?search=${encodeURIComponent(searchQuery)}`;
    }

    axios
      .get(apiUrl)
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});

    // Remove setSearchQuery from here
  }, [searchQuery]);

  console.log(data);

  return (
    <>
      {/* Search */}
      <div className="relative max-w-sm mx-auto mb-10 mt-15">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="search"
          placeholder="Search"
          value={searchQuery} // Bind input value to searchQuery
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Card Video */}
      <div className="flex flex-wrap items-center justify-center p-1">
        {data !== null &&
          data.map((res) => {
            return (
              <Link
                to={`/${res.videoID}`}
                key={res._id}
                className="relative flex-shrink-0 max-w-xs m-6 overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative">
                  <img className="w-full" src={res.urlImageThumbnail} alt="" />
                  <span className="absolute bottom-0 left-0 p-4 text-xl font-semibold text-white">
                    {res.titleImageThumbnail}
                  </span>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default VideoList;
