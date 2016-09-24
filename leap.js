var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var contacts = {
    11231231234: "Name",
    14564564567: "name0",
    19879879876: "name4",
};


app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));
app.all('/leap/', function(request, response) {

    var send = "";
    // Sender's phone number
    var from_number = request.body.From || request.query.From;

    // Receiver's phone number - Plivo number
    var to_number = request.body.To || request.query.To;

    // The text which was received
    var body = contacts[from_number] + ") " + request.body.Text || request.query
.Text;
    console.log ('Message received - From: ' + from_number + ', Text: ' + body);

    var to_forward = '';
    for ( var k in contacts){
        if ( k != from_number ){
            to_forward += '<' + k
        }
        if ( k == from_number ){
            send = "send"
        }
    }

    var params = {
        'src': '14433220080',
        'dst': to_forward.substr(1),
    };

    if (send){
       require('./send_sms.js').sms(to_forward.substr(1), body);
       console.log ('Message sent: ' + to_forward.substr(1) + ', Text: ' + body)
;
    }else{
       console.log ('Message received - From: ' + from_number + ', DENIED');
    }

    response.send("Message received");

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
