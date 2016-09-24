function sms(to_group, message){
   var plivo = require('plivo');
   var p = plivo.RestAPI({
      authId: '',
      authToken: ''
   });

   var params = {
      'src' : '14422330080',
      'dst' : to_group,
      'text' : message,
   };

   p.send_message(params, function (status, response) {
      console.log('Status: ', status);
      console.log('API Response:\n', response);
   });

   return "ok";
}

module.exports.sms = sms;
