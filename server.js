const express  = require('express');
const path = require('path')
const app = express();
const port = 7000;

app.use('*',function(req,res,next){
    console.log('------->>>>>>')
    console.log(req.params)
    next()
})

// 本地使用
app.use('/static', express.static('build/static'))

app.get('/', (req, res) => {
    console.log('espress / request')
    res.setHeader('Content-Type', 'text/html');
    res.sendfile('./build/index.html')
})

// 服务器上启用
// app.use('/blog/static', express.static('build/static'))

// app.get('/blog', (req, res) => {
//     console.log('espress blog request')
//     res.setHeader('Content-Type', 'text/html');
//     res.sendfile('./build/index.html')
// })

app.listen(port,()=>console.log(`my_app listening on port ${port}!`))