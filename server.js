let express = require('express');
let bodyParser = require('body-parser');
let logger = require('morgan');
let mongoose = require('mongoose');

let Article = require('./models/Article.js');

let app = express();
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

//mongoose.connect('mongodb://localhost/nytreact');
mongoose.connect("mongodb://heroku_q343w7gr:mcm1vui9g2kva2oohbvag3sfrp@ds153179.mlab.com:53179/heroku_q343w7gr");


let db = mongoose.connection;

db.on('error',  (err) => {
  console.log('Mongoose Error: ', err);
});

db.once('open',  () => {
  console.log('Mongoose connection successful.');
});

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
})

app.get('/api/saved', (req, res) => {

  Article.find({})
    .exec((err, doc) =>{ 

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

app.post('/api/saved', (req, res) =>{

  let newArticle = new Article({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  });

  newArticle.save((err, doc) => {
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.json(doc);
    }
  });

});

app.delete('/api/saved/:id', (req, res) => {

  Article.find({'_id': req.params.id}).remove()
    .exec((err, doc) => {
      res.send(doc);
  });

});

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});