import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import productImage1 from '../../../images/6x6-gornos-w.jpg';
import productImage2 from '../../../images/photo_۲۰۱۸-۰۴-۰۲_۱۳-۴۴-۴۹.jpg';
import productImage3 from '../../../images/93988803_907625239684186_2928864674942205986_n.jpg';
const slides = [
  { id: 1, image: productImage1, visible: true, alt: 'altOne' },
  { id: 2, image: productImage2, visible: false, alt: 'altThree' },
  { id: 3, image: productImage3, visible: false, alt: 'altTwo' },
];
const about = `
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
 `;

const parametrs = {
  "دسته اول": [
    { title: 'عنوان-1-1', body: 'مقدار-1-1' },
    { title: 'عنوان-1-2', body: 'مقدار-1-2' },
    { title: 'عنوان-1-3', body: 'مقدار-1-3' },
    { title: 'عنوان-1-4', body: 'مقدار-1-4' },
  ],
  "دسته دوم": [
    { title: 'عنوان-2-1', body: 'مقدار-2-1' },
    { title: 'عنوان-2-2', body: 'مقدار-2-2' },
    { title: 'عنوان-2-3', body: 'مقدار-2-3' },
  ],
  "دسته سوم": [
    { title: 'عنوان-3-1', body: 'مقدار-3-1' },
    { title: 'عنوان-3-2', body: 'مقدار-3-2' },
    { title: 'عنوان-3-3', body: 'مقدار-3-3' },
    { title: 'عنوان-3-4', body: 'مقدار-3-4' },
    { title: 'عنوان-3-5', body: 'مقدار-3-5' },
  ]
};


function Product() {
  const [popup, showPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupContent, setPopupContent] = useState('');

  const showAbout = () => {
    setPopupTitle('درباره کالا');
    setPopupContent(<p className={"text-gray-500 leading-relaxed"}>{about}</p>);
    showPopup(true);
  };
  const showParameters = () => {
    const content = Object.entries(parametrs).map((item, index) => (
      <div className={"mb-6"} key={index}>
        <h1 className={"text-xl font-bold"}>{item[0]}:</h1>
        <ul className={"pr-8"} >
          {
            item[1].map((item, index) => (
              <li className={""} key={index}>
                <span className={"w-1/3 inline-block text-gray-800 font-medium"}>{item.title}</span>
                <span className={"w-1/3 inline-block text-gray-500 font-medium"}>{item.body}</span>
              </li>
            ))
          }
        </ul>
      </div>
    ));
    setPopupTitle('مشخصات فنی کالا');
    setPopupContent(content);
    showPopup(true);
  };
  // const showSlide = (id) => {
  //   slides.map(slide=>slide.id==id?)
  // }
  const slideLeft = () => {
  };
  const slideRight = () => {
  };

  return (
    <div className={"pt-32 px-4 pb-3 container mx-auto relative"}>
      {/* ------------------------------ Bread Crumbs ------------------------------ */}
      <div className="bread-crumb">
        <div className={"flex items-end text-sm sm:px-10"}>
          <Link to={"/"}>خانه</Link>
          <i className={"bi bi-chevron-left mx-1 text-xs"} />
          <Link to={"/products"}>محصولات</Link>
          <i className={"bi bi-chevron-left mx-1 text-xs"} />
          <span>here</span>
        </div>
        <hr className={"my-1"} />
      </div>
      {/* --------------------------------- Product -------------------------------- */}
      <div className={"product"}>
        {/*  Preview  */}
        <div className={"bg-white rounded-xl p-3 flex flex-col items-stretch shadow-md mt-3"}>

          {/* Product Image */}
          <div className={"image-container flex flex-col items-stretch gap-4 "}>
            {/* --------------------------------- Actions -------------------------------- */}
            <div className={"flex justify-start text-gray-500 py-1"}>
              <button className={"font-bold mx-2"}><i className={"bi-heart"} /></button>
              <button className={"font-bold mx-2"}><i className={"bi-share"} /></button>
              <button className={"font-bold mx-2"}><i className={"bi-graph-up"} /></button>
              <button className={"font-bold mx-2"}><i className={"bi-bell"} /></button>
              <button className={"font-bold mx-2"}><i className={"bi-list-ul"} /></button>
            </div>
            {/* ---------------------------------- Image --------------------------------- */}
            <div className={"relative image h-52 w-60 mx-auto"}>
              {
                slides.map(({ id, image, visible, alt }) => (
                  <img className={`absolute w-full h-full object-contain object-center ${visible ? 'block' : 'hidden'}`} src={image} key={id} alt={alt} />
                ))
              }
              <button className="absolute transform -translate-y-1/2 top-1/2 -right-10 p-4 text-lg leading-none" onClickk={slideRight}><i className={"bi bi-chevron-right"} /></button>
              <button className="absolute transform -translate-y-1/2 top-1/2 -left-10 p-4 text-lg leading-none" onClickk={slideLeft}><i className={"bi bi-chevron-left"} /></button>
            </div>
            {/* ----------------------------- Slider Buttons ----------------------------- */}
            <div className={"slider w-full flex items-center justify-center gap-2"}>
              <button className={"rounded-full bg-gray-700 opacity-20 w-2 h-2"} />
              <button className={"rounded-full bg-gray-700 opacity-60 w-3 h-3"} />
              <button className={"rounded-full bg-gray-700 opacity-100 w-4 h-4"} />
              <button className={"rounded-full bg-gray-700 opacity-60 w-3 h-3"} />
              <button className={"rounded-full bg-gray-700 opacity-20 w-2 h-2"} />
            </div>
          </div>

          <hr className={"my-3"} />

          {/* title & price */}
          <div className={"flex justify-between items-center"} >
            {/* ---------------------------------- Title --------------------------------- */}
            <div className="title mb-2">
              <h1 className={""}>عنوان محصول</h1>
              <h2 className={""}>زیر عنوان</h2>
            </div>
            <div>
              {/* ---------------------------------- Price --------------------------------- */}
              <div className="price flex flex-col items-end px-3">
                <div className="flex text-sm font-medium sm:text-base">
                  <del className={"text-gray-600 line-through"}>100,000$</del>
                  <span className={"bg-red-600 text-red-50 py-px px-1 rounded-xl mr-1"}>10%</span>
                </div>
                <div className={"text-xl text-gray-900 sm:text-2xl"}>90,000$</div>
              </div>
            </div>
          </div>

        </div>

        {/*  Seller  */}
        <div className={"bg-white rounded-xl p-4 flex flex-col items-stretch shadow-md mt-3"}>
          {/* Seller Name */}
          <div className={"flex gap-4"}>
            <span className={"bi-shop text-gray-400 text-lg"} />
            <div className="flex-1">
              <div className="">فروشنده: {"عماد"}</div>
              <div className={"text-xs text-gray-500 font-medium"}>
                عملکرد: {"عالی"}
                <i className={"bi-check text-green-600"} />
              </div>
            </div>
          </div>
          <hr className={"my-3"} />
          {/* Garanti */}
          <div className={"flex gap-4"}>
            <span className={"bi-shield-check text-gray-400 text-lg"} />
            <div className="flex-1">
              <div>گارانتی اصالت و سلامت فیزیکی کالا</div>
            </div>
          </div>
        </div>

        {/*  Description  */}
        <div className={"bg-white rounded-xl p-4 flex flex-col items-stretch shadow-md mt-3"}>
          {/* About */}
          <div className={"p-2"} >
            {/* title */}
            <div className={"flex justify-between items-center mb-3"} >
              <h5>درباره کالا</h5>
              <button className={"text-xs p-2 text-blue-500 cursor-pointer"} onClick={showAbout} >
                بیشتر
                <i className={"bi-chevron-left"} />
              </button>
            </div>
            {/* body */}
            <p className={"text-gray-500"} >{about.substring(0, 180)}...</p>
          </div>

          <hr className={"my-2"} />

          {/* Moshakhasat Fani */}
          <div className={"p-2"} >
            {/* title */}
            <div className={"flex justify-between items-center mb-3"} >
              <h5>مشخصات فنی</h5>
              <button className={"text-xs p-2 text-blue-500 cursor-pointer"} onClick={showParameters} >
                بیشتر
                <i className={"bi-chevron-left"} />
              </button>
            </div>
            {/* body */}
            <div className={"text-gray-500"} >
              <h1 className={"text-xl font-bold"}>{Object.entries(parametrs)[0][0]}:</h1>
              <ul className={"pr-8"} >
                {
                  Object.entries(parametrs)[0][1].map((item, index) => (
                    <li className={""} key={index}>
                      <span className={"w-1/3 inline-block text-gray-800 font-medium"}>{item.title}</span>
                      <span className={"w-1/3 inline-block text-gray-500 font-medium"}>{item.body}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------- Comments -------------------------------- */}
      <div className={"header bg-white rounded-xl p-4 flex flex-col items-stretch shadow-md mt-3 relative"}>
        {/* title */}
        <div className={"flex justify-between items-center mb-3"} >
          <h5>نظرات</h5>
          <button className={"py-1 px-2 text-sm border border-blue-500 rounded-lg text-blue-500 shadow hover:bg-blue-50"} >
            افزودن نظر
            <i className={"bi-plus-lg mr-1"} />
          </button>
        </div>
        <hr className={"my-2"} />

        {/* List  */}
        <div className={"comment-list"} >
          <div className={"comment p-1 my-4 text-sm text-gray-800"}>
            <div className={"userName"}>احسان بهاری نسب</div>
            <div className={"date mb-1"}>9 تیر 1400</div>
            <div className={"text-gray-500"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </div>
          <div className={"comment p-1 my-4 text-sm text-gray-800"}>
            <div className={"userName"}>احسان بهاری نسب</div>
            <div className={"date mb-1"}>9 تیر 1400</div>
            <div className={"text-gray-500"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </div>
          <div className={"comment p-1 my-4 text-sm text-gray-800"}>
            <div className={"userName"}>احسان بهاری نسب</div>
            <div className={"date mb-1"}>9 تیر 1400</div>
            <div className={"text-gray-500"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </div>
          <div className={"comment p-1 my-4 text-sm text-gray-800"}>
            <div className={"userName"}>احسان بهاری نسب</div>
            <div className={"date mb-1"}>9 تیر 1400</div>
            <div className={"text-gray-500"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </div>
        </div>

        {/* Load More */}
        <button className={"pt-3 text-blue-500 border-t"} >مشاهده همه نظرات</button>
      </div>
      {/* ------------------------------- Add To Cart ------------------------------ */}
      <div className={"fixed inset-x-0 bottom-0 p-3 bg-red-50 shadow-inner"}>
        <button className={"bg-red-500 text-red-50 w-full p-3 rounded-md"} >افزودن به سبد خرید</button>
      </div>
      {/* --------------------------------- Pop Up} -------------------------------- */}
      <div className={`fixed top-32 inset-x-4 bottom-8 bg-white rounded-xl shadow-3xl border-2 border-blue-400 flex flex-col items-stretch z-40 overflow-hidden ${popup ? 'block' : 'hidden'} sm:top-32 lg:hidden`}>
        {/* filter header */}
        <div className={"p-3 border-b border-gray-300 flex gap-4 sm:p-4"}>
          <button className={"text-xl"} onClick={() => showPopup(false)}><i className={"bi bi-x-lg"} /></button>
          <h4>{popupTitle}</h4>
        </div>
        {/* filter body */}
        <div className={"flex-1 overflow-y-auto overflow-x-hidden overscroll-y-none p-6 sm:m-4"}>
          {popupContent}
        </div>
        {/* filter footer */}
        {/* <button className={"filter-btn p-3 bg-blue-600 text-blue-100 font-medium "}>اعمال فیلترها</button> */}
      </div>
    </div >
  );
}

export default Product;
