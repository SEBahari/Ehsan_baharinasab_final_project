import React from "react";
import "./Incredible.style.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Incredible( { bgc } ) {
  return (
    <>
      <div className={"a-incredible " + bgc}>
        {/* <h3 className={"a-incredible__title"} >اسپانسر&zwnj;های ما</h3> */}
        <div className={"a-incredible__row"}>
          <div className={"a-incredible__title-container"}>
            <Link to={"/"} className={"a-incredible__title"}>
              تخفیفات باور نکردنی
              <i className={"bi bi-chevron-compact-left"}/>
            </Link>
          </div>
          <div className={" a-incredible__item"}>
            <div className={"a-incredible__card"}>
              <div className={"a-incredible__card-image"}>
                <img src={"https://i.pravatar.cc/100?u={" + makeId()} alt={"lorem picsum"}/>
              </div>
              <div className={"a-incredible__card-body"}>
                <div className={"a-incredible__card-title"}>عنوان</div>
                <p className={"a-incredible__card-text"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                </p>
                <div className={"a-incredible__card-footer"}>
                  <button className={"btn py-0"}>
                    <i className={"bi bi-cart-plus"}/>
                  </button>
                  <Button variant={"primary"}>مشاهده</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={" a-incredible__item"}>
            <div className={"a-incredible__card"}>
              <div className={"a-incredible__card-image"}>
                <img src={"https://i.pravatar.cc/100?u={" + makeId()} alt={"lorem picsum"}/>
              </div>
              <div className={"a-incredible__card-body"}>
                <div className={"a-incredible__card-title"}>عنوان</div>
                <p className={"a-incredible__card-text"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                </p>
                <div className={"a-incredible__card-footer"}>
                  <button className={"btn py-0"}>
                    <i className={"bi bi-cart-plus"}/>
                  </button>
                  <Button variant={"primary"}>مشاهده</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={" a-incredible__item"}>
            <div className={"a-incredible__card"}>
              <div className={"a-incredible__card-image"}>
                <img src={"https://i.pravatar.cc/100?u={" + makeId()} alt={"lorem picsum"}/>
              </div>
              <div className={"a-incredible__card-body"}>
                <div className={"a-incredible__card-title"}>عنوان</div>
                <p className={"a-incredible__card-text"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                </p>
                <div className={"a-incredible__card-footer"}>
                  <button className={"btn py-0"}>
                    <i className={"bi bi-cart-plus"}/>
                  </button>
                  <Button variant={"primary"}>مشاهده</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={" a-incredible__item"}>
            <div className={"a-incredible__card"}>
              <div className={"a-incredible__card-image"}>
                <img src={"https://i.pravatar.cc/100?u={" + makeId()} alt={"lorem picsum"}/>
              </div>
              <div className={"a-incredible__card-body"}>
                <div className={"a-incredible__card-title"}>عنوان</div>
                <p className={"a-incredible__card-text"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                </p>
                <div className={"a-incredible__card-footer"}>
                  <button className={"btn py-0"}>
                    <i className={"bi bi-cart-plus"}/>
                  </button>
                  <Button variant={"primary"}>مشاهده</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={" a-incredible__item"}>
            <div className={"a-incredible__card"}>
              <div className={"a-incredible__card-image"}>
                <img src={"https://i.pravatar.cc/100?u={" + makeId()} alt={"lorem picsum"}/>
              </div>
              <div className={"a-incredible__card-body"}>
                <div className={"a-incredible__card-title"}>عنوان</div>
                <p className={"a-incredible__card-text"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                </p>
                <div className={"a-incredible__card-footer"}>
                  <button className={"btn py-0"}>
                    <i className={"bi bi-cart-plus"}/>
                  </button>
                  <Button variant={"primary"}>مشاهده</Button>
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

function makeId() {
  let result = "";
  let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for ( let i = 0; i < 10; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}