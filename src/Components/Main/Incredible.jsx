import React from 'react';
import './Incredible.style.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdAddCircleOutline } from 'react-icons/md';

function Incredible({ bgc }) {
   return (
      <>
         <div className={"a-incredible " + bgc}>
            {/* <h3 className={"a-incredible__title"} >اسپانسر&zwnj;های ما</h3> */}
            <div className={"a-incredible__row"}>
               <div className="a-incredible__title-container">
                  <Link to={"/"} className="a-incredible__title">
                     تخفیفات باور نکردنی
                     <MdChevronLeft />
                  </Link>
               </div>
               <div className={" a-incredible__item"}>
                  <div className="a-incredible__card">
                     <div className="a-incredible__card-image">
                        <img src="https://picsum.photos/401/301" alt="lorem picsum" />
                     </div>
                     <div className="a-incredible__card-body">
                        <div className="a-incredible__card-title">عنوان</div>
                        <p className="a-incredible__card-text">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                        </p>
                        <div className="a-incredible__card-footer">
                           <button className={"btn"}><MdAddCircleOutline size={24} /></button>
                           <Button variant="primary">مشاهده</Button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={" a-incredible__item"}>
                  <div className="a-incredible__card">
                     <div className="a-incredible__card-image">
                        <img src="https://picsum.photos/402/302" alt="lorem picsum" />
                     </div>
                     <div className="a-incredible__card-body">
                        <div className="a-incredible__card-title">عنوان</div>
                        <p className="a-incredible__card-text">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                        </p>
                        <div className="a-incredible__card-footer">
                           <button className={"btn"}><MdAddCircleOutline size={24} /></button>
                           <Button variant="primary">مشاهده</Button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={" a-incredible__item"}>
                  <div className="a-incredible__card">
                     <div className="a-incredible__card-image">
                        <img src="https://picsum.photos/403/303" alt="lorem picsum" />
                     </div>
                     <div className="a-incredible__card-body">
                        <div className="a-incredible__card-title">عنوان</div>
                        <p className="a-incredible__card-text">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                        </p>
                        <div className="a-incredible__card-footer">
                           <button className={"btn"}><MdAddCircleOutline size={24} /></button>
                           <Button variant="primary">مشاهده</Button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={" a-incredible__item"}>
                  <div className="a-incredible__card">
                     <div className="a-incredible__card-image">
                        <img src="https://picsum.photos/404/304" alt="lorem picsum" />
                     </div>
                     <div className="a-incredible__card-body">
                        <div className="a-incredible__card-title">عنوان</div>
                        <p className="a-incredible__card-text">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                        </p>
                        <div className="a-incredible__card-footer">
                           <button className={"btn"}><MdAddCircleOutline size={24} /></button>
                           <Button variant="primary">مشاهده</Button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={" a-incredible__item"}>
                  <div className="a-incredible__card">
                     <div className="a-incredible__card-image">
                        <img src="https://picsum.photos/405/305" alt="lorem picsum" />
                     </div>
                     <div className="a-incredible__card-body">
                        <div className="a-incredible__card-title">عنوان</div>
                        <p className="a-incredible__card-text">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                        </p>
                        <div className="a-incredible__card-footer">
                           <button className={"btn"}><MdAddCircleOutline size={24} /></button>
                           <Button variant="primary">مشاهده</Button>
                        </div>
                     </div>
                  </div>
               </div>



            </div>
         </div>
      </>
   );
}

export default Incredible;
