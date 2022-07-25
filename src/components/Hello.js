import '../styles/Hello.css';

const Hello = () => {
  return (
    <>
      <div className='hello-bg'></div>
      <div data-aos="fade-in" data-aos-duration="1500" className="Hello" id="hello">
        <p>Hello, I'm Mike!</p>
      </div>
    </>
  );
}

export default Hello;