import { Search } from "lucide-react";
import React from "react";

function SearchBar({ city, setCity, onSearch }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSearch(); // Trigger search when Enter is pressed
    }
  }

  return (
    <div className="flex items-center bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-2xl focus-within:ring-2 focus-within:ring-blue-500">
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg p-2 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onClick={onSearch}
        className="ml-3 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300"
      >
        <Search className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

export default SearchBar;
