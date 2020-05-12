import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComboBox from '../../utils/ComboBox';
import { spreadsheetsValuesGet } from '../../actions/spreadsheetsValuesGet';

// import PinkPagination from '../../utils/Pagination';
import { Table, CategoryCell, DisplayButton } from '../../styles/components';


const Category = ({ thisSpreadsheetId }) => {
  const dispatch = useDispatch();
  const sheet = useSelector((state) => state.sheetsReducer[thisSpreadsheetId]);
  const accessToken = useSelector((state) => state.oauthReducer.access_token);
  const [categoryDisplay, setCategoryDisplay] = useState(3);
  const newCategoryKey = useRef(0);

  function handleDisplayClick(num) {
    setCategoryDisplay(num);
  }

  useEffect(() => {
    if (!sheet) {
      dispatch(spreadsheetsValuesGet({ accessToken, thisSpreadsheetId }));
    }
  }, [dispatch, accessToken, thisSpreadsheetId, sheet]);

  const sheetItems = useMemo(() => sheet?.values || [], [sheet]);

  return (
    <div>
      <div className="displayOptions">
        <span className="displayText">Display: </span>
        <DisplayButton onClick={() => handleDisplayClick(3)}>Uncategorized</DisplayButton>
        <DisplayButton onClick={() => handleDisplayClick(4)}>Categorized</DisplayButton>
        <DisplayButton onClick={() => handleDisplayClick('all')}>All</DisplayButton>
      </div>
      <div className="tableDiv">
        <Table>
          <tbody>
            <tr><th>Date</th><th>Description</th><th>Amount</th><th>Category</th></tr>
            {sheetItems.map((row, i) => {
              if (i < 2) {
                return false;
              }
              if (categoryDisplay === 'all') {
                return (
                  <tr id={`row_${i}`} key={newCategoryKey.current++}>
                    {row.map((column, j) => {
                      if (j <= 2) {
                        return (
                          <CategoryCell
                            id={`row_${i}-column_${j}`}
                            key={newCategoryKey.current++}
                          >
                            {column}
                          </CategoryCell>
                        );
                      }
                      return false;
                    })}
                    <td>
                      <ComboBox
                        spreadsheetId={thisSpreadsheetId}
                        rowId={i}
                        rowLength={row.length}
                        categoryData={row[3]}
                      />
                    </td>
                  </tr>
                );
              } if (row.length === categoryDisplay) {
                return (
                  <tr id={`row_${i}`} key={newCategoryKey.current++}>
                    {row.map((column, j) => {
                      if (j <= 2) {
                        return (
                          <CategoryCell
                            id={`row_${i}-column_${j}`}
                            key={newCategoryKey.current++}
                          >
                            {column}
                          </CategoryCell>
                        );
                      }
                      return false;
                    })}
                    <td>
                      <ComboBox
                        spreadsheetId={thisSpreadsheetId}
                        rowId={i}
                        rowLength={row.length}
                        categoryData={row[3]}
                      />
                    </td>
                  </tr>
                );
              }
              return false;
            }
            )}
          </tbody>
        </Table>
      </div>
      {/* <PinkPagination /> */}
      <style>{
        `
        .displayOptions {
          // position: relative;
          // bottom: 60px;
          margin: 8px;
          text-align: center;
        }
        .displayText {
          font-weight: 600;
          color: #555555;
        }
        `
      }
      </style>


    </div>
  );
};

// class Category extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       categoryDisplay: 3,
//     };
//     newCategoryKey.current = 0;
//     this.handleDisplayClick = this.handleDisplayClick.bind(this);
//   }

//   componentDidMount() {
//     const { dispatch } = this.props;
//     const { accessToken } = this.props;
//     const { thisSpreadsheetId } = this.props;
//     const payload = {
//       accessToken,
//       thisSpreadsheetId,
//     };
//     dispatch(spreadsheetsValuesGet(payload));
//   }

//   handleDisplayClick(columns) {
//     this.setState({
//       categoryDisplay: columns,
//     });
//   }

//   csvReturn() {
//     let spreadsheetValues = [];
//     const { sheetsReducer } = this.props;
//     const { thisSpreadsheetId } = this.props;
//     if (sheetsReducer[thisSpreadsheetId]?.values) {
//       spreadsheetValues = sheetsReducer[thisSpreadsheetId].values;
//     } else {
//       // console.log("Warning Will Robinson and/or Noah");
//       // API CALL FOR VALUES NO IN REDUX WILL LIKELY REPLACE THESE..?:
//       spreadsheetValues = [
//         ['LoadingA', 'LoadingA', 'LoadingA'],
//         ['LoadingB', 'LoadingB', 'LoadingB', 'LoadingB'],
//         ['LoadingA', 'LoadingA', 'LoadingA'],
//         ['LoadingB', 'LoadingB', 'LoadingB', 'LoadingB'],
//         ['LoadingA', 'LoadingA', 'LoadingA'],
//         ['LoadingB', 'LoadingB', 'LoadingB', 'LoadingB'],
//       ];
//     }
//     console.count();
//     return (
//        <div
//         <Table>
//           <tbody>
//             <tr><th>Date</th><th>Description</th><th>Amount</th><th>Category</th></tr>
//             {spreadsheetValues.map((row, i) => {
//               if (i < 2) {
//                 return false;
//               }
//               const { categoryDisplay } = this.state;
//               if (categoryDisplay === 'all') {
//                 return (
//                   <tr id={`row_${i}`} key={this.newCategoryKey++}>
//                     {row.map((column, j) => {
//                       if (j <= 2) {
//                         return (
//                           <CategoryCell
//                             id={`row_${i}-column_${j}`}
//                             key={this.newCategoryKey++}
//                           >
//                             {column}
//                           </CategoryCell>
//                         );
//                       }
//                       return false;
//                     })}
//                     <td>
//                       <ComboBox
//                         spreadsheetId={thisSpreadsheetId}
//                         rowId={i}
//                         rowLength={row.length}
//                         categoryData={row[3]}
//                       />
//                     </td>
//                   </tr>
//                 );
//               } if (row.length === categoryDisplay) {
//                 return (
//                   <tr id={`row_${i}`} key={this.newCategoryKey++}>
//                     {row.map((column, j) => {
//                       if (j <= 2) {
//                         return (
//                           <CategoryCell
//                             id={`row_${i}-column_${j}`}
//                             key={this.newCategoryKey++}
//                           >
//                             {column}
//                           </CategoryCell>
//                         );
//                       }
//                       return false;
//                     })}
//                     <td>
//                       <ComboBox
//                         spreadsheetId={thisSpreadsheetId}
//                         rowId={i}
//                         rowLength={row.length}
//                         categoryData={row[3]}
//                       />
//                     </td>
//                   </tr>
//                 );
//               }
//               return false;
//             }
//             )}
//           </tbody>
//         </Table>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="displayOptions">
//           <span className="displayText">Display: </span>
//           <DisplayButton onClick={() => this.handleDisplayClick(3)}>Uncategorized</DisplayButton>
//           <DisplayButton onClick={() => this.handleDisplayClick(4)}>Categorized</DisplayButton>
//           <DisplayButton onClick={() => this.handleDisplayClick('all')}>All</DisplayButton>
//         </div>
//         {this.csvReturn()}

//         <PinkPagination />
//         <style>{
//           `
//           .displayOptions {
//             // position: relative;
//             // bottom: 60px;
//             margin: 8px;
//             text-align: center;
//           }
//           .displayText {
//             font-weight: 600;
//             color: #555555;
//           }
//           `
//         }
//         </style>


//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   csv: state.csvReducer.csvRawData,
//   sheetsReducer: state.sheetsReducer,
//   accessToken: state.oauthReducer.access_token,
// });

export default Category;
