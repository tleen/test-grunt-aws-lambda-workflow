var moment = require('moment'),
    request = require('request');

exports.handler = function(event, context){
  console.log('Received event', JSON.stringify(event, null, 2));
  context.succeed({
    time : moment().format('LLLL'),
    message : 'All set'});
}

