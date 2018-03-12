(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var expressionList = require("./expressions.js");

async function loadExpression () {
  var data = await fetch('https://zorvyy.github.io/math-date/temp/expressions.json')
  .then(response => response.text());
  console.log(data);
  let expressionList = JSON.parse(data);

  var date = new Date();
  var dateBox = document.getElementById("date");
  var html = `${moment().format('MMMM ') +
          katex.renderToString(expressionList[6]) +
          moment().format(', YYYY')}`;
  dateBox.innerHTML = html;
  console.log(expressionList);
}

loadExpression();

},{}]},{},[1]);
