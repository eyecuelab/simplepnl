import styled from 'styled-components/macro';

const MainContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  color: #6b6b6b;
  min-width: 400px !important;
  max-width: 700px !important;
  min-height: 700px !important;
  max-height: 900px !important;
  overflow: auto;
`;

const EulaContainer = styled.div`
  color: #6b6b6b;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  height: 80vh;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 130px 1fr 100px 0px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-row-gap: 0px;
`;

const EulaFadeContainer = styled.div`
  background-repeat: no-repeat;
  position: relative;
  bottom: 175px;
  width: 97.5%;
  height: 75px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 1) 100%);

  // background: -moz-linear-gradient(top,  rgba(137,255,241,0) 0%, rgba(0,0,0,1) 100%); /* FF3.6+ */
  // background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(137,255,241,0)), color-stop(100%,rgba(0,0,0,1))); /* Chrome,Safari4+ */
  // background: -webkit-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%); /* Chrome10+,Safari5.1+ */
  // background: -o-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%); /* Opera 11.10+ */
  // background: -ms-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%); /* IE10+ */
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0089fff1', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
`;

const CategoryContainer = styled.div`
  background-color: #ffffff;
  height: 820px;
  border-radius: 5px;
  color: #6b6b6b;
  // min-height: 700px;
  // max-height: 900px;
  overflow: auto;
`;

const HomeHeader = styled.h1`
  padding-top: 50px;
  padding-right: 80px;
  padding-left: 80px;
  margin: 0px;
  font-size: 25px;
  font-weight: 300;
  text-align: center;
`;

const HomeText = styled.p`
  padding-top: 50px;
  padding-right: 80px;
  padding-left: 80px;
  margin: 0px;
  font-size: 16px;
  text-align: center;
`;

const SignIn = styled.div`
  padding-top: 50px;
  padding-right: 80px;
  padding-left: 80px;
  text-align: center;
`;

const EulaHeader = styled.h2`
  padding-top: 50px;
  padding-right: 80px;
  padding-left: 80px;
  margin: 0px;
  font-size: 25px;
  font-weight: 300;
  text-align: center;
`;

const ReportsContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
  background-color: white;
  border-radius: 5px;
`;

const ReportItemHeader = styled.div`
  text-align: left;
  padding-bottom: 5px;
  font-weight: 600;
  color: #222222;
`;

const ReportStatusBar = styled.div`
  background-color: #555555;
  border-radius: 20px;
  display: inline-block;
  width: 433px;
  /* min-width: 25vw; */
  text-align: left;
  margin-bottom: 5px;
`;

const ReportStatus = styled.div`
  background-color: #ea475b;
  color: #ffffff;
  font-weight: 600;
  padding: 10px;
  border-radius: 20px;
  display: inline-block;
`;

const EditReport = styled.div`
  display: inline-block;
  background-color: #ffffff;
`;

const EditReportIcon = styled.img`
  width: 26px;
  margin-left: 20px;
`;

const ReportLinkIcon = styled.img`
  width: 26px;
  margin-left: 20px;
`;

const ReportsPlus = styled.div`
  position: relative;
  top: -32px;
  /* right: -87%; */
  right: -80%;
  background-color: #ea475b;
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

const ReportsPlusSign = styled.div`
  position: relative;
  top: -31px;
  left: 6px;
  height: 60px;
  font-weight: 200;
  color: #e9f5fb;
  font-size: 82px;
`;

const HelpPlus = styled.div`
  position: fixed;
  top: 750px;
  transform: translate(-50%, -0%);

  /* right: -87%; */
  left: 50%;
  background-color: rgba(72, 167, 219, 0.97);
  box-shadow: 3px 3px 9px 1px rgba(34, 34, 34, 0.93);
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

const HelpPlusSign = styled.div`
  position: relative;
  top: -18px;
  left: 28px;
  height: 60px;
  font-weight: 200;
  color: #e9f5fb;
  font-size: 82px;
  transform: rotate(45deg);
  cursor: pointer;
`;

const Table2 = styled.table`
  /* margin-top: 25px; */
  /* margin-bottom: 50px; */
  background-color: white;
  border-radius: 5px;
  width: 100%;
  /* max-height: 430px; */
`;

const Cell = styled.td`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding: 5px;
  font-size: 14px;
`;

const CategoryCell = styled.td`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding-bottom: 5px;
  vertical-align: bottom;
  font-size: 15px;
  max-width: 200px;
`;

const Title = styled.h1`
  padding-top: 10px;
  padding-left: 80px;
  font-size: 25px;
  color: #ea475b;
  font-weight: 700;
  margin: 0px;
`;

const ReportsHeader = styled.h1`
  padding-top: 50px;
  padding-left: 80px;
  font-size: 25px;
  color: #ea475b;
  font-weight: 700;
`;

const MegQuestionsLocation = styled.div`
  position: absolute;
  height: 10px;
  /* position: fixed;
  left: 50%;
  top: 80px;
  transform: translate(-50%, -0%);
  width: 700px;
  height: 700px; */

  /* top: 850px;
  left: 10%; */
  /* margin-left: -1%; */
  /* margin-right: -1%; */
  /* padding-left: -1%; */
  /* padding-right: -10px; */
`;

const SelectPreview = styled.h5`
  padding: 0px 10px;
`;

const SelectScreen = styled.div`
  color: #555555;
  background-color: #ffffff;
  border-radius: 5px;
  /* min-height: 20vh; */
  text-align: center;
  // height: 617px;
  padding: 10px 60px;
  /* overflow: auto; */
`;

const ConfirmButton = styled.button`
  /* position: relative; */
  /* bottom: -200px; */
  /* overflow: visible; */
  background: #ea475b;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px 10px;
  font-weight: 700;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 25px;
`;

const ProblemButton = styled.button`
  /* position: relative; */
  /* left: 35%; */
  /* overflow: visible; */
  /* bottom: -200px; */
  /* text-align: right; */
  /* float: right; */
  display: inline;
  margin-left: 75%;
  background: #555555;
  border-radius: 4px;
  color: #ffffff;
  padding: 8px 30px;
  font-weight: 700;
  /* margin: 20px; */
`;

const ProblemSpan = styled.span`
  text-align: center;
  font-style: italic;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  background-color: rgba(85, 85, 85, 0.03);
  border-radius: 5px;
  color: #555555;
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const NextButton = styled.button`
  height: 50px;
  width: 270px;
  background: #ea475b;
  border-radius: 4px;
  color: #ffffff;
  padding: 0px;
  font-weight: 700;
  /* border: 1px solid #555555; */
  /* margin: 20px; */
`;

const DisplayButton = styled.button`
  background: #ea475b;
  border-radius: 4px;
  color: #ffffff;
  padding: 2px 10px;
  font-weight: 600;
  margin-left: 10px;
`;

const EulaButton = styled.button`
  background: #ea475b;
  border-radius: 4px;
  color: #ffffff;
  padding: 8px 60px;
  font-weight: 700;
  margin: 20px;
  font-size: 1rem;
  font-weight: 500;
`;

const EulaButtonContainer = styled.div`
  text-align: center;
  margin: auto;
`;

const PinkLine = styled.div`
  color: #ea475b;
  /* margin-top: 1px; */
  margin-left: 80px;
  margin-right: 80px;
  /* border: 0; */
  border-top: 1px solid #ea475b;
`;

const CaretLeft = styled.span`
  color: #ea475b;
  font-size: 18px;
  padding-right: 4px;
`;

const IndexLink = styled.h4`
  padding-top: 20px;
  padding-left: 80px;
  color: #222222;
  font-weight: 300;
  font-size: 12px;
  margin: 0px;
`;

const ExtraBold = styled.span`
  font-weight: 800;
`;

const TextInput = styled.input`
  margin: 50px 0px;
  padding: 0px 80px;
  height: 100px;
  width: 100%;
  border: 2px solid rgb(204, 204, 204);
  border-radius: 20px;
  text-align: center;
  font-weight: 600;
  color: #222222;

  &::placeholder {
    color: #777777;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export {
  MainContainer,
  EulaContainer,
  EulaFadeContainer,
  CategoryContainer,
  ReportsContainer,
  HomeHeader,
  HomeText,
  SignIn,
  EulaHeader,
  ReportsPlus,
  ReportsPlusSign,
  Table2,
  Cell,
  CategoryCell,
  Title,
  ReportsHeader,
  ReportItemHeader,
  ReportStatusBar,
  ReportStatus,
  EditReport,
  EditReportIcon,
  ReportLinkIcon,
  MegQuestionsLocation,
  ConfirmButton,
  ProblemButton,
  ProblemSpan,
  NextButton,
  DisplayButton,
  EulaButton,
  EulaButtonContainer,
  PinkLine,
  CaretLeft,
  IndexLink,
  SelectPreview,
  SelectScreen,
  TextInput,
  ExtraBold,
  HelpPlus,
  HelpPlusSign,
};
