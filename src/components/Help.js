// import React from 'react';
import React, { useState } from 'react';
import MegIcon from './MegIcon';
import { ExtraBold } from '../styles/components';


function Help() {
  const [helpDisplay, setHelpDisplay] = useState(false);


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
    paddingTop: '80px',
  };

  const questionsContainer = {
    marginTop: '2rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    color: 'white',
    fontSize: '18px',
    fontWeight: '500',
  };

  //   const questions = {
  //     fontSize: '15px'
  //   };

  return (
    <div style={helpContainer}>
      <MegIcon />

      <h1 style={helpTitle}>Meg here. How can I help you?</h1>
      <div style={questionsContainer}>
        <ul>
          <button
            className="buttonWrappingLi"
            onClick={() => setHelpDisplay('tedious')}
            type="button"
            onKeyPress={() => setHelpDisplay('tedious')}
          >
            <li className="liToHover">
              <ExtraBold>This feels super tedious. What&apos;s in it for me?</ExtraBold>
            </li>
          </button>

          { helpDisplay === 'tedious' ? (
            <ul>
              <li>
                Once you complete this three-step SimplePnL you will get a report
                that will provide a crystal clear picture of your finances to help
                guide your business plan. Your SimplePnL may even save you money on
                taxes by efficiently pooling all your business expenses and lowering
                your taxable income.
                <a href="https://www.mkbkllc.com/simple-pnl/">
                  Click here to learn how
                </a>.
              </li>
            </ul>
          ) : null }
          <button
            className="buttonWrappingLi"
            onClick={() => setHelpDisplay('googleDrive')}
            type="button"
            onKeyPress={() => setHelpDisplay('googleDrive')}
          >
            <li className="liToHover">
              <ExtraBold>Why is my bank statement uploaded to Google Drive? Can&apos;t
                you just talk to my bank directly?
              </ExtraBold>
            </li>
          </button>

          { helpDisplay === 'googleDrive' ? (
            <ul>
              <li>
                SimplePnL leverages user’s Google Drive to securely store user’s personal
                information without incurring additional cost. Google Drive supports
                two-factor authentication, metadata encryption and encryption of data
                in transit. In short, Google does a fairly good job at protecting
                your data from hackers. However, if you value a high level of privacy,
                Google Drive probably isn’t for you and you can access an excel version
                of this file <a href="https://www.mkbkllc.com/simple-pnl/">here</a>.
              </li>
            </ul>
          ) : null }
          <button
            className="buttonWrappingLi"
            onClick={() => setHelpDisplay('multipleBanks')}
            type="button"
            onKeyPress={() => setHelpDisplay('multipleBanks')}
          >
            <li className="liToHover">
              <ExtraBold>I have accounts with multiple banks, what can I do?</ExtraBold>
            </li>
          </button>

          { helpDisplay === 'multipleBanks' ? (
            <ul>
              <li>
                Start with one bank statement at a time. Once you finish the first,
                you&apos;ll be able to create additional reports and track them all.
                Right now, you might need to combine reports together on your own.
              </li>
            </ul>
          ) : null }
          <button
            className="buttonWrappingLi"
            onClick={() => setHelpDisplay('categorizations')}
            type="button"
            onKeyPress={() => setHelpDisplay('categorizations')}
          >
            <li className="liToHover">
              <ExtraBold>The categorizations seem super confusing, can you help me?</ExtraBold>
            </li>
          </button>

          { helpDisplay === 'categorizations' ? (
            <ul>
              <li>
                Check out
                <a href="https://www.mkbkllc.com/simple-pnl/">
                  this guide
                </a>
                to tax categories or
                <a href="https://www.mkbkllc.com/contact/">
                  click here
                </a>
                to reach out to me directly for support!
              </li>
            </ul>
          ) : null }
          <button
            className="buttonWrappingLi"
            onClick={() => setHelpDisplay('help')}
            type="button"
            onKeyPress={() => setHelpDisplay('help')}
          >
            <li className="liToHover">
              <ExtraBold>I need major help. How can I reach you directly?</ExtraBold>
            </li>
          </button>

          { helpDisplay === 'help' ? (
            <ul>
              <li>
                Email
                <a href="mailto:meg@mkbkllc.com">
                  meg@mkbkllc.com
                </a>
                with your questions directly or
                <a href="https://www.mkbkllc.com/contact/">
                  click here
                </a>
                to schedule an appointment!
              </li>
            </ul>
          ) : null }
        </ul>
      </div>
      <style>
        {
          `
          .buttonWrappingLi {
            background-color: rgba(233, 245, 251, 0);
            border-radius: 20px;
            border: none;
            width: 100%;
            color: white;
            text-align: left;
          }

          .liToHover:hover {
            background-color: rgba(233, 245, 251, .05);
            border-radius: 20px;
            cursor: pointer;
            animation: div_animation_effect 2s linear 3s infinite alternate;
          }

          @keyframes div_animation_effect {
            0%  { opacity: 1; }
            50%  { opacity: .9; padding-left: 20px; background-color: rgba(233, 245, 251, .1);}
            100%  { opacity: 1; }
          }


          `
        }
      </style>
    </div>
  );
}

export default Help;
