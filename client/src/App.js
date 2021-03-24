import { useLayoutEffect, useState, useRef } from 'react';
import './App.css';
import Layout from './screens/shared/Layout/Layout';
import Title from './screens/Title/Title';
import Services from "./screens/Services/Services"
import About from './screens/About/About';

function App() {
  const [visible, setVisible] = useState({ services: false, about: false });

  const refServices = useRef(null);
  const refAbout = useRef(null);

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;
    const servicesPosition = topPosition(refServices.current);
    const aboutPosition = topPosition(refAbout.current);
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (servicesPosition < scrollPosition && scrollPosition <= aboutPosition) {
        setVisible((prevState) => ({ ...prevState, services: true, about: false }));
      } else if (aboutPosition < scrollPosition) {
        setVisible((prevState) => ({ ...prevState, about: true}));
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  return (
    <Layout visibleAbout={visible.about}>
      <Title />
      <div ref={refServices}>
        <Services visible={visible.services}/>
      </div>
      <div ref={refAbout}>
        <About visible={visible.about}/>
      </div>
    </Layout>
  );
}

export default App;
