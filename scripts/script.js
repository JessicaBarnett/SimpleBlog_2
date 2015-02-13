var postDataModel = (function(){
  var posts,
      request,

  //returns request for data
  makeRequest = function(){
    return $.get('/data/blogData.json', function(response){
      posts = convertDatesToObjects(response);
    })
    .done(function(response){
      console.log("success: ", response)
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

  getPromise = function(){
    return request.promise();
  },

  debug = function(){
    console.log(this);
    console.log("posts:  ", posts);
    console.log("request:   ", request);
  },

  //returns a promise that you can hook callbacks on
  //to do stuff after data loads.
  //data will be available
  init = function() {
    request = makeRequest();
    return this; //chainable
  };

  return {
    init : init,
    getPromise : getPromise,
    debug : debug
  }
})();



/*Possible helpers:

//angular filters:
// | limitTo(200);
// | date
// possibly helpers for sorting, when I get to the archive page

//custom date fiter
blogApp.filter('date', function($filter){
	return function(dateObject){
		return (dateObject.getMonth()+1)+"/"+dateObject.getDate()+"/"+dateObject.getFullYear();
	};
});

//filter to convert post titles into url strings
blogApp.filter('toUrl', function($filter){
	return function(postTitle){
		postTitle = postTitle.replace(/ /g, "_").replace(/[\.,-\/#!$%\^&\*;:{}=\-`~()']/g, "");
		return postTitle.toLowerCase();
	};
});

*/
//custom date fiter
var formatDate = function(dateObject){
	return (dateObject.getMonth()+1)+"/"+dateObject.getDate()+"/"+dateObject.getFullYear();
};

var limitTo200 = function(text) {
  return text.slice(0, 200);
}

//curries and returns a handlebars helper
var getMonthName = function() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return function(monthNumber){
    return months[monthNumber];
  }
}();

Handlebars.registerHelper('getMonthName', getMonthName);
Handlebars.registerHelper('limitTo200', limitTo200);
Handlebars.registerHelper('formatDate', formatDate);

function renderTemplates(postsPromise) {

  $("#page-header").html(App.templates.header({}));
  $("#page-footer").html(App.templates.footer({}));

  postsPromise.done(function(postsData){
    $("#archive-list").html(App.templates.blog_archive({'posts': postsData}));
  });


}

//starts ajax call
postDataModel.init();

//document.ready not working.  had to move script to bottom.  : (
$(document).ready(renderTemplates(postDataModel.getPromise()));
