'use strict'

const express = require( 'express' );
var compression = require('compression')
let app = express();

app.use(compression());
app.use( express.static('./') );
// general route
app.get( '/', ( req, res ) => {
  res.sendFile( __dirname + '/index.html' );
})

var server = app.listen( 9000, _ => {
  console.log( 'server started. listening to 9000' );
})