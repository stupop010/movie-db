import React from "react";

const SearchForm = ({ onChange, onSubmit, onClick }) => {
  return (
    <div>
      <form>
        <label className="label">Search</label>
        <input
          className="search-input"
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </form>
      <button onClick={onClick}>fdjhbgksjlkd</button>
    </div>
  );
};

export default SearchForm;
