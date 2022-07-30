import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="1000" data-aos-anchor=".last">
      <div className='footer-copyright'>
        <span>Copyright &copy; Michael Czyż {new Date().getFullYear()}</span>
        <a className='footer-email' href="mailto:mike@czyz.icu" target="_blank" rel='noreferrer'>Mike@Czyz.icu</a>
      </div>
    </div>
  );
}

export default Footer;