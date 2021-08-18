import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SideFilter() {
  /* ----------------------------- Show Box States ---------------------------- */
  const [showBrand, setShowBrand] = useState(true);

  /* ------------------------------- Search Box ------------------------------- */
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  function handleChangeSearchValue(e) {
    let txt = e.target.value;
    setSearchValue(txt);
  }
  useEffect(() => {
    setSearchIsActive(searchValue.length > 0);
  }, [searchValue]);
  /* ------------------------------- Search Box ------------------------------- */
  const [brandSearchIsActive, setBrandSearchIsActive] = useState(false);
  const [brandSearchValue, setBrandSearchValue] = useState("");
  function handleChangeBrandSearchValue(e) {
    let txt = e.target.value;
    setBrandSearchValue(txt);
  }
  useEffect(() => {
    setBrandSearchIsActive(brandSearchValue.length > 0);
  }, [brandSearchValue]);

  return (
    <>
      {/* ------------------------------ Products Tree ----------------------------- */}
      <div className="px-3 py-1">
        <div className={"flex flex-col items-stretch bg-white rounded-md shadow-lg p-4"}>
          <h3 className={"font-medium"} >دسته بندی نتایج:</h3>
          <hr className={"my-2"} />

          <div className="text-sm leading-7">
            {/* deep  0 */}
            <div className="show-box flex pr-2">
              <i className={"bi bi-chevron-left"} />
              <div className="item flex flex-col">
                <Link to={"/products?category=vehicle"}>خودرو، ابزار و تجهیزات صنعتی</Link>
                <div className="show-box flex pr-2">
                  {/* deep  1 */}
                  <i className={"bi bi-chevron-left"} />
                  <div className="item flex flex-col">
                    <Link to={"/products?category=vehicle-accessory-parts"}>لوازم جانبی خودرو</Link>
                    <div className="show-box flex pr-2">
                      {/* deep  2 */}
                      <i className={"bi bi-chevron-left"} />
                      <div className="item flex flex-col">
                        {/* <Link to={"/products?category=in-car-accessories"}>لوازم تزیینی خودرو</Link> */}
                        <div className={"font-bold"} to={"/products?category=in-car-accessories"}>لوازم تزیینی خودرو</div>
                        <Link to={"/products?category=car-chair-covers"}>روکش صندلی خودرو</Link>
                        <Link to={"/products?category=car-coating"}>کفپوش خودرو</Link>
                        <Link to={"/products?category=car-trunk-coating"}>کفپوش صندوق خودرو</Link>
                        <Link to={"/products?category=car-dashboard-cover"}>روکش و تزئینات داشبورد خودرو</Link>
                        <Link to={"/products?category=head-gear"}>سر دنده</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------- Search Box ------------------------------- */}
      <div className="px-3 py-1">
        <div className={"flex flex-col items-stretch bg-white rounded-md shadow-lg p-4"}>
          <h3 className={"font-medium"}>جستجو در نتایج:</h3>
          <hr className={"my-2"} />
          <div className={"relative"}>
            <input className={"w-full h-full bg-gray-100 py-2 px-7 border outline-none rounded focus-within:ring-4 focus-within:ring-blue-300"}
              type="text" value={searchValue} onChange={handleChangeSearchValue} />
            <i className={"absolute transform -translate-y-1/2 top-1/2 right-2 bi-search"} />
            <button className={"absolute transform -translate-y-1/2 top-1/2 left-2 bi-x-circle-fill text-sm focus:animate-pulse" + (searchIsActive ? " block " : " hidden ")} onClick={() => setSearchValue('')} />
          </div>
        </div>
      </div>

      {/* --------------------------------- Brands --------------------------------- */}
      <div className="px-3 py-1">
        <div className={"flex flex-col items-stretch bg-white rounded-md shadow-lg p-4"}>
          <div className="flex justify-between cursor-pointer" onClick={() => setShowBrand(!showBrand)}>
            <h3 className={"font-medium"}>برند</h3>
            <i className={"bi bi-chevron-down " +(showBrand?'':" transform rotate-180 ")} />
          </div>
          <div className={"overflow-hidden flex flex-col items-stretch" + (showBrand ? " max-h-80 " : " max-h-0 ")} >
            <hr className={"my-2"} />
            {/* search box */}
            <div className={"relative p-1"}>
              <input className={"w-full h-full bg-gray-100 py-1 px-6 border outline-none rounded focus-within:ring-4 focus-within:ring-blue-300"}
                type="text" value={brandSearchValue} onChange={handleChangeBrandSearchValue} />
              <i className={"absolute transform -translate-y-1/2 top-1/2 right-2 bi-search"} />
              <button className={"absolute transform -translate-y-1/2 top-1/2 left-2 bi-x-circle-fill text-sm focus:animate-pulse" + (brandSearchIsActive ? " block " : " hidden ")} onClick={() => setBrandSearchValue('')} />
            </div>
            {/* brands list */}
            <div className={"overflow-y-auto overscroll-y-contain flex-1 border-0.5 rounded-md"}>

              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>
              <label className={"flex items-center py-2 px-3 border-b-0.5"}>
                <input className={"ml-3 rounded text-green-700"} type="checkbox" />
                <div className="flex-1 flex items-center justify-between">
                  <span className={"font-bold"}>هایکو</span><span className={"font-light text-sm text-gray-500"}>hyco</span>
                </div>
              </label>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideFilter;
