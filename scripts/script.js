
$(document).ready(function(){

  // Renders 2 sample templates.

  function renderTemplates() {
    $("#page-header").html(App.templates.header([]));
    $("#page-footer").html(App.templates.footer([]));

  }

  renderTemplates();
});
