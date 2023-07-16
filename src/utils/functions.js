function getExcelData(excelSheetPath, excelSheetName) {
  var XLSX = require('xlsx');
  var path = require('path');
  var filePath = path.resolve(excelSheetPath);
  var workbook = XLSX.readFile(filePath);
  var excelData = XLSX.utils.sheet_to_json(workbook.Sheets[excelSheetName]);
  console.log(excelData);
  return excelData;
}

function getDate() {
  let date = new Date();
  let currentDate =
    date.getDate() +
    '_' +
    (date.getMonth() + 1) +
    '_' +
    date.getFullYear() +
    '_' +
    date.getHours() +
    '_' +
    date.getMinutes() +
    '_' +
    date.getSeconds() +
    '_' +
    date.getMilliseconds();
  return currentDate;
}
module.exports = { getExcelData, getDate };
