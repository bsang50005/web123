const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not found 루크 쇼메이커')
})

app.use((err, req, res, next)=> {
    console.error(err.message)
    res.type('text/plain')
    res.statu(500)
    res.send('500 - Server Error')
})

app.listen(port, ()=> console.log(
    'Express started on http://localhost:$(port);' +
        'press CtrI-C to terminate...'))