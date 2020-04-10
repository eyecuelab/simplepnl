import React from 'react';
import styled, { css } from 'styled-components/macro';
// import PrimaryButton from 'components/Button/PrimaryButton';

const MainContainer = styled.div`
  background-color: #FFFFFF;
  height: 600px;
  border-radius: 5px;
  color: #6B6B6B;
`;

const Title = styled.h1`
  padding-left: 2rem;
  font-size: 25px;
  color: #ea475b;
  font-weight: 700;
`;

const ConfirmButton = styled.button`
  background: #ea475b;
  border-radius: 4px;
  color: #FFFFFF;;
  padding: 8px 60px;
  font-weight: 700;
`;

const NextButton = styled.button`
  background: #ea475b;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 8px 60px;
  font-weight: 700;
`;

const PinkLine = styled.div`
  color: #ea475b;
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border: 0;
  border-top: 1px solid #ea475b;
`;

const CaretLeft = styled.span`
  color: #ea475b;
  font-size: 25px;
  padding-right: 4px;
`;

const IndexLink = styled.h4`
  padding-top: 1rem;
  padding-left: 1rem;
  color: #222222;
  font-weight: 700;
  font-size: 15px;
`;

export {
    MainContainer,
    Title,
    ConfirmButton,
    NextButton,
    PinkLine,
    CaretLeft,
    IndexLink,
};