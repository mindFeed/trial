$(document).keypress( function(event){
  if(event.key===enter){
  var path="C:\\Users\\Pankaj\\Desktop\\mindfeed\\"+document.getElementById("myText").value+".html";
  $(".search-btn").attr("href",path);
}
})


$(".search-btn").click( function(){
  var path="C:\\Users\\Pankaj\\Desktop\\mindfeed\\"+document.getElementById("myText").value+".html";
  $(".search-btn").attr("href",path)
})


$(".content-img").click(function(){
  $(".content-div").toggleClass("col-md-4");
  $(".content-div").toggleClass("col-md-12");
  $(".content-img").toggleClass("content-img-toggle");
  $(".content-space").toggleClass("content-space-toggle")
  $(".content-review-box").toggleClass("cnt-toggle")

})
