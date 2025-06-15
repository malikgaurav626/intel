import "./App.css";
import Navbar from "./components/layout/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/layout/Footer";
import Content from "./components/Content";
import { Scrollbar } from "smooth-scrollbar-react";

function App() {
  return (
    <>
      <Scrollbar
        damping={0.1}
        continuousScrolling={true}
        alwaysShowTracks={true}
        className="scrollbar"
        style={{ height: "100vh", width: "100vw" }}
        renderByPixels={true}
      >
        <ThemeToggle />
        <Navbar />
        <Content />
        <Footer />
      </Scrollbar>
    </>
  );
}

export default App;
