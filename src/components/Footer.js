import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className='version'>
        <span>Michał Czyż</span>
        <span>Website v4.0</span>
      </div>
      <div className='copyright'>
        <span>Copyright &copy; Michał Czyż {new Date().getFullYear()}</span>
        <span>All rights reserved.</span>
      </div>
      <div className='email'>
        <span>You can drop me a line at</span>
        <span><a href="mailto:mike@czyz.icu" target="_blank" rel='noreferrer'>mike@czyz.icu</a></span>
      </div>
    </div>
  );
}

export default Footer;