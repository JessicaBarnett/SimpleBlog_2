var postDataModel = function(){
  var posts,
      request,

  makeRequest = function(){
    return $.get('/data/blogData.json', function(response){
      posts = convertDatesToObjects(response);
    })
    .done(function(response){
      console.log("success: ", response);
    })
    .fail(function(error){
      console.log("failure: ", error);
    });
  },

  convertDatesToObjects = function(posts){
    //converts all dates in the base json, both at the post and comment level from "mm/dd/yyyy" strings to date objects
    posts.forEach(function(post, index, array){
          post.date = new Date(post.date);
          post.comments.forEach(function(comment, index, array){
            comment.date = new Date(comment.date);
          });
         });
         console.log(posts);
    return posts;
  },


  //****  Public methods ****//

  getPromise = function(){
    return request.promise();
  },

  init = function() {
    request = makeRequest();
    return this; //chainable
  };

  return {
    init : init,
    getPromise : getPromise
  };

}();


/*******  Helpers ********/

(function registerHelpers(){

//takes a post's title and converts it to a url string
var toUrl = function(postTitle) {
  return postTitle.replace(/ /g, "_")
                  .replace(/[\.,-\/#!$%\^&\*;:{}=\-`~()']/g, "")
                  .toLowerCase();
};

//custom date fiter
var formatDate = function(dateObject){
	return (dateObject.getMonth()+1)+"/"+dateObject.getDate()+"/"+dateObject.getFullYear();
};

var limitTo200 = function(text) {
  return text.slice(0, 200);
};

//curries and returns a function that'll return a month name given a number (0-11)
var getMonthName = function() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return function(monthNumber){
    return months[monthNumber];
  };
};

Handlebars.registerHelper('getMonthName', getMonthName);
Handlebars.registerHelper('limitTo200', limitTo200);
Handlebars.registerHelper('formatDate', formatDate);
Handlebars.registerHelper('toUrl', toUrl);

})();


//****** Render Templates *******//

function renderTemplates(postsPromise) {

  $("#page-header").html(App.templates.header({}));
  $("#page-footer").html(App.templates.footer({}));

  postsPromise.done(function(postsData){
    $("#archive-list").html(App.templates.blog_archive({'posts': postsData}));
  });

}

//starts ajax call
postDataModel.init();

//document.ready not working?  had to move script to bottom...
$(document).ready(renderTemplates(postDataModel.getPromise()));
