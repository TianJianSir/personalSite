const express  = require('express');
const app = express();
const port = 7000;

app.use('/blog/static', express.static('build/static'))

app.get('/', (req, res) => {
    console.log('espress get request')
    res.setHeader('Content-Type', 'text/html');
    res.sendfile('./build/index.html')
})

app.get('/blog', (req, res) => {
    console.log('espress blog request')
    res.setHeader('Content-Type', 'text/html');
    res.sendfile('./build/index.html')
})

app.listen(port,()=>console.log(`my_app listening on port ${port}!`))