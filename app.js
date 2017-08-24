var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var Yelp = require('yelp');
var yelp = new Yelp({
    consumer_key: process.env.CK, 
    consumer_secret: process.env.CS,
    token: process.env.TKN,
    token_secret: process.env.TKN_SCT
});
var port = process.env.PORT || 8080;
var app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/pizza", function(req, res){
    yelp.search({ term: "best slice of pizza", location: req.query.address, sort: 0 && 2, 
    limit: 3, radius_filter: 1000})
    .then(function(data){
        res.render("pizza", {data: data});
    })
    .catch(function (){
        res.render("error");
        console.log("errors");
    })
});

app.get("/coffee", function(req, res){
    yelp.search({ term: "best coffee", location: req.query.address, sort: 0 && 2, 
    limit: 3, radius_filter: 1000})
    .then(function(data){
        res.render("coffee", {data: data});
    })
    .catch(function (){
        res.render("error");
    })
});    

app.get("/bagels", function(req, res){
    yelp.search({ term: "best bagels", location: req.query.address, sort: 0 && 2, 
    limit: 3, radius_filter: 1000})
    .then(function(data){
        res.render("bagels", {data: data});
    })
    .catch(function (){
        res.render("error");
    });
});

app.listen(port, process.env.IP, function(){
    console.log("PCB app has started!");
});
