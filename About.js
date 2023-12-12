import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


function About() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className="container" style={{display:'inline' , justifyContent:'center' , alignItems:'center'  }}>
      <h1 className="text-center mb-4" style={{ color: 'black' }}>About Us</h1>
      <p style={{ color: '#555' }}>
        Welcome to our online store! We are passionate about providing high-quality products and an exceptional
        shopping experience to our customers.
      </p>
      <p style={{ color: '#555' }}>
        Our mission is to offer a wide range of products that cater to various needs and preferences. Whether you're
        looking for the latest fashion trends, electronics, home essentials, or more, we've got you covered.
      </p>
      <p style={{ color: '#555' }}>
        With a commitment to customer satisfaction, we strive to make your online shopping experience seamless and
        enjoyable. If you have any questions or feedback, feel free to contact us. Thank you for choosing us for your
        shopping needs!
      </p>
      <div className="text-center mt-4">
        <Link className="glow-on-hover" to='/ContactUs' style={{ backgroundColor: 'balck', color: 'balck',  border: 'solid black 2px', padding: '10px 20px', cursor: 'pointer', transition: 'background-color 0.3s', textDecoration:'none' , fontFamily:'-moz-initial' }}>
          Contact Us
        </Link>
      </div>
    </div>
    </>
    
  );
}

export default About;
