import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchCategory() {
  return (
    <Autocomplete
      id="clear-on-escape"
      clearOnEscape
      options={categories}
      getOptionLabel={(option) => option.title}
      style={column}
      renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
    />
  );
}

const column = {
  width: 150,
  marginLeft: '10px',
  padding: '10px'
}

const categories = [
  { title: '(x) Non-Business Related' },
  { title: '($) Income' },
  { title: '(?) Other Expense: Ask My Accountant' },
  { title: 'Cost of Goods Sold: Equipment Rental' },
  { title: 'Cost of Goods Sold: Job/Project Costs & Materials' },
  { title: 'Costs of Goods Sold: Packaging & Labels' },
  { title: 'Costs of Goods Sold: Shipping & Delivery' },
  { title: 'Costs of Goods Sold: Subcontractors' },

];
