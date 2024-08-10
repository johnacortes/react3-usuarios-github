import { useState } from "react";

function SearchBar({ setUser, searchUserGithub, setUserData }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    searchUserGithub();
    setUserData();

    const input = document.querySelector(".input-search");
    input.value = "";
  };

  return (
    <div className="container-searchBar">
      <form onSubmit={handleSubmit}>
        <div
          className={`container-svg-input ${isFocused ? "focus-input" : ""}`}
        >
          <div onClick={handleSubmit} className="container-svg-search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="7" stroke="#97A3B6" strokeWidth="2" />
              <path
                d="M20 20L17 17"
                stroke="#97A3B6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <input
            onChange={handleChange}
            className="input-search"
            type="text"
            placeholder="username"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
