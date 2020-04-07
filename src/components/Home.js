import React from 'react';
import GoogleSignIn from '../images/google-signin.png';
import ImMeg from './ImMeg';
// import { Link } from 'react-router-dom';

function Home(props) {
  const homeContainer = {
    backgroundColor: "white",
    height: "500px",
    borderRadius: "5px",
    textAlign: "center",
    width: "50%",
    marginTop: "80px",
    color: "#6B6B6B",
  };

  const homeTitle = {
    paddingTop: "20px",
    paddingBottom: "10px",
    fontSize: "25px",
    textAlign: "center",
  };

  const homeText = {
    paddingRight: "20px",
    paddingLeft: "20px",
    fontSize: "15px",
  };

  const googleImage = {
    width: "45%",
    paddingTop: "10px",
  };

  return (
    <div style={homeContainer} className='container'>
      <ImMeg/>
      <h1 style={homeTitle}>Welcome Back!</h1>
      <p style={homeText}>
        SIMPLEPNL is a simple tool designed for all of you gig slingers to
        quickly organize your bank statements into different categories. It's
        free to use and it can help you maximize your tax benefits!
      </p>
      <div>
        <img src={GoogleSignIn} style={googleImage} />
      </div>
    </div>
  );
}

export default Home;
