var express = require('express')
var path = require('path')
var app = express()
const PORT = process.env.PORT || 3000;

//redirect https to http for Heroku deployment
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
})

app.use(express.static('public'))

// for react-router browserHistory
app.get('*', function(req, res, next){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
})
