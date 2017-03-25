var util = require('util');
var fs = require('fs');
var parseString = require('xml2js').parseString;

//var promise = require('promise');
var filepath = require('./CallSoapService');

var soap = require('soap');

let syncfn = x => {
    console.log('sync', x)
{
    if(x < 10)
    syncfn (x+1);
}
}

module.exports = {
  callme: callme
};

function getukpostcode(callback)
{
    // var args = {PostCode: 'TN19'};
    // var url = 'http://www.webservicex.net/uklocation.asmx?wsdl';
    // soap.createClient(url, function(err, client){      
    //     client.GetUKLocationByPostCode(args, function(err, result) {
    //       if(err) {
    //           callback(err);
    //       }
    //       else {
    //       callback(undefined, result);          
    //       }
    //   });
    // });    

    
}

function getpostalcode() {
var url = 'http://www.webservicex.net/uklocation.asmx?wsdl';
var args = {PostCode: 'TN19'};

  return new Promise ((resolve, reject) => {
    soap.createClient(url, (err, client) => {
      client.GetUKLocationByPostCode(args, (err, result) => {        
        return resolve(result)
      })
    });
  });
}

function callme(req, res)
{
     
    
    //  var response = getpostalcode();
    //  response.then(function(result) {
    //     // fulfillment
    //     parseString(result.GetUKLocationByPostCodeResult, function (err, result) {
    //             console.log(result['NewDataSet']['Table']); // or console.leg(result.NewDataSet.Table);
    //         });
    //     //console.log(result.GetUKLocationByPostCodeResult);
    //     }, function(reason) {
    //     // rejection
        
    //     console.log("reason", reason);
    //     });     
    // filepath.getukpostcode(function(err, result){
    //     if(err)
    //     {
    //         console.log(err);
    //     } else {          
    //     console.log(result.GetUKLocationByPostCodeResult);
    //     }
    // });
    
    //syncfn(1);
    //ReadTextFile('../MyProject/api/sample.txt', function(err, data) {
    //     ReadTextFile('./api/sample.txt', function(err, data) {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log(data);
    //     }
    // });
    var hello = util.format('Hello, %s!', 'Pankaj');

  // this sends back a JSON response which is a single string
    res.json(hello);
}

function ReadTextFile(filename, callback)
{
    fs.readFileSync(filename, { encoding: 'utf8' }, function(error, data){
        if(error)
        {
            callback(error);
        }
        else
        {
            callback(undefined,data);
        }
    });
}