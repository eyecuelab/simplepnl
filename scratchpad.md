let data = ["Date", "TransactionType", "Description", "Memo", "Amount", 5, 6, 7];
const csvHeader = "row_0".split("_");
const csvIndexOfHeader = parseInt(csvHeader[1])
const csvDate = "column_0".split("_");
const csvIndexOfDate = parseInt(csvDate[1])
const csvDescription = "column_2".split("_");
const csvIndexOfDescription = parseInt(csvDescription[1])
const csvAmount = "column_4".split("_");
const csvIndexOfAmount = parseInt(csvAmount[1])
data.unshift(data.splice((csvIndexOfAmount+0), 1)[0]);
data.unshift(data.splice((csvIndexOfDescription+1), 1)[0]);
data.unshift(data.splice(csvIndexOfDate+2, 1)[0]);
data.splice(3, 0, "CATEGORY");
console.log("UPDATED: ", data);
