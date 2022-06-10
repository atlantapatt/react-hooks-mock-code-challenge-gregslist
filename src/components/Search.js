import React, {useState} from "react";

function Search({onSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch)
  }
const [currentSearch, setCurrentSerch] = useState("")
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currentSearch}
        onChange={(e) => setCurrentSerch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
