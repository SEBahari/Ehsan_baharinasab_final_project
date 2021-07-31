import React from 'react';
import './Home.style.css';
import Baner from '../../../Components/Main/Baner';
import Incredible from '../../../Components/Main/Incredible';

export default function Home() {
   return (
      <>
         <Baner />
         <Incredible bgc={'bg-danger'} />
      </>
   );
}
