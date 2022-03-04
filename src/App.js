import "./scss/main.scss";
import { gsap } from "gsap";
import { useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Podcast from "./components/Podcast";

function App() {
  const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
    timeline.to('.divider', { height: '5rem', duration: 1 });
    if (window.innerWidth > "1024") {
      timeline.to('.intro-logo', { left: '35%', duration: 1 }, '-=.6');
    }
    if (window.innerWidth < "1024" && window.innerWidth > "768") {
      timeline.to('.intro-logo', { left: '30%', duration: 1 }, '-=.6');
    }
    if (window.innerWidth < "768" && window.innerWidth > "481") {
      timeline.to('.intro-logo', { left: '22%', duration: 1 }, '-=.6');
    }
    if (window.innerWidth < "481") {
      timeline.to('.intro-logo', { left: '5%', duration: 1 }, '-=.6');
    }
    timeline.to('.intro-heading', { opacity: '1', left: '55%', duration: 1 }, '-=1');
    timeline.to('.intro-logo', { left: '51%', duration: 1, delay: 1 });
    timeline.to('.intro-heading', { opacity: '0', duration: 1 }, '-=1');
    timeline.to('.divider', { height: '0', duration: 0.5 });
    timeline.to('.loading-screen', { opacity: '0', duration: 0.5, delay: 0.25 });
    timeline.to('.loading-screen', { display: 'none' });
    timeline.to('body', { overflow: 'visible' });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <LoadingScreen />
      <Podcast />
    </div>
  );
}

export default App;
