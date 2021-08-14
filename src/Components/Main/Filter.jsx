import React from 'react';
import { useState } from 'react';
import "./Filter.style.css";

function Filter() {
   // const [sort, setSort] = useState()
   const [showSort, setShowSort] = useState(false);
   const [showFilter, setShowFilter] = useState(false);
   return (
      <div className={"flex gap-2 px-4 mb-2 sm:px-10"}>
         <button className={`py-1 px-2 rounded-md bg-gray-300 text-gray-700`} onClick={() => setShowFilter(true)}>
            فیلتر
            <i className={"bi bi-funnel pr-2"} />
         </button>

         <div className={`fixed top-32 inset-x-4 bottom-4 bg-white rounded-xl shadow-3xl flex flex-col items-stretch z-40 overflow-hidden ${showFilter ? 'block' : 'hidden'} sm:top-36 sm:flex-row lg:hidden`}>
            {/* filter header */}
            <div className={"p-3 border-b border-gray-300 sm:p-4"}>
               <button className={"text-xl"} onClick={() => setShowFilter(false)}><i className={"bi bi-x-lg"} /></button>
            </div>
            {/* filter body */}
            <div className={"flex-1 overflow-y-auto overflow-x-hidden overscroll-y-none sm:m-4"}>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, totam tempore assumenda iste explicabo quo nulla sapiente nobis cum nostrum velit impedit, voluptate architecto quos nemo, sint alias quas voluptates.
               Ad error itaque recusandae voluptates, velit accusamus tempore minima. Quas tempore sequi dolorem cum velit quam ea sit dolore earum. Tempora quaerat dolores veniam tenetur quae porro mollitia, ipsam nesciunt!
               Eaque dolorem eius omnis sequi nam quidem delectus possimus sit architecto neque, quis reiciendis exercitationem tempora hic minima nobis? Eveniet nihil cum ipsa. Autem ipsa rerum fugit sunt molestiae voluptas.
               Quidem mollitia optio similique placeat deleniti deserunt voluptate est asperiores, sed ea velit obcaecati facere corrupti impedit officia sapiente reiciendis error? Esse, velit a natus accusantium aperiam expedita praesentium dignissimos!
               Nostrum ipsa id inventore, provident voluptatem rerum necessitatibus perferendis veniam porro aliquid dignissimos minima qui, repellendus aut iusto voluptates cumque eum cum ea laborum officia. Reprehenderit ad voluptatum corporis qui?
               Praesentium quis autem fuga hic cumque sed numquam neque aut repellat! Labore magnam quisquam unde assumenda distinctio quidem modi porro sed saepe autem. Sapiente quis velit est amet, quos odit!
               Neque nemo consequuntur dicta? Aliquid architecto expedita harum mollitia. Id temporibus inventore pariatur quaerat exercitationem nulla beatae repellendus corrupti maiores necessitatibus molestiae at ratione sed libero perferendis et, vero ut.
               Odio, accusantium minus voluptas rerum molestias ut dignissimos ex nam blanditiis necessitatibus sint sit animi deserunt? Omnis sit porro, obcaecati corporis ipsa rem provident suscipit officia quis neque voluptates recusandae?
               Reiciendis tempore, harum laboriosam architecto, eligendi porro dignissimos enim autem repellat dicta alias perferendis eum aliquid. Aperiam quos reiciendis culpa aut blanditiis qui, pariatur optio dicta a at quis minus.
               Enim dignissimos, quia voluptas repellat excepturi consectetur! Vel amet ducimus reprehenderit cum sequi quis sunt quisquam labore delectus similique! Velit accusamus aliquid repellendus suscipit ex. Esse dolorem quibusdam omnis tempore.
               Optio molestias quod corporis rerum fugiat autem esse dolores earum ipsum necessitatibus totam sequi porro voluptates, pariatur magni tenetur incidunt officiis hic! Eligendi aliquid in eaque vero suscipit eos est!
               Ipsa voluptas ex minus ratione, ducimus, rem officia odio dicta consequatur provident eaque ullam a vitae! Ullam commodi libero, eligendi pariatur nulla harum reprehenderit laborum eum cumque aliquid officia dolorem.
               Dolorem aperiam animi quos libero fugit deserunt delectus ratione inventore consectetur. Ipsam incidunt laboriosam dolores debitis iure placeat facere voluptatum earum reprehenderit laborum voluptate officiis recusandae, quis enim, autem odit.
               Eaque repellendus reiciendis labore, sequi iusto, sit quia dicta eveniet ducimus aspernatur perferendis! Quaerat quisquam eius possimus consequatur tempore earum, dolor reiciendis quam laborum mollitia deserunt provident? Nisi, maxime doloremque?
               Sunt expedita, voluptatum voluptas tempora incidunt saepe vel, ex similique, cumque dolorem placeat? Placeat accusantium nihil vitae et id! Impedit dolores aperiam iusto consectetur nemo. Rem praesentium et similique in.
               Repellat ducimus ex alias architecto praesentium? Ea, soluta, quisquam fuga inventore harum distinctio, quia nam quae doloremque magnam rem adipisci sunt qui alias maxime sit vel reprehenderit animi accusantium ipsam!
               Minima quam sequi explicabo ducimus! Ducimus aperiam vero corporis cupiditate magnam blanditiis quidem voluptatum commodi sequi aut corrupti cumque tempora modi, aspernatur molestias illum aliquam fugit assumenda quam animi? Sit.
               Inventore consequatur, dolorum nobis modi asperiores assumenda ipsum, architecto officia molestiae quis dolor ullam suscipit hic rem non. Aliquid cupiditate nisi asperiores, perferendis dolores aut suscipit molestiae doloribus repellat ad?
               Enim obcaecati magni nam, in laboriosam tenetur minus similique vitae consectetur est eos id, ipsa reiciendis! Nulla obcaecati quibusdam sed in eaque, impedit, quam praesentium, magnam fuga eius fugiat mollitia.
               Quam asperiores ab officia mollitia exercitationem sequi corrupti nihil maiores incidunt. Ipsam placeat deserunt facere. Eos nobis vitae minus sit omnis, pariatur, beatae culpa nesciunt tenetur corrupti eum asperiores! Sequi!
               Molestias quas, cum corrupti vitae doloribus omnis accusamus quidem eveniet ullam enim perferendis facilis voluptatum quasi. Atque iste quo rem eum nulla delectus esse! Nobis amet rerum dolores qui. Quod.
               Laudantium tempora numquam debitis nesciunt hic at omnis, quibusdam inventore et cum atque ullam est quis earum, illum voluptatibus consequuntur alias possimus, tempore dolor. Ab veritatis delectus autem veniam necessitatibus?
               Quo soluta veritatis dignissimos tempore perspiciatis natus excepturi cum officia et. Magni distinctio, delectus voluptatem harum corporis obcaecati. Enim fugit, soluta repellat illo eius libero corporis nulla dolor voluptatibus? Eum!
               Explicabo praesentium tempora officia maxime, recusandae facilis. Unde ex, eveniet iure quod sed aliquam perspiciatis repellendus voluptatibus, facere obcaecati consequuntur totam autem facilis blanditiis iste cupiditate omnis ut exercitationem deleniti.
               Expedita officiis dolorum a accusantium? Ipsum voluptatum non quam at fugiat maiores distinctio obcaecati, nesciunt exercitationem molestiae aperiam vel voluptates beatae culpa! Debitis reprehenderit nam velit dignissimos delectus quaerat omnis!
               Vero nam facilis placeat quod cumque vitae earum cum corporis! Temporibus asperiores, laborum mollitia cum facilis repellat incidunt magni voluptatum nam quasi? Unde autem eum doloremque veritatis sequi. Sequi, suscipit!
               Placeat a beatae, iusto accusamus cupiditate dolor deleniti, numquam nostrum rem pariatur provident fugiat voluptas illo dolorem in atque dolores unde. Illo voluptatum labore tempora laudantium consectetur dolorem eligendi similique.
               Quam eum officia quas illo doloremque omnis? Laboriosam eum saepe accusantium blanditiis necessitatibus tempore earum tempora facilis temporibus sed laborum, voluptatibus aspernatur molestiae quaerat assumenda at dolorum amet id excepturi.
               Praesentium nemo adipisci ut numquam ab aspernatur, iusto accusantium veritatis explicabo voluptatibus. Possimus ea temporibus quaerat corporis voluptates sit, sapiente cupiditate vitae non debitis error eos, architecto ut vel. Quaerat?
               Doloribus, totam dolorem. Iure fugiat cum repudiandae ad nihil minus commodi nesciunt eveniet sit possimus nulla atque quo voluptatum soluta odit laborum in fugit aliquam, modi excepturi laboriosam cumque! Perferendis.
            </div>
            {/* filter footer */}
            <button className={"filter-btn p-3 bg-blue-600 text-blue-100 font-medium "}>اعمال فیلترها</button>
         </div>

         <div className={"rounded-md bg-gray-300 text-gray-700 relative"}>
            <button className={"py-1 px-2"} onClick={() => setShowSort(!showSort)}>
               پربازدید ترین
               <i className={"bi bi-sort-down pr-2"} />
            </button>
            <div className={`absolute top-full right-0 z-30 w-40 rounded-md py-3 bg-white shadow-lg ${showSort ? "block" : "hidden"}`}>
               <button className={"w-full text-right px-4 py-2 border-t flex justify-between hover:bg-gray-100"}>
                  پربازدید ترین
                  <i className={"bi bi-check2"} />
               </button>
               <button className={"w-full text-right px-4 py-2 border-t flex justify-between hover:bg-gray-100"}>
                  محبوب ترین
                  <i className={"bi bi-check hidden"} />
               </button>
               <button className={"w-full text-right px-4 py-2 border-t flex justify-between hover:bg-gray-100"}>
                  ارزان ترین
                  <i className={"bi bi-check hidden"} />
               </button>
               <button className={"w-full text-right px-4 py-2 border-t flex justify-between hover:bg-gray-100"}>
                  گران ترین
                  <i className={"bi bi-check hidden"} />
               </button>
               <button className={"w-full text-right px-4 py-2 border-t flex justify-between hover:bg-gray-100"}>
                  پرفروش ترین
                  <i className={"bi bi-check hidden"} />
               </button>
               <button className={"w-full text-right px-4 py-2 border-t border-b flex justify-between hover:bg-gray-100"}>
                  مرتبط ترین
                  <i className={"bi bi-check hidden"} />
               </button>
            </div>
         </div>
      </div>
   );
}

export default Filter;
