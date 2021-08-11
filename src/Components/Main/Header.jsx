import React, { useEffect, useState } from "react";
import Logo from "../../images/Logo.png";
import "./Header.style.css";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

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

  /* Show Search Box*/
  const [ showSearch, setShowSearch ] = useState(false);

  /* Show overlay */
  const [overlay, setOverlay] = useState(false)

  return (
    <>
      <header className={"t-header"}>
        <div className="t-header__row">
          <div className="t-header__logo-container">
            <Link to={"/"}>
              <img src={Logo} alt="logo" className="t-header__logo"/>
            </Link>
          </div>
          <div className="t-header__right">
            <div className="t-header__action t-header__toggler">
              <button className={"t-header__action-btn"}>
                <i className={"bi bi-list"}/>
              </button>
            </div>
            <div className="t-header__links td-nav">
              <ul className="td-nav__list">
                <li
                  className="td-nav__item"
                  onMouseOver={()=>setOverlay(true)}
                  onMouseLeave={()=>setOverlay(false)}
                >
                  <Link to={"products"} className="td-nav__link">دسته&zwnj;بندی کالاها</Link>
                  <div className="td-nav__marker"/>
                  <div className="td-nav__result">
                    some results are here for دسته&zwnj;بندی کالاها.
                  </div>
                </li>
                <li
                  className="td-nav__item"
                  onMouseOver={()=>setOverlay(true)}
                  onMouseOut={()=>setOverlay(false)}
                >
                  <Link to={"products"} className="td-nav__link">تخفیف ها</Link>
                  <div className="td-nav__marker"/>
                  <div className="td-nav__result">
                    some results are here for تخفیف ها
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="t-header__left">
            <div className="t-header__action">
              <a
                href={"https://github.com/SEBahari"}
                target={"_blank"}
                rel={"noreferrer"}
                className={"t-header__action-a t-header__github-link"}
              ><i className={"bi bi-github"}/></a>
            </div>
            <div className="t-header__links td-nav">
              <ul className="td-nav__list">
                <li className="td-nav__item">
                  <button className="td-nav__btn" onClick={() => setShowSearch(true)}>
                    <i className={"bi bi-search"}/>
                  </button>
                </li>
                <li className="td-nav__item">
                  <Link to={"/login"} className="td-nav__link">ورود</Link>
                </li>
                <li className="td-nav__item">
                  <Link to={"/cart"} className="td-nav__link">سبد خرید(0)</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* mobile and tablet NavigationBar */}
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
        {overlay &&<div className={"t-header__overlay shown"}/>}
        <a href={"https://github.com/SEBahari/Ehsan_baharinasab_final_project"}
           className="github-link" target={"_blank"} rel={"noreferrer"}><i
          className={"bi bi-github"}/></a>
        <SearchBox
          visibility={showSearch}
          setVisibility={setShowSearch}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          handleChangeSearchValue={handleChangeSearchValue}
          searchIsActive={searchIsActive}
        />
      </header>
    </>
  );
}

export default Header;
