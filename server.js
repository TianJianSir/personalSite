const express  = require('express');
const app = express();
const port = 7000;

app.use('/', express.static('build'))
app.use('/static', express.static('build/static'))

app.listen(port,()=>console.log(`my_app listening on port ${port}!`))