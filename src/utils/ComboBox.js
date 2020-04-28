import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      id="clear-on-escape"
      clearOnEscape
      options={categories}
      getOptionLabel={(option) => option.title}
      style={column}

      renderInput={(params) => <TextField {...params} label="Select" variant="standard" margin="none" />}
    />
  );
}

const column = {
  minWidth: '150px',
  marginLeft: '10px',
};

const categories = [
  { title: '(x) Non-Business Related' },
  { title: '($) Income' },
  { title: '(?) Other Expense: Ask My Accountant' },
  { title: 'Cost of Goods Sold: Equipment Rental' },
  { title: 'Cost of Goods Sold: Job/Project Costs & Materials' },
  { title: 'Costs of Goods Sold: Packaging & Labels' },
  { title: 'Costs of Goods Sold: Shipping & Delivery' },
  { title: 'Costs of Goods Sold: Subcontractors' },
  { title: 'Cost of Goods Sold: Merchant Service Fees' },
  { title: 'Equity: Owner Contribution' },
  { title: 'Equity: Owner Draw - Personal Transactions' },
  { title: 'Expenses: Advertising & Marketing' },
  { title: 'Expenses: Advertising & Marketing:Events & Networking' },
  { title: 'Expenses: Advertising & Marketing:Printing & Stationary' },
  { title: 'Expenses: Advertising & Marketing:Website & Social Media' },
  { title: 'Expenses: Auto, Parking & Tolls' },
  { title: 'Expenses: Bank Charges & Fees' },
  { title: 'Expenses: Business Licenses & Permits' },
  { title: 'Expenses: Contract Labor/Admin/Bookkeeper/Accountant' },
  { title: 'Expenses: Software, Dues, & Subscriptions' },
  { title: 'Expenses: Business Insurance' },
  { title: 'Expenses: Interest Paid' },
  { title: 'Expenses: Local Taxes' },
  { title: 'Expenses: Meals & Meetings' },
  { title: 'Expenses: Rent & Lease' },
  { title: 'Expenses: Repairs & Maintenance' },
  { title: 'Expenses: Supplies- Office, Shop, Small Tools & Equipment' },
  { title: 'Expenses: Travel' },
  { title: 'Expenses: Travel:Airfare & Transit' },
  { title: 'Expenses: Travel:Lodging' },
  { title: 'Expenses: Travel:Meals & Entertainment' },
  { title: 'Expenses: Phone & Internet' },
  { title: 'Fixed Assets: Machinery & Equipment' },
  { title: 'Fixed Assets: Vehicles Purchased' },
];
