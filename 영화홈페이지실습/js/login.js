$(function () {
  $("#login").click();
  $("#goToSignup").click(registerFn);
});

function registerFn() {
  // window.open("register.html", "_blank");
  opener.location.href = "register.html";
  window.close(); // 현재 페이지 닫기
}
