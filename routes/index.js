var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encurtador' });
});

function generateCode(){
  let text = '';
  const possible = '0123456789abcdefghijlmnopqrstuwxyzABCDEFGHIJLMNOPQRSTUWXYZ';
  for(let i = 0; i < 10; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

router.post('/new', (req, res, next) => {
  const url = req.body.url;
  const code = generateCode();
  res.send('http://localhost:3000/' + code);
})


module.exports = router;
