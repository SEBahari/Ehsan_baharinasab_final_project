import React from 'react';
import './Home.style.css';
import Baner from '../../../Components/Main/Baner';
import Incredible from '../../../Components/Main/Incredible';
import Sponsers from '../../../Components/Main/Sponsers';

export default function Home() {
   return (
      <>
         <Baner />
         <Incredible bgc={'bg-danger'} />
         <Sponsers />
         <Incredible bgc={'bg-success'} />
         <Sponsers />
      </>
   );
}
