$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if (!a.test(this.href)) {
       if($(this).attr("target") != "_self"){
           $(this).attr("target","_blank");
       }
   }
});

$(".blog-post").mouseenter(function(){
  $(this).addClass('animated jello');
});
$(".blog-post").mouseleave(function(){
  $(this).removeClass('animated jello');
});
