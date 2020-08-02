/* eslint-disable */
export const profitAndLossSummary = [
  ['SimplePNL', ''],
  ['Profit and Loss Statement for the period: ', '=Transactions!B1'],
  ['', ''],
  ['', 'SUBTOTALS', 'TOTALS'],
  ['INCOME', '=SUMIF(Transactions!D3:D4999,"($) Income",Transactions!C3:C4999)', '=B5'],
  ['', ''],
  [
    'Equipment Rental - COGS',
    '=SUMIF(Transactions!D3:D4999,"Cost of Goods Sold: Equipment Rental",Transactions!C3:C4999)',
  ],
  [
    'Job/Project Costs & Materials - COGS',
    '=SUMIF(Transactions!D3:D4999,"Cost of Goods Sold: Job/Project Costs & Materials",Transactions!C3:C4999)',
  ],
  [
    'Packaging & Labels - COGS',
    '=SUMIF(Transactions!D3:D4999,"Cost of Goods Sold: Packaging & Labels",Transactions!C3:C4999)',
  ],
  [
    'Shipping & Delivery - COGS',
    '=SUMIF(Transactions!D3:D4999,"Cost of Goods Sold: Shipping & Delivery",Transactions!C3:C4999)',
  ],
  ['Subcontractors- COGS', '=SUMIF(Transactions!D3:D4999,"Cost of Goods Sold: Subcontractors",Transactions!C3:C4999)'],
  [
    'Merchant Service Fees - COGS',
    '=SUMIF(Transactions!D3:D4999,"Cost of Goods Sold: Merchant Service Fees",Transactions!C3:C4999)',
  ],
  ['COST OF GOODS SOLD SUBTOTAL:', '', '=sum(B7:B12)'],
  ['', ''],
  ['GROSS PROFIT:', '', '=C5+C13'],
  ['', ''],
  [
    'Advertising & Marketing',
    '=SUMIF(Transactions!D3:D4999,"Expenses: Advertising & Marketing",Transactions!C3:C4999)',
  ],
  [
    'Advertising & Marketing: Events & Networking',
    '=SUMIF(Transactions!D3:D4999,"Expenses: Advertising & Marketing: Events & Networking",Transactions!C3:C4999)',
  ],
  [
    'Advertising & Marketing: Printing & Stationary',
    '=SUMIF(Transactions!D3:D4999,"Expenses: Advertising & Marketing: Printing & Stationary",Transactions!C3:C4999)',
  ],
  [
    'Advertising & Marketing: Website & Social Media',
    '=SUMIF(Transactions!D3:D4999,"Expenses: Advertising & Marketing: Website & Social Media",Transactions!C3:C4999)',
  ],
  ['Auto, Parking & Tolls', '=SUMIF(Transactions!D3:D4999,"Expenses: Auto, Parking & Tolls",Transactions!C3:C4999)'],
  ['Bank Charges & Fees', '=SUMIF(Transactions!D3:D4999,"Expenses: Bank Charges & Fees",Transactions!C3:C4999)'],
  [
    'Business Licenses & Permits',
    '=SUMIF(Transactions!D3:D4999,"Expenses: Business Licenses & Permits",Transactions!C3:C4999)',
  ],
  [
    'Contract Labor/Admin/Bookkeeper/Accountant',
    '=SUMIF(Transactions!D3:D4999,"Expenses: Contract Labor/Admin/Bookkeeper/Accountant",Transactions!C3:C4999)',
  ],
  [
    'Software, Dues, & Subscriptions',
    '=SUMIF(Transactions!D3:D4999,"Expenses: Software, Dues, & Subscriptions",Transactions!C3:C4999)',
  ],
  ['Business Insurance ', '=SUMIF(Transactions!D3:D4999,"Expenses: Business Insurance",Transactions!C3:C4999)'],
  ['Interest Paid', '=SUMIF(Transactions!D3:D4999,"Expenses: Interest Paid",Transactions!C3:C4999)'],
  ['Local Taxes', '=SUMIF(Transactions!D3:D4999,"Expenses: Local Taxes",Transactions!C3:C4999)'],
  ['Meals & Meetings', '=SUMIF(Transactions!D3:D4999,"Expenses: Meals & Meetings",Transactions!C3:C4999)'],
  ['Rent & Lease', '=SUMIF(Transactions!D3:D4999,"Expenses: Rent & Lease",Transactions!C3:C4999)'],
  ['Repairs & Maintenance', '=SUMIF(Transactions!D3:D4999,"Expenses: Repairs & Maintenance",Transactions!C3:C4999)'],
  [
    'Supplies: Office, Shop, Small Tools & Equipment',
    '=SUMIF(Transactions!D3:D4999,"Expenses: Supplies: Office, Shop, Small Tools, & Equipment",Transactions!C3:C4999)',
  ],
  ['Travel', '=SUMIF(Transactions!D3:D4999,"Expenses: Travel",Transactions!C3:C4999)'],
  [
    'Travel:Airfare & Transit',
    '=SUMIF(Transactions!D3:D4999,"Expenses: Travel:Airfare & Transit",Transactions!C3:C4999)',
  ],
  ['Travel:Lodging', '=SUMIF(Transactions!D3:D4999,"Expenses: Travel:Lodging",Transactions!C3:C4999)'],
  [
    'Travel:Meals & Entertainment',
    '=SUMIF(Transactions!D3:D4999,"Expenses: Travel:Meals & Entertainment",Transactions!C3:C4999)',
  ],
  [
    'Utilities: Gas, Power, Phone, Internet, etc.',
    '=SUMIF(Transactions!D3:D4999,"Utilities: Gas, Power, Phone, Internet, etc.",Transactions!C3:C4999)',
  ],
  ['Return of Product/Refund', '=SUMIF(Transactions!D3:D4999,"Return of Product/Refund",Transactions!C3:C4999)'],
  ['Ask My Accountant', '=SUMIF(Transactions!D3:D4999,"(?) Other Expense: Ask My Accountant",Transactions!C3:C4999)'],
  ['EXPENSES SUBTOTAL:', '', '=sum(B17:B39)'],
  ['', ''],
  ['NET PROFIT or (LOSS):', '', '=C5+C13+C40'],
  ['', ''],
  ['Owner Contribution', '=SUMIF(Transactions!D3:D4999,"Equity: Owner Contribution",Transactions!C3:C4999)'],
  [
    'Owner Draw - Personal Transactions',
    '=SUMIF(Transactions!D3:D4999,"Equity: Owner Draw - Personal Transactions",Transactions!C3:C4999)',
  ],
  ['', ''],
  [
    'Machinery & Equipment Assets',
    '=SUMIF(Transactions!D3:D4999,"Fixed Assets: Machinery & Equipment",Transactions!C3:C4999)',
  ],
  ['Vehicles Purchase Asset', '=SUMIF(Transactions!D3:D4999,"Fixed Assets: Vehicles Purchased",Transactions!C3:C4999)'],
];
