$(function () {
  // #add 버튼을 클릭했을 때
  // #boxArea 에 append("<div class='box'>박스</div>)
  $("#add").click(function () {
    $("#boxArea").append("<div class='box'>박스</div>");
  });
  // #del 버튼을 클릭했을 때
  // $(".box:last").remove
  $("#del").click(function () {
    $(".box:last").remove();
  });
});
