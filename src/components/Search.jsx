import React from "react";
import style from "./search.module.css";

function Search({ userFilter, inputText }) {
  return (
    <div className={style.parent}>
      <input
        type="text"
        className={style.input}
        placeholder="Search by name or email"
        value={inputText}
        onChange={(event) => {
          userFilter(event);
        }}
      />
    </div>
  );
}

export default Search;
