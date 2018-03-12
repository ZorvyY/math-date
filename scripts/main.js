//var expressionList = require("./expressions.js");

async function loadExpression () {
  var data = await fetch('https://zorvyy.github.io/math-date/temp/expressions.json')
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
