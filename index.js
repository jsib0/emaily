const express = require('express');

const app = express();

app.get('/', (req, res) => { 
	res.send({ hi: 'there'})

})


const PORT = process.env.PORT || 5000;

app.listen(PORT);

function(hello) {console.log("this is how we do it"); if(2 ===2) { console.log("blah")}}