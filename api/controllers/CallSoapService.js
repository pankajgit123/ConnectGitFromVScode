'use strict';
var util = require('util');
var soap = require('soap');
var asyncall = require('./asyncparallel');

module.exports = 
{ getukpostcode: getukpostcode,
callme: callme }

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

function callme(req, res)
{
    asyncall.getme(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log('called after');
            console.log(res);
        }
     });

     var hello = util.format('Hello, %s!', 'Pankaj');

    res.json(hello);
}



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