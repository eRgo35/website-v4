import { useEffect } from 'react';
import '../styles/Hobbies.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hobbies = () => {
  useEffect(() => {
    console.log("mounted");

    AOS.init();
    AOS.refresh();
  })

  return (
    <div data-aos="fade-up" className="Hobbies">
      <p>Hobbies...</p>
    </div>
  );
}

export default Hobbies;