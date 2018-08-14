var express = require('express'),
    app = express(),
    engines = require('consolidate');

//motor de associado ao html
app.engine('html', engines.nunjucks);
//rendereriza o html
app.set('view engine', 'html');
//diretório do html
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('hello', { name : 'Templates bunitão' });
});

app.use(function(req, res){
    res.sendStatus(404); 
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s', port);
});