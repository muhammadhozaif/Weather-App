import { Search } from "lucide-react";
import React from "react";

function SearchBar({ city, setCity, onSearch }) {
  function handleKeyDown(e) {
    if ((e.key = "Enter")) {
      onSearch();
    }
  }
  return (
    <div className='className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl p-3 shadow-md"'>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
      />
      <button onClick={onSearch}>
        <Search className="w-5 h-5 text-white"></Search>
      </button>
    </div>
  );
}

export default SearchBar;
