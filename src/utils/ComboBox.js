import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { batchUpdateCategory } from '../actions/batchUpdateCategory';

const options = [
  '(x) Non-Business Related',
  '($) Income',
  '(?) Other Expense: Ask My Accountant',
  'Cost of Goods Sold: Equipment Rental',
  'Cost of Goods Sold: Job/Project Costs & Materials',
  'Costs of Goods Sold: Packaging & Labels',
  'Costs of Goods Sold: Shipping & Delivery',
  'Costs of Goods Sold: Subcontractors',
  'Cost of Goods Sold: Merchant Service Fees',
  'Equity: Owner Contribution',
  'Equity: Owner Draw - Personal Transactions',
  'Expenses: Advertising & Marketing',
  'Expenses: Advertising & Marketing:Events & Networking',
  'Expenses: Advertising & Marketing:Printing & Stationary',
  'Expenses: Advertising & Marketing:Website & Social Media',
  'Expenses: Aut, Parking & Tolls',
  'Expenses: Bank Charges & Fees',
  'Expenses: Business Licenses & Permits',
  'Expenses: Contract Labor/Admin/Bookkeeper/Accountant',
  'Expenses: Softwar, Due, & Subscriptions',
  'Expenses: Business Insurance',
  'Expenses: Interest Paid',
  'Expenses: Local Taxes',
  'Expenses: Meals & Meetings',
  'Expenses: Rent & Lease',
  'Expenses: Repairs & Maintenance',
  'Expenses: Supplies- Offic, Sho, Small Tools & Equipment',
  'Expenses: Travel',
  'Expenses: Travel:Airfare & Transit',
  'Expenses: Travel:Lodging',
  'Expenses: Travel:Meals & Entertainment',
  'Expenses: Phone & Internet',
  'Fixed Assets: Machinery & Equipment',
  'Fixed Assets: Vehicles Purchased',
];

function ComboBox(props) {
  // WILL HAVE TO UPDATE USESTATE, BELOW, WITH REDUXSTORE IF?ELSE "":
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Autocomplete
      value={value}
      id="clear-on-escape"
      clearOnEscape
      options={options}
      style={column}
      onChange={(event, newValue) => {
        const { accessToken } = props;
        const { rowId } = props;
        const { spreadsheetId } = props;
        const data = newValue;
        console.log(props);
        const { dispatch } = props;
        const payload = {
          accessToken,
          rowId,
          spreadsheetId,
          data,
        };
        dispatch(batchUpdateCategory(payload));
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      inputValue={inputValue}
      renderInput={(params) => <TextField {...params} label="Select" variant="standard" margin="none" />}
    />
  );
}

const column = {
  minWidth: '150px',
  marginLeft: '10px',
};

const mapStateToProps = (state) => ({
  accessToken: state.oauthReducer.access_token,
  ...state,
});

export default connect(mapStateToProps)(ComboBox);
