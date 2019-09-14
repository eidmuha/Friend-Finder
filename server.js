//======================================================================
// DEPENDECNCIES
//======================================================================
var express = require("express");


//======================================================================
// EXPRESS CONFIGURATIN
//======================================================================
// set our node js app as an express server
var app = express();
var bodyParser = require('body-parser');

// set the port number
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json())
//======================================================================
// ROUTES
//======================================================================
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

//======================================================================
// LISTNER
//======================================================================
app.listen(PORT, ()=>{
    console.log("App listening on PORT: " + PORT)
});