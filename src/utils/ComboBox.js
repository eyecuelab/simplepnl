import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { batchUpdateCategory } from '../actions/batchUpdateCategory';

const options = [
  '',
  '(x) Non-Business Related',
  '($) Income',
  '(?) Other Expense: Ask My Accountant',
  'Cost of Goods Sold: Equipment Rental',
  'Cost of Goods Sold: Job/Project Costs & Materials',
  'Cost of Goods Sold: Packaging & Labels',
  'Cost of Goods Sold: Shipping & Delivery',
  'Cost of Goods Sold: Subcontractors',
  'Cost of Goods Sold: Merchant Service Fees',
  'Equity: Owner Contribution',
  'Equity: Owner Draw - Personal Transactions',
  'Expenses: Advertising & Marketing',
  'Expenses: Advertising & Marketing: Events & Networking',
  'Expenses: Advertising & Marketing: Printing & Stationary',
  'Expenses: Advertising & Marketing: Website & Social Media',
  'Expenses: Auto, Parking & Tolls',
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
  'Expenses: Supplies: Office, Shop, Small Tools, & Equipment',
  'Expenses: Travel',
  'Expenses: Travel:Airfare & Transit',
  'Expenses: Travel:Lodging',
  'Expenses: Travel:Meals & Entertainment',
  'Expenses: Return of Product/Refund',
  'Fixed Assets: Machinery & Equipment',
  'Fixed Assets: Vehicles Purchased',
  'Utilities: Gas, Power, Phone, Internet, etc.',
];

function ComboBox(props) {
  // WILL HAVE TO UPDATE USESTATE, BELOW, WITH REDUXSTORE IF?ELSE "":
  const { categoryData, rowId } = props;
  let categoryDataState;
  if (categoryData === undefined) {
    categoryDataState = null;
  } else {
    categoryDataState = categoryData;
  }

  const [value, setValue] = React.useState(categoryDataState);
  const [inputValue, setInputValue] = React.useState('');
  return (
    <Autocomplete
      value={value}
      id={`${rowId}-clear-on-escape`}
      clearOnEscape
      options={options}
      style={column}
      onChange={(event, newValue) => {
        const { accessToken } = props;
        const { spreadsheetId } = props;
        const data = newValue;
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
  maxWidth: '100px',
  textAlign: 'center',
  marginLeft: '10px',
};

const mapStateToProps = (state) => ({
  accessToken: state.oauthReducer.access_token,
  ...state,
});

export default connect(mapStateToProps)(ComboBox);
