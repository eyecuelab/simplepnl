import styled from 'styled-components/macro';
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

const MegQuestionsLocation = styled.div`
  position: absolute;
  top: 660px;
  left: 30%;
`;

const SelectPreview = styled.h5`
   padding: 15px;
`;

const ConfirmButton = styled.button`
  background: #ea475b;
  border-radius: 4px;
  color: #FFFFFF;;
  padding: 8px 60px;
  font-weight: 700;
  margin: 20px;
`;

const NextButton = styled.button`
  background: #ea475b;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 8px 60px;
  font-weight: 700;
  margin: 20px;
`;

const PinkLine = styled.div`
  color: #ea475b;
  margin-top: 1rem;
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

const TextInput = styled.input`
  height: 70px;
  width: 90%;
  border: 1px solid #B9B9B9;
  border-radius: 5px;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  text-align: center;
  font-weight: 600;
  color: #555555;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;


export {
  MainContainer,
  Title,
  MegQuestionsLocation,
  ConfirmButton,
  NextButton,
  PinkLine,
  CaretLeft,
  IndexLink,
  SelectPreview,
  TextInput,
};
