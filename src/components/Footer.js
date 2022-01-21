import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className='copyright'>
        <span>Copyright &copy; Michał Czyż {new Date().getFullYear()}</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;