
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Survive from "./components/survive";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Character from "./components/Character";
import Contact from "./components/Contact";
import Features from "./components/features";
import BothAboutAndLatest from "./components/BothAboutAndLatest";
import './App.css'
import './index.css'

export default function App() {
  
  useEffect(() => {
    // Intersection Observer configuration
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    // Callback function for Intersection Observer
    const handleIntersection: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    };

    // Get all the elements with the "slide-in" class and observe them
    const slideInElements = document.querySelectorAll('.slide-in');
    const observer = new IntersectionObserver(handleIntersection, options);
    slideInElements.forEach((element) => observer.observe(element));

    // Clean up the Intersection Observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#0D0D0D] text-white w-full overflow-hidden">
      <Navbar />
      <div className="mx-[10vw] apart">
        <Survive />
        <Features />
        <Character />
        <BothAboutAndLatest />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
