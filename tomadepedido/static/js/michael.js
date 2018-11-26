$("html").click(function() {
    $('#accordion input.search-client').css({ "width": "0%", "padding": "0px" });
});

$( "span.fa-search" ).click(function(e) {
    $(this).find('.search-client').css({ "width": "100%", "padding": "10px" });
    e.stopPropagation();
  });
 