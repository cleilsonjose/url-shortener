var express = require('express');
var router = express.Router();
const Link = require('../models/link');


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

router.post('/new', async (req, res, next) => {
  const url = req.body.url;
  const code = generateCode();

  const resultado = await Link.create({
    url,
    code
  })

  res.render('stats', resultado);
})


module.exports = router;
