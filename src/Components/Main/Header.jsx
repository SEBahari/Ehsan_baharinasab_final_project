import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
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
        <Container fluid className={"px-4"}>
          <div className={"t-header__row"}>
            {/* ------------------------------ Header Right ----------------------------- */}
            <div className={"t-header__right-side"}>
              {/* -------------------------------- Logo -------------------------------- */}
              <Link to={"/"} className={"t-header__logo"}>
                <i className={"bi bi-bag-check"}/>
              </Link>
              {/* ------------------------------ Search Box ----------------------------- */}
              <div className={"t-header__search"}>
                <div className={"t-search" + (searchIsActive ? " is-active" : "")}>
                  <div className={"t-search__icon"}>
                    <i className={"bi bi-search"}/>
                  </div>
                  <button
                    className={"t-search__reset"}
                    onClick={() => setSearchValue("")}
                  >
                    <i className={"bi bi-x-circle-fill"}/>
                  </button>
                  <input
                    className={"t-search__input"}
                    type={"search"}
                    placeholder={"جستجو در کالاها..."}
                    value={searchValue}
                    onChange={handleChangeSearchValue}
                  />
                </div>
              </div>
            </div>
            {/* ------------------------------ Header Left ------------------------------ */}
            <div className={"t-header__action"}>
              <Link to={"}/cart"} className={"t-action__btn"}>
                <i className={"bi bi-person"}/>
              </Link>
              <Link to={"}/cart"} className={"t-action__btn t-action__btn-cart"}>
                <i className={"bi bi-cart3"}/>
              </Link>
            </div>
          </div>
        </Container>
        {/* ---------------------------------- Navbar ---------------------------------- */}
        <nav className={"t-nav " + (!navShow && "not-shown")}>
          <Container fluid className={"px-4"}>
            <div className={"t-nav__row"}>
              {/* ----------------------- Navbar Right Side - Links ----------------------- */}
              <div className={"t-nav__right "}>
                <ul className={"t-nav-list"}>
                  <li className={"t-nav-list__item-container"}>
                    <span className={"t-nav-list__icon"}>
                      <i className={"bi bi-list"}/>
                    </span>
                    <Link to={"/"} className={"t-nav-list__item"}>دسته&zwnj;بندی کالاها</Link>
                    {/* <div className={"t-nav-list__sublist"}></div> */}
                  </li>
                  <li className={"t-nav-list__item-container"}>
                    <Link to={"/"} className={"t-nav-list__item"}>تخفیف ها</Link>
                  </li>
                  <li className={"t-nav-list__item-container"}>
                    <Link to={"/"} className={"t-nav-list__item"}>درباره ما</Link>
                  </li>
                  <li className={"t-nav-list__item-container"}>
                    <Link to={"/"} className={"t-nav-list__item"}>درباره من</Link>
                  </li>
                </ul>
              </div>
              {/* --------------------------- Navbar Left Side --------------------------- */}
              {/* <div className={"t-nav__left "}>
                        left
                     </div> */}
            </div>
          </Container>
        </nav>
      </header>
      <div className={"t-header__overlay"}/>
    </>
  );
};

export default Header;
