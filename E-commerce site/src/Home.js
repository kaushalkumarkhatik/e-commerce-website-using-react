import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js"
import Sdata from "./components/Sdata.js"
import Products from "./components/Products.js"
import Pdata from "./components/Pdata.js"
import Collection from "./components/Collection.js"
import Brand from "./components/Brand.js"
import Profile from "./components/Profile.js"
import ProfileData from "./components/ProfileData.js"
import Footer from "./components/Footer.js"
import Fdata from "./components/Fdata.js"



const Home = () => {
  return (
    <>
      <Navbar />
    
    {
      Sdata.map((val)=> {
        const {
          id, title, imgsrc, bgcolor
        } = val;
        return(
          <Card
            key={id}
            title={title}
            imgsrc={imgsrc}
            bgcolor={bgcolor}

            />
        );
      })}


    {
      Pdata.map((val)=> {
        const {
          id, pname, imgsrc, title
        } = val;
        return (
          <Products
            key={id}
            title={title}
            pname={pname}
            imgsrc={imgsrc}
            />
        );
      })} 
      
    <Collection />
    {
      ProfileData.map((val)=>{
        const {id,imgsrc}=val;
        return(
          <Profile 
          key={id}
          imgsrc={imgsrc}
          />
          )
      })
    }
  
    <Brand />
    {
      Fdata.map((val)=>{
        const {id,title,link1,link2,link3,link4,link5}=val;
        return(
           <Footer
            key={id}
            title={title}
            link1={link1}
            link2={link2}
            link3={link3}
            link4={link4}
            link5={link5}
         
            />
          )
      })
    }
    
   
    < />

  );
}


export default Home;