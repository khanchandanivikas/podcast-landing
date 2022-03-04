import "./scss/main.scss";
import { gsap } from "gsap";
import { useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

  useEffect(() => {
    timeline.to('.divider', { height: '5rem', duration: 1 });
    timeline.to('.intro-logo', { left: '38%', duration: 1 }, '-=.6');
    timeline.to('.intro-heading', { opacity: '1', left: '52.5%', duration: 1 }, '-=1');
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
    </div>
  );
}

export default App;
