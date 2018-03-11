var expressionList = [];
expressionList[11] = "\\sqrt{144}-\\sqrt{1}"

var date = new Date();
var dateBox = document.getElementById("txt");
dateBox.innerHTML = `Today is ${moment().format('MMMM ') + 
        katex.renderToString(expressionList[moment().date()]) + 
        moment().format(', YYYY')}`;

