import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-copyright'>
        <span>Copyright &copy; Michał Czyż {new Date().getFullYear()}</span>
        <a className='footer-email' href="mailto:mike@czyz.icu" target="_blank" rel='noreferrer'>Mike@Czyz.icu</a>
      </div>
    </div>
  );
}

export default Footer;