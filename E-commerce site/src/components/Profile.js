import React from 'react';

const Profile = (props) => {
  const {
    imgsrc
  } = props;
  return (
    <>
    <section className="section">
  <div className="test-center">
    <div className="test">
      <span>&ldquo;</span>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
        fugiat labore. Veritatis et omnis consequatur.
    </p>
      <div className="rating">
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bx-star"></i>
    </div>
      <div className="img-cover">
        <img src={imgsrc} alt="" />
    </div>
      <h4>Will Smith</h4>
    </div>
    </div>
    </section> < />

  );
}


export default Profile;