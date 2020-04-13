import React from "react";
import { connect } from "react-redux";
import { MainContainer } from '../styles/components';
// import { Link } from 'react-router-dom';
import MegHeader from "./MegHeader";
import OAuth from "./OAuth";

function Home({ currentUser }) {
  const homeTitle = {
    paddingTop: "50px",
    paddingBottom: "10px",
    fontSize: "25px",
    textAlign: "center",
  };

  const homeText = {
    paddingRight: "30px",
    paddingLeft: "30px",
    fontSize: "18px",
    textAlign: "center",
  };

  const signIn = {
    textAlign: 'center'
  }

  return (
    <MainContainer>
      <MegHeader />
      <h1 style={homeTitle}>
        {" "}
        {currentUser ? `Welcome back, ${currentUser}!` : "Hello there!"}{" "}
      </h1>
      <p style={homeText}>
        {`
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

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Home);
