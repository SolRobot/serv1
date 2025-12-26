let express = require('express')
let app = express()

app.get('/folder/page', function(request, response){
    let x = request.query.foo
    response.send({foo: x})
})

app.listen(591)
