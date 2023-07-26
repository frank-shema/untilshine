import Navbar from "./components/navbar";
import Survive from "./components/survive";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Character from "./components/Character";
import Contact from "./components/Contact";
import Features from "./components/features";
import BothAboutAndLatest from "./components/BothAboutAndLatest";
import './App.css'

export default function App() {
  return (
    <div className="bg-[#0D0D0D] text-white w-full overflow-hidden">
      <Navbar/>
      <Survive/>
      <Features/>
      <Character/>
      <BothAboutAndLatest/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}
