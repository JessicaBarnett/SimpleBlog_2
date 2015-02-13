this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["blog_archive"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", lambda=this.lambda, buffer = "\n	<section class=\"post-preview\">\n		<section class=\"post-details\">\n			<time datetime=\""
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"formatDate","hash":{},"data":data})))
    + "\"> "
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"formatDate","hash":{},"data":data})))
    + "</time>\n			<ul class=\"post-tags\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</ul>\n			<a href=\"blog_pages/"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\"> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1), depth0))
    + " comments </a>\n		</section>\n\n		<section class=\"post-content\">\n			<h2 class=\"post-title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n			<p class=\"byline\">"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + "</p>\n			<p>\""
    + escapeExpression(((helpers.limitTo200 || (depth0 && depth0.limitTo200) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"limitTo200","hash":{},"data":data})))
    + "...\"</p>\n			<a href=\"blog_pages/"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\">more</a>\n		</section>\n	</section>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "					<li><a href=\"#\">"
    + escapeExpression(lambda(depth0, depth0))
    + ", </a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.posts : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["App"]["templates"]["blog_post"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<section class=\"post-details\">\n	<time datetime=\""
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"formatDate","hash":{},"data":data})))
    + "\"> "
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"formatDate","hash":{},"data":data})))
    + "</time>\n\n	<ul class=\"post-tags\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</ul>\n\n	<a href=\"#\"> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.comments : stack1)) != null ? stack1.length : stack1), depth0))
    + " comments </a>\n</section>\n\n<section class=\"post-content\">\n\n	<h2 class=\"post-title\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n	<p class=\"byline\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.author : stack1), depth0))
    + "</p>\n	<p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.body : stack1), depth0))
    + "</p>\n\n</section>\n\n<section class=\"post-comments\">\n	Comments will go here\n</section>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<li><a href=\"#\">"
    + escapeExpression(lambda(depth0, depth0))
    + ", </a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.posts : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["App"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<p> This very simple blog was created by Jessica Barnett, with the intent to learn JQuery Promises, Gulp, Handlebars, Express, and node. </p>\n<section class=\"social-wrap\">\n  <a href=\"#\"><img class=\"social\" src=\"images/social/facebook.svg\" alt=\"go to facebook\"/></a>\n  <a href=\"#\"><img class=\"social\" src=\"images/social/twitter.svg\" alt=\"go to twitter\"/></a>\n  <a href=\"#\"><img class=\"social\" src=\"images/social/pinterest.svg\" alt=\"go to pinterest\"/></a>\n  <a href=\"#\"><img class=\"social\" src=\"images/social/vimeo.svg\" alt=\"go to vimeo\"/></a>\n</section>\n";
  },"useData":true});
this["App"]["templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<img class=\"main-logo\" src=\"/images/logo.svg\">\n<section class=\"main-title-and-nav\">\n	<h1 class=\"main-title\">A Simple Blog</h1>\n	<nav class=\"main-nav\">\n		<ul>\n			<li><a href=\"/angularBlog/index.html\">Home</a></li>\n			<li><a href=\"/angularBlog/about.html\">About</a></li>\n			<li><a href=\"/angularBlog/search.html\">Search</a></li>\n		</ul>\n	</nav>\n</section>\n";
  },"useData":true});