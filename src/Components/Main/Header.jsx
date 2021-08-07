import React, { useEffect, useState } from "react";
import Logo from "../../images/Logo.png";
import "./Header.style.css";

function Header() {
  /* Navbar Functionality */
  const [ navShow, setNavShow ] = useState(true);
  const [ yOffset, setYOffset ] = useState(0);
  const [ previousYOffset, setPreviousYOffset ] = useState(0);
  window.onscroll = () => setYOffset(window.pageYOffset);
  useEffect(() => {
    setNavShow(previousYOffset >= yOffset);
    setPreviousYOffset(yOffset);
  }, [ yOffset ]);

  /* Handle Search Box Value */
  const [ searchIsActive, setSearchIsActive ] = useState(false);
  const [ searchValue, setSearchValue ] = useState("");

  function handleChangeSearchValue( e ) {
    let txt = e.target.value;
    setSearchValue(txt);
  }

  useEffect(() => {
    setSearchIsActive(searchValue.length > 0);
  }, [ searchValue ]);

  return (
    <>
      <header className={"t-header"}>
        <div className="t-header__row">
          <div className="t-header__logo-container">
            <img src={Logo} alt="logo" className="t-header__logo"/>
          </div>
          <div className="t-header__right">
            <div className="t-header__action">
              <button className={"t-header__action-btn"}>
                <i className={"bi bi-list"}/>
              </button>
            </div>
            {/*<div className="t-header__links">*/}
            {/*  */}
            {/*</div>*/}
          </div>
          <div className="t-header__left">
            <div className="t-header__action">
              <a
                href={"https://github.com/SEBahari"}
                target={"_blank"}
                rel={"noreferrer"}
                className={"t-header__action-a"}
                style={{ color: "#211f1f" }}
              ><i className={"bi bi-github"}/></a>
            </div>
            {/*<div className="t-header__links">*/}
            {/*  */}
            {/*</div>*/}
          </div>
        </div>
        <div className={"t-nav " + (navShow ? "" : "not-shown")}>
          <div className={"t-search" + (searchIsActive ? " is-active" : "")}>
            <div className="t-search__input-container">
              <input
                className="t-search__input"
                type={"text"}
                placeholder={"جستجو در کالاها..."}
                value={searchValue}
                onChange={handleChangeSearchValue}
              />
              <span className="t-search__icon">
                <i className={"bi bi-search"}/>
              </span>
              <button
                className="t-search__reset"
                onClick={() => setSearchValue("")}
              >
                <i className={"bi bi-x-circle-fill"}/>
              </button>
            </div>
            {/*<div className="t-search__resault"></div>*/}
          </div>
          <div className="t-header__action">
            <button className={"t-header__action-btn"}>
              <i className={"bi bi-cart3"}/>
            </button>
            <span className="t-header__action-badge">10</span>
          </div>
          <div className="t-header__action">
            <button className={"t-header__action-btn"}>
              <i className={"bi bi-person"}/>
            </button>
          </div>
        </div>
        <div className={"t-header__overlay"}>OVERLAY</div>
      </header>
    </>
  );
}

export default Header;
