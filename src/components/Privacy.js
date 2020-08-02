import React from 'react';
import { Link } from 'react-router-dom';
import MegHeader from './MegHeader';
import PrivacyText from './PrivacyText';
import { EulaContainer, EulaHeader, EulaButton, EulaButtonContainer, EulaFadeContainer } from '../styles/components';

function Privacy() {
  return (
    <EulaContainer>
      <MegHeader />
      <EulaHeader>Privacy Policy for Eyecue Lab and SimplePNL</EulaHeader>
      <PrivacyText />
      <EulaButtonContainer>
        <Link to="/">
          <EulaButton>Right on.</EulaButton>
        </Link>
      </EulaButtonContainer>
      <EulaFadeContainer />

      <style>
        {`

          .EulaButtonReady {
            font-size: 1rem;
            font-weight: 500;
          }

          .EulaButtonGo {
            font-size: 1rem;
            font-weight: 800;
          }

          `}
      </style>
    </EulaContainer>
  );
}

export default Privacy;
