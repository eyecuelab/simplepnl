import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchCategory() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={categories}
      getOptionLabel={(option) => option.title}
      style={{ width: 180 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  );
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