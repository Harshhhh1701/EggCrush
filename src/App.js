import React, {useState,useEffect} from "react";
import Content from "./components/content";
import Dropdown from "./components/dropdown";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  const [isOpen,setIsOpen]=useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Hero/>
    <Content/>
    <Footer/>
    </>
   
   );
}

export default App;
