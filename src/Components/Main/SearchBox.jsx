import React from "react";
import "./SearchBox.style.css";

function SearchBox( {
                      visibility,
                      setVisibility,
                      setSearchValue,
                      searchValue,
                      handleChangeSearchValue,
                      searchIsActive,
                    } ) {
  return (
    <div className={`search__background ${visibility ? "shown" : ""}`}>
      <div className="search__box">
        <div className="search__input-container">
          <span className="search__icon">
            <i className={"bi bi-search"}/>
          </span>
          <input
            className={"search__input"}
            type="text"
            placeholder={"جستجو در کالاها..."}
            value={searchValue}
            onChange={handleChangeSearchValue}
          />
          <button className={"search__reset" + (searchIsActive ? " shown" : "")}
                  onClick={() => setSearchValue("")}>
            <i className={"bi bi-x-circle-fill"}/>
          </button>
        </div>
        <div className="search__result">
          {/*<div className="search__result-item">result 1</div>*/}
          {/*<div className="search__result-item">result 2</div>*/}
          {/*<div className="search__result-item">result 3</div>*/}
          {/*<div className="search__result-item">result 4</div>*/}
          {/*<div className="search__result-item">result 5</div>*/}
        </div>
      </div>
      <button className="search__close" onClick={() => setVisibility(false)}>
        <i className={"bi bi-x-lg"}/>
      </button>
    </div>
  );
}

export default SearchBox;