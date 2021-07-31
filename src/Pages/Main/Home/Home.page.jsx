import React from "react";
import "./Home.style.css";
import Banner from "../../../Components/Main/Banner";
import Incredible from "../../../Components/Main/Incredible";
import Sponsers from "../../../Components/Main/Sponsors";

export default function Home() {
  return (
    <>
      <Banner/>
      <Incredible bgc={"bg-danger"}/>
      <Sponsers/>
      <Incredible bgc={"bg-success"}/>
      <Sponsers/>
    </>
  );
}
