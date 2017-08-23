# Pizza Coffee Bagels

Pizza Coffee Bagels brings a simple answer to a simple question, where are the best 3 pizza, coffee, or bagel establishments nearby? Pizza Coffee Bagels uses the Yelp API, to provide users a no-nonsense listing of the top spots.

# Motivation

Living in New York City, the options for pizza, coffee, and bagels are endless, so I wanted to build an app that provides only the top places. 

# Tech/framework used

**Built with**
  * [Node.js](https://github.com/nodejs/node)
  * [Express](https://github.com/expressjs)
  * [Yelp API](https://www.yelp.com/developers)
  * [Inkscape](https://inkscape.org/en/)
  * [jQuery](https://jquery.com/)

# Screenshots

![alt text](http://i.imgur.com/EUplmfl.png)

# Features

  * Provides the top 3 locations for either pizza, coffee or bagels
  * Custom designed Bagel icon with InkScape
  * Uses jQuery hide/remove options

# Code Example

**Making an API call to Yelp for best pizza
```javascript
  app.get("/pizza", function(req, res){
      yelp.search({ term: "best slice of pizza", location: req.query.address, sort: 0 && 2, 
      limit: 3, radius_filter: 1000})
      .then(function(data){
          res.render("pizza", {data: data});
      })
      .catch(function (){
          res.render("error")
      })
  });
```

**Using jQuery to remove bagel/coffee icons after selecting pizza
```javascript
  $("#pizzaPic").on("click", function(){
    $("#bagelPic").remove();
    $("#coffeePic").remove();
    $("#coffeeForm").remove();
    $("#bagelForm").remove();
    $(this).removeClass('col-md-4 col-sm-4');
    $("#pizzaForm").fadeIn(1000);
    $("#backLink").fadeIn(1000);
  });
```