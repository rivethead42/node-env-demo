const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello my name is: ' + process.env.FIRST_NAME + ' ' + process.env.LAST_NAME  + '!'))

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => console.log('Example app listening on port ' + app.get('port') + '!'))
