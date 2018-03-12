//var expressionList = require("./expressions.js");

async function loadExpression () {
  var data = await fetch('https://gist.githubusercontent.com/ZorvyY/c70bd678953e51b4d599eb970981143e/raw/0acf48aa54ab8ec19e9322b1f5736a1eeae44c6b/expressions.json')
  .then(response => response.text());
  console.log(data);
  let expressionList = JSON.parse(data);

  var date = new Date();
  var dateBox = document.getElementById("date");
  var html = `${moment().format('MMMM ') +
          katex.renderToString(expressionList[moment().date()]) +
          moment().format(', YYYY')}`;
  dateBox.innerHTML = html;
  console.log(expressionList);
}

loadExpression();
