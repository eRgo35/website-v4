import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import Info from './components/Info';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hello />
    <Info />
    <Projects />
    <Hobbies />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
