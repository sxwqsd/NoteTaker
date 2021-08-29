const express = require ('express'); 
const fs  = require('fs');
const PORT = process.env.PORT || 3001;
const app = express();
const apiPath = require('')
const htmlPath = require('')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));
app.use('/api', apiPath);
app.use('/', htmlPath);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});