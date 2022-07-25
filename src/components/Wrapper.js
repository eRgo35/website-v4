import { useEffect } from 'react';

import Navbar from './Navbar';
import Hello from './Hello';
import Info from './Info';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Footer from './Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Wrapper = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })

  return (
    <div className="Wrapper">
      <Navbar />
      <Hello />
      <Info />
      <Projects />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default Wrapper;