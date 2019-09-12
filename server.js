//======================================================================
// DEPENDECNCIES
//======================================================================
var express = require("express");


//======================================================================
// EXPRESS CONFIGURATIN
//======================================================================
// set our node js app as an express server
var app = express();

// set the port number
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
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