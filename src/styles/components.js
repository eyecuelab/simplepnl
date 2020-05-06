import styled from 'styled-components/macro';

const MainContainer = styled.div`
  background-color: #ffffff;
  height: 600px;
  border-radius: 5px;
  color: #6B6B6B;
  /* test for megfooter: */
  overflow: visible;
`;

const EulaContainer = styled.div`
  color: #6B6B6B;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  height: 80vh;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 70px 1fr 100px 0px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const EulaFadeContainer = styled.div`
  background-repeat: no-repeat;
  position: relative;
  bottom: 175px;
  width: 97.5%;
  height: 75px;
  background: linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,1) 100%);

  // background: -moz-linear-gradient(top,  rgba(137,255,241,0) 0%, rgba(0,0,0,1) 100%); /* FF3.6+ */
  // background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(137,255,241,0)), color-stop(100%,rgba(0,0,0,1))); /* Chrome,Safari4+ */
  // background: -webkit-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%); /* Chrome10+,Safari5.1+ */
  // background: -o-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%); /* Opera 11.10+ */
  // background: -ms-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%); /* IE10+ */
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0089fff1', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
`;

const CategoryContainer = styled.div`
  background-color: #FFFFFF;
  height: 600px;
  border-radius: 5px;
  color: #6B6B6B;
`;

const HomeHeader = styled.h1`
  padding-top: 50px;
  padding-bottom: 10px;
  font-size: 25px;
  text-align: center;
`;

const HomeText = styled.p`
  padding-right: 30px;
  padding-left: 30px;
  font-size: 18px;
  text-align: center;
`;

const SignIn = styled.div`
  text-align: center;
`;

const EulaHeader = styled.h2`
  padding: 20px;
  font-size: 25px;
  margin: 0px;
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
  padding-bottom: 10px;
  font-weight: 600;
  color: #222222;
`;

const ReportStatusBar = styled.div`
  background-color: #555555;
  border-radius: 20px;
  display: inline-block;
  width: 85%;
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
  left: 80%;
  background-color: #ea475b;
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

const ReportsPlusSign = styled.div`
  position: relative;
  top: -32px;
  left: 6px;
  font-weight: 200;
  color: #e9f5fb;
  font-size: 82px;
`;

const Table = styled.table`
  /* margin-top: 25px; */
  /* margin-bottom: 50px; */
  background-color: white;
  border-radius: 5px;
  width: 100%;
`;

const Cell = styled.td`
  border-bottom: 1px solid rgba(0,0,0,.4);
  padding: 5px;
  font-size: 15px;
`;

const CategoryCell = styled.td`
  border-bottom: 1px solid rgba(0,0,0,.4);
  padding-bottom: 5px;
  vertical-align: bottom;
  font-size: 15px;
  max-width: 200px;
`;

const Title = styled.h1`
  padding-left: 2rem;
  font-size: 25px;
  color: #ea475b;
  font-weight: 700;
`;

const ReportsHeader = styled.h1`
  padding-top: 24px;
  padding-left: 2rem;
  font-size: 25px;
  color: #ea475b;
  font-weight: 700;
`;

const MegQuestionsLocation = styled.div`
  position: absolute;
  top: 665px;
  left: 23%;
`;

const SelectPreview = styled.h5`
  padding: 15px;
`;

const SelectScreen = styled.div`
  color: #555555;
  background-color: #FFFFFF;
  border-radius: 5px;
  min-height: 20vh;
  text-align: center;
  padding: 20px 50px;
`;

const ConfirmButton = styled.button`
  /* position: relative; */
  /* bottom: -200px; */
  /* overflow: visible; */
  background: #ea475b;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 8px 30px;
  font-weight: 700;
  margin: 20px;
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
  color: #FFFFFF;
  padding: 8px 30px;
  font-weight: 700;
  /* margin: 20px; */
`;

const NextButton = styled.button`
  background: #ea475b;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 8px 60px;
  font-weight: 700;
  margin: 20px;
`;

const DisplayButton = styled.button`
  background: #ea475b;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 2px 10px;
  font-weight: 600;
  margin-left: 10px;
`;

const EulaButton = styled.button`
  background: #ea475b;
  border-radius: 4px;
  color: #FFFFFF;
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

const ExtraBold = styled.span`
  font-weight: 800;
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
  Table,
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
};
