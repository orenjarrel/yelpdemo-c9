$(document).ready(function() {
  
  $(".read-more").click(function() {
    
    $("p:gt(0)").slideToggle("slow", function() {
    
    var visible= $("p:gt(0)").is(":visible");
    $(".read-more").text(visible? "Read Less":"Read More");
    });
  
  });
});