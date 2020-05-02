import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Table, Cell } from '../../styles/components';


const AmountColumnPreview = () => {
  const csv = useSelector((state) => state.csvReducer.csvRawData);
  const newAmountKey = useRef(0);

  function csvReturn() {
    if (!csv) {
      return (
        <div>
          <h5>
            Whoops forgot to upload a CSV...<br /> We better add a check for that!
          </h5>
          <hr />
        </div>
      );
    }
    return (
      <Table>
        <tbody>
          {
              csv.slice(0, 3).map((row, i) => (
                <tr
                  id={`row_${i}`}
                  key={newAmountKey.current++}
                >
                  {
                    row.data.map((column, j) => (
                      <Cell
                        id={`row_${i}-column_${j}`}
                        role="presentation"
                        className={`row_${i} column_${j} tableCell`}
                        key={newAmountKey.current++}
                      >
                        {column}
                      </Cell>
                    ))
                  }
                </tr>
              ))
            }
        </tbody>
      </Table>
    );
  }
  return (
    <div>
      {csvReturn()}
    </div>
  );
};

export default AmountColumnPreview;
