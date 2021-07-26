import React from 'react';




const Card = (props) => {
  const {title,bgcolor,imgsrc}=props;
  return (
    <>
    <section className="section">
      <div className="card-center">
    <div className="box" style={{background:bgcolor}}>
      <div className="dot">
        <div className="contant">
          <h2>{title}</h2><br />
          <h4>WORLDS BEST BRANDS</h4>
    </div>
    </div>
      <img src={imgsrc} alt="" />
    </div>
    </div>
    </section>
 < />

  );
}


export default Card;