import React from 'react';

const Footer = (props) => {
  const {
    title,
    link1,
    link2,
    link3,
    link4,
    link5
    
  } = props;
  return (
    <>
    <footer id="footer" class="section footer">
  <div className="footer-content">
    <div className="footer-center">
      <h3>{title}</h3>
       <a href="#">{link1}</a>
      <a href="#">{link2}</a>
      <a href="#">{link3}</a>
      <a href="#">{link4}</a>
      <a href="#">{link5}</a>
 
    </div>

      </div>
    </footer>
    < />

  );
}


export default Footer;