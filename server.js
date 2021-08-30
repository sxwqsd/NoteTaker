const express = require('express'); 
const fs  = require('fs');
const PORT = process.env.PORT || 3000;
const app = express();
const apiPath = require('./Paths/apiPath')
 const htmlPath = require('./Paths/htmlPath')

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiPath);
app.use('/', htmlPath);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});