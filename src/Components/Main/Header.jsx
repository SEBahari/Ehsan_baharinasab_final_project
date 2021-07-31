import React, { useState } from 'react';
import { Container, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { MdDehaze, MdHighlightOff, MdSearch } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import './Header.style.css';
import { useEffect } from 'react';

function Header() {
   const [navShow, setNavShow] = useState(true);
   const [searchIsActive, setSearchIsActive] = useState(false);
   const [searchValue, setSearchValue] = useState('');
   const [yOffset, setYOffset] = useState(0);
   const [previousYOffset, setPreviousYOffset] = useState(0);

   window.onscroll = () => setYOffset(window.pageYOffset);
   useEffect(() => {
      setNavShow(previousYOffset >= yOffset);
      setPreviousYOffset(yOffset);
   }, [yOffset]);

   function handleChange(e) {
      let txt = e.target.value;
      setSearchValue(txt);
   }
   useEffect(() => {
      setSearchIsActive(searchValue.length > 0);
   }, [searchValue]);

   return (
      <>
         <header className={"t-header"} >
            <Container fluid className={"px-4"}>
               <div className="t-header__row">
                  <div className="t-header__right-side">
                     <div className="t-header__logo">
                        <RiShoppingBag3Line color={"#2196f3"} size={52} />
                     </div>
                     <div className="t-header__search">
                        <div className={"t-search " + (searchIsActive && 'is-active')}>
                           <div className="t-search__icon">
                              <MdSearch size={28} />
                           </div>
                           <button
                              className="t-search__reset"
                              onClick={() => setSearchValue('')}
                           ><MdHighlightOff size={24} />
                           </button>
                           <FormControl
                              className={"t-search__input"}
                              type="search"
                              placeholder="جستجو در محصولات..."
                              value={searchValue}
                              onChange={handleChange}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="t-header__action">
                     <Link to={"/cart"} className="t-action__btn">
                        <BsPerson size={32} />
                     </Link>
                     <Link to={"/cart"} className="t-action__btn t-action__btn-cart">
                        <FiShoppingCart size={32} />
                     </Link>
                  </div>
               </div>
            </Container>
            <nav className={"t-nav " + (!navShow && 'not-shown')}>
               <Container fluid className={"px-4"}>
                  <div className="t-nav__row">
                     <div className="t-nav__right ">
                        <ul className={"t-nav-list"}>
                           <li className={"t-nav-list__item-container"}>
                              <span className="t-nav-list__icon"><MdDehaze size={16} /></span>
                              <a href={"/"} className={"t-nav-list__item"} >دسته&zwnj;بندی کالاها</a>
                              {/* <div className={"t-nav-list__sublist"}></div> */}
                           </li>
                           <li className={"t-nav-list__item-container"}>
                              <a href={"/"} className={"t-nav-list__item"}>تخفیف ها</a>
                           </li>
                           <li className={"t-nav-list__item-container"}>
                              <a href={"/"} className={"t-nav-list__item"}>درباره ما</a>
                           </li>
                           <li className={"t-nav-list__item-container"}>
                              <a href={"/"} className={"t-nav-list__item"}>درباره من</a>
                           </li>
                        </ul>
                     </div>
                     {/* <div className="t-nav__left ">
                        left
                     </div> */}
                  </div>
               </Container>
            </nav>
         </header>
         <div className="t-header__overlay" />
      </>
   );
};

export default Header;
