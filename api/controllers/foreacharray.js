var util = require('util');
var arr = ["one","two","three","four","five"];
var LINQ = require('node-linq').LINQ;

var positions =  [
    {
      symbol: "A",
      change: "50",
      Description: "Not my Job",
      direction: "up",
      assetclass: "Equity"
    },
    {
      symbol: "B",
      Description: "My Job",
      change: "60",
      direction: "up",
      assetclass: "Equity"
    },
    {
      symbol: "C",
      Description: "Simple Job",
      change: "60",
      direction: "up",
      assetclass: "Equity"
    },
    {
      symbol: "D",
      Description: "Read Job",
      change: 24,
      direction: "up",
      assetclass: "Equity"
    },
    {
      symbol: "A001",
      Description: "Cool Job",
      change: 10,
      direction: "up",
      assetclass: "Mutual Fund",
    },
    {
      symbol: "E",
      Description: "I love job",
      change: "36",
      direction: "up",
      assetclass: "Equity"
    },
    {
      symbol: "F",
      Description: "A Job",
      change: 47,
      direction: "up",
      assetclass: "Equity"
    },        
    {
      symbol: "FID200",
      Description: "Bad Job",
      change: 5,
      direction: "up",
      assetclass: "Mutual Fund",
    },
    {
      symbol: "534",
      Description: "Rare Job",      
      change: 50,
      direction: "up",
      assetclass: "Fixed Income",
    }
  ];
module.exports = {
  callme: callme
};

var ss = 'now check123';

function callme(req, res)
{
//positions

var arr = new LINQ(positions) 
    .OrderBy(function(item) { return item.Description;})
    .GroupBy (function(item) { return item.assetclass;})
//  .ToArray();

console.log(arr);
     var hello = util.format('Hello, %s!', 'Pankaj');

    res.json(hello);
}

