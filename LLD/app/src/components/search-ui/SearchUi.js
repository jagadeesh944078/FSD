import React, { useEffect, useRef, useState } from "react";

const SearchUi = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});
  const controllerRef = useRef();

  useEffect(() => {
    // Debouncing
    const s = setTimeout(() => {
      fetchData();
    }, 200);
    return () => clearTimeout(s);
  }, [searchText]);

  const fetchData = async () => {
    // if cache has data send data from here
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    //if cache doesn't have data return from here
    try {
      const data = await fetch(
        "https://www.google.com/complete/search?client=firefox&&q=" +
          searchText,
        { signal }
      );
      const json = await data.json();
      cache[searchText] = json[1];
      setSearchResults(json[1]);
    } catch (error) {
      console.log("fetch request aborteed");
    }
  };

  return (
    <div className="m-10">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-96 focus:outline-none focus:ring-1 focus:ring-blue-500   "
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsResultVisible(true)}
        onBlur={() => setIsResultVisible(false)}
      />
      {searchResults.length > 1 && isResultVisible && (
        <ul className="border border-gray-300 w-96 rounded-lg shadow-lg">
          {searchResults.map((result) => (
            <li
              key={result}
              className="hover:bg-blue-500 hover:text-white p-2 cursor-pointer transition-colors"
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUi;
