import React from 'react';
// import GoogleSignIn from '../images/google-signin.png';
import MegHeader from './MegHeader';
import { Link } from 'react-router-dom';
import OAuth from './OAuth';

function Home() {
  const homeContainer = {
    backgroundColor: 'white',
    height: '500px',
    borderRadius: '5px',
    textAlign: 'center',
    color: '#6B6B6B',
  };

  const homeTitle = {
    paddingTop: '20px',
    paddingBottom: '10px',
    fontSize: '25px',
    textAlign: 'center',
  };

  const homeText = {
    paddingRight: '30px',
    paddingLeft: '30px',
    fontSize: '15px',
  };
  

  return (
    <div style={homeContainer}>
      <MegHeader />
      <h1 style={homeTitle}>Welcome Back!</h1>
      <p style={homeText}>{`
        SIMPLEPNL is a simple tool designed for all of you gig slingers to
        quickly organize your bank statements into different categories. It's
        free to use and it can help you maximize your tax benefits!`}
      </p>
      <div>
       <OAuth />
      </div>
    </div>
  );
}

export default Home;
