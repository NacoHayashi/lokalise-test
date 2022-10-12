const axios = require('axios');
var fs = require('fs');

axios.get('https://spreadsheets.google.com/tq?tqx=responseHandler:responseHandler&tq=&key=1nzza9izh9qgaSm_hNm9D_zPxeZ6pRIwrsnTB1QXgJIw&gid=1468334384').then(res => {
const en = {};
  const tw = {};
  const indexText = res.data.indexOf('responseHandler');
  const resDataRemoveCallback = res.data.substring(indexText).replace('responseHandler(', '');
  const dataAfterRemoveEndString = resDataRemoveCallback.substring(0, resDataRemoveCallback.length - 2);
  
  const resDataParse = JSON.parse(dataAfterRemoveEndString);
  const rows = resDataParse.table.rows.map(row => {
    return row.c.map((column) => {
      if (column) {
        if (column.v) {
          return column.v;
        }
      }
      return '';
    });
  });
  rows.forEach(row => {
    if (row[0] !== 'key') {

      en[row[0]] = row[2];
      tw[row[0]] = row[1];
    }
  });
  // writeFile function with filename, content and callback function
  fs.writeFile('./locales/en.json', JSON.stringify(en), function (err) {
    if (err) throw err;
    console.log('en File is created successfully.');
  });
  fs.writeFile('./locales/zh-TW.json', JSON.stringify(tw), function (err) {
    if (err) throw err;
    console.log('tw File is created successfully.');
  });
});
