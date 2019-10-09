const express = require('express');
const path = require('path');
const compression = require('compression');

const port = process.env.PORT || 8080;
const app = express();

app.use(compression());

app.use(express.static(__dirname));



app.get('/', (req,res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(port, () => {
	console.log('listening on port ' + port);
})