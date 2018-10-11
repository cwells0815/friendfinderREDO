//======================================================================================
// Dependencies
// Series of npm packages that we will use to give our server useful functionality
//======================================================================================

var express = require("express");
var bodyParser = require("body-parser");

//======================================================================================
// Sets up express app
//======================================================================================

var app = express();
var PORT = process.env.PORT || 8080;

//======================================================================================
// Sets up express to parse data
//======================================================================================

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//======================================================================================
// The below points our server to a series of "route" files
//======================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//======================================================================================
// Listeners
//======================================================================================

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
})