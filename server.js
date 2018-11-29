const express  = require('express');
const path = require('path')
const app = express();
const port = 7000;

app.use('/static', express.static('build/static'))

app.use('*',function(req,res,next){
    console.log('------->>>>>>')
    console.log(req.params)
    next()
})

app.get('/', (req, res) => {
    console.log('espress blog request')
    res.setHeader('Content-Type', 'text/html');
    res.sendfile('./build/index.html')
})

// 因为在nginx上用blog做了反向代理
app.get('/blog', (req, res) => {
    console.log('espress blog request')
    res.setHeader('Content-Type', 'text/html');
    res.sendfile('./build/index.html')
})

app.listen(port,()=>console.log(`my_app listening on port ${port}!`))