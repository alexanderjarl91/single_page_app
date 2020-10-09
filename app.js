//
//declaring a function getContent with the arguments fragmentId and callback
function getContent(fragmentId, callback) {
  //declaring object within an object.
  var products = {
    frozen: {
      avocado:
        '<div class="products"><div class="product"><img class="avo" src="images/avocado2.png" alt="" /><p>Avocado</p></div></div>',
      guacamole:
        '<div class="products"><div class="product"><img class="avo" src="images/guac.png" alt="" /><p>Guacamole</p></div></div>',
    },

    sauces: {
      avocado:
        '<div class="products"><div class="product"><img class="avo" src="images/sauce.png" alt="" /><p>Mustard</p></div></div>',
      guacamole:
        '<div class="products"><div class="product"><img class="avo" src="images/sauce2.png" alt="" /><p>Ketchup</p></div></div>',
    },

    toothpicks: {
      toothpick:
        '<div class="products"><div class="product"><img class="avo" src="images/toothpicks.png" alt="" /><p>Toothpicks</p></div></div>',
    },
  };
  //running callback (in this case, after running getContent with the second argument value being the insertFunction -
  //it's insertContent) and setting the content argument value to the object value of the object that shares a key with the fragmentId variable.
  callback(Object.values(products[fragmentId])); //call back all object values of the item products with the key matching the fragment ID.

  // url defined as fragmentId and fragmentId with the hash
  var url = fragmentId + "#" + fragmentId;
  console.log(url);
  function newUrl() {
    // URL will change to /plate/burger
    history.pushState("products", null, url);
  }
  newUrl();
}

//change color of active nav
// if (location.hash === "#frozen") {
//   console.log("lol");
// }

//declaring a function loadContent
function loadContent() {
  //declaring contentDiv as the html content of divs with the id "app"
  var contentDiv = document.getElementById("app");
  //declaring fragmentId as the current hash minus the first character (the hashtag itself)
  var fragmentId = location.hash.substr(1);

  //declaring a function insertContent that has an argument "content"
  var insertContent = function (content) {
    //setting the innerHTML to empty
    contentDiv.innerHTML = "";
    //looping through the array of objects
    for (i = 0; i < content.length; i++) {
      //setting the innerHTML to each looped out item
      contentDiv.innerHTML = contentDiv.innerHTML + content[i];
    }
  };
  //run the getContent function with the values fragmentId and the insertContent function
  getContent(fragmentId, insertContent);
}

//setting a default hash. if theres no hash, set the hash to #frozen
if (!location.hash) {
  location.hash = "#sauces";
}

//run function LoadContent.

loadContent();

//listen for a change in hash and run loadcontent function every time it changes
window.addEventListener("hashchange", loadContent);

//link variable defined
var links = document.querySelectorAll("nav > a");
//run a function with a link argument for each link in links
links.forEach(function (link) {
  //listen for clicks on link, run function with e arguement
  link.addEventListener("click", function (e) {
    //prevent link from navigating/refreshing page
    e.preventDefault();
    //set the hash to this specific links hash
    location.hash = e.target.hash;
  });
});
