import React from 'react';
import MegIcon from './MegIcon';

function Help() {
  const helpContainer = {
    backgroundColor: '#F16879',
    height: '600px',
    borderRadius: '5px',
  };

  const helpTitle = {
    fontSize: '25px',
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    paddingTop: '80px'
  };
  
  const questionsContainer = {
    marginTop: '2rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    color: 'white',
    fontSize: '18px',
    fontWeight: '500'
  };

//   const questions = {
//     fontSize: '15px'
//   };

    return (
        <div style={helpContainer}>
            <MegIcon/>
            <h1 style={helpTitle}>Meg here. How can I help you?</h1>
            <div style={questionsContainer}>
                <ul>
                    <li>This feels super tedious. What's in it for me?</li>
                    <li>Why is my bank statement uploaded to Google Drive? Can't you just talk to my bank directly?</li>
                    <li>I have accounts with multiple banks, what can I do?</li>
                    <li>The categorizations seem super confusing, can you help me?</li>
                    <li>I need major help. How can I reach you directly?</li>
                </ul>
            </div>
        </div>
    );
}

export default Help;