const express = require('express');
const app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.get('/topic', (req, res) => {
  const topics = [
    'Javascript is...',
    'Nodejs is...',
    'Express is...',
  ];
  const output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}
  `
  res.send(output);
});
app.get('/param/:module_id/:topic_id', (req, res) => {
  res.json(req.params);
});
app.get('/template', (req, res) => {
  res.render('temp', {time:Date(), title:'Jade'});
});
app.get('/', (req, res) => {
  res.send('Hello home page');
});
app.get('/dynamic', (req, res) =>{
  let lis = '';
  for(let i=0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  let time = Date();
  const output = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
    <body>
      Hello, Dynamic!
      <ul>
      ${lis}
      </ul>
      ${time}
    </body>
  </html>`
  res.send(output);
});
app.get('/route', (req, res) => {
  res.send('Hello Router, <img src="route.jpg">')
});
app.get('/login', (req, res) => {
  res.send('<h1>Login please</h1>');
});
app.listen(3000, () => {
  console.log('Conneted 3000 port!');
});