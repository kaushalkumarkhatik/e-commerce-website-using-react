import React from 'react';

const Products = (props) => {
  const {
    imgsrc,
    pname,title
  } = props;
  return (
    <>
    <section className="featured">
      <div className="title">
    <h1>{title}</h1>
    </div>
  <div className="product-center">
    <div className="product">
      <div className="product-header">
        <img src={imgsrc} alt="" />
        <ul className="icon">
          <span><i className="bx bx-heart"></i></span>
          <span><i className="bx bx-shopping-bag"></i></span>
          <span><i className="bx bx-search"></i></span>
      </ul>
      </div>
      <div className="product-footer">
        <a href="#">
          <h3>{pname}</h3>
        </a>
        <div className="rating">
          <span><i className="bx bxs-star"></i></span>
          <span><i className="bx bxs-star"></i></span>
          <span><i className="bx bxs-star"></i></span>
          <span><i className="bx bxs-star"></i></span>
          <span><i className="bx bx-star"></i></span>
        </div>
        <h4 className="price">$50</h4>
      </div>
      </div>
    </div>
    </section> < />

  );
}


export default Products;