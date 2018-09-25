const express = require('express');
const mongoose = require('mongoose');
const server = express();
const compression = require('compression');
const PORT = 8000;
const { connection, Schema } = mongoose

const morgan = require('morgan'); //remove
const bodyParser = require('body-parser');

const indexRoute = require('./server/routes/users');

server.use(morgan('dev')); //remove
server.use(compression());
server.use(bodyParser.json({ limit: '20mb' }));
server.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
server.use("/users", indexRoute);

mongoose.connect( 'mongodb://localhost:27017/test' ).catch(console.error)

server.listen(PORT, () => console.log(`Web Server running on port ${PORT}`));
