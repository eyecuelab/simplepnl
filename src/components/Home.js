import React from 'react';
import MegHeader from './MegHeader';
import { MainContainer } from '../styles/components.js';
// import { Link } from 'react-router-dom';
import OAuth from './OAuth';

function Home() {
  const signIn = {
    textAlign: 'center',
    color: '#6B6B6B',
    paddingTop: '20px'
  };

  const homeTitle = {
    paddingTop: '50px',
    paddingBottom: '10px',
    fontSize: '25px',
    textAlign: 'center',
  };

  const homeText = {
    paddingRight: '30px',
    paddingLeft: '30px',
    fontSize: '18px',
    textAlign: 'center',
  };
  

  return (
    <MainContainer>
      <MegHeader />
      <h1 style={homeTitle}>Welcome Back!</h1>
      <p style={homeText}>{`
        SIMPLEPNL is a simple tool designed for all of you gig slingers to
        quickly organize your bank statements into different categories. It's
        free to use and it can help you maximize your tax benefits!`}
      </p>
      <div style={signIn}>
       <OAuth />
      </div>
    </MainContainer>
  );
}

export default Home;
