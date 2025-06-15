import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/layout/Footer";
import Content from "./components/content/Content";
import { useEffect, useState } from "react";
import { Scrollbar } from "smooth-scrollbar-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (status) => {
    const scrollTop = status.offset?.y || 0;
    setIsScrolled(scrollTop > 0);
  };


  useEffect(()=>{
    console.log(isScrolled);
  }, [isScrolled]);

  return (
    <>
      
      
      <Navbar isScrolled={isScrolled} />
      <Scrollbar
        damping={0.1}
        continuousScrolling={true}
        alwaysShowTracks={true}
        className="scrollbar"
        style={{ height: "100vh", width: "100vw" }}
        renderByPixels={true}
        onScroll={handleScroll}
      >
        <Content />
        <Footer />
      </Scrollbar>
    </>
  );
}

export default App;
