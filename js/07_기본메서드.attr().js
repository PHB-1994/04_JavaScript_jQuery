$(function () {
  $("#changeImage").click(imgFn);
  $("#changeAlt").click(latFn);
  $("#changeLink").click(linkFn);
  $("#disableInput").click(disInputFn);
  $("#enableInput").click(enInputFn);
  $("#checkAttr").click(attrFn);
  $("#checkProp").click(propFn);
  $("#setData").click(setFn);
  $("#getData").click(getFn);
});

// 1. 이미지 속성 변경
function imgFn(e) {
  e.preventDefault();
  $("#moviePoster").attr("src", "../image/25.png");
}

function latFn(e) {
  e.preventDefault();
  $("#moviePoster").attr("alt", "변경된 alt 설명 속성 테스트");
  alert("alt 속성이 변경되었습니다. F12 눌러 확인하세요.");
  $("#moviePoster").attr("id", "logo");
  alert("alt 속성이 변경되었습니다. F12 눌러 확인하세요.");
}

function linkFn(e) {
  e.preventDefault();
  $("#link").attr("href", "https://google.com");
  $("#link").text("구글 링크로 변경되었습니다.");
}

function disInputFn(e) {
  e.preventDefault();
  // $("#textInput").attr("disabled", "disabled");
  // $("#textInput").attr("disabled", true);
  // $("#textInput").attr("disabled", "");
  //$("#textInput").addClass("disabled");
  $("#textInput").attr("disabled", "").addClass("disabled");
}
// disabled 입력창 비활성화

function enInputFn(e) {
  e.preventDefault();
  // $("#textInput").removeAttr("disabled");
  // $("#textInput").removeClass("disabled");
  $("#textInput").removeAttr("disabled").removeClass("disabled");
}
/*
.attr()
HTML 코드에 써진 속성 초기값 그대로 보임
속성을 설정할 때 변경 사항까지 작성해야함

.prop()
사용자와 상호작용하면서 현재 상태를 확인할 수 있음
*/
function attrFn(e) {
  e.preventDefault();

  const checked = $("#checkbox").attr("checked");
  // attr 로 속성 변경을 원한다면
  // $("#checkbox").attr("checked", "checked");
  // $("#checkbox").attr("checked", ture);
  // $("#checkbox").attr("checked", "");
  // 로 속성 설정을 변경하는 값까지 추가해야함

  alert(".attr() 결과 : " + (checked || "없음"));
}

function propFn(e) {
  e.preventDefault();

  const checked = $("#checkbox").prop("checked");
  alert(".prop() 결과 : " + checked);
}

function setFn(e) {
  e.preventDefault();
  $("#dataElement").attr("data-id", "12345");
  alert("data-id 가 설정되었습니다.");
}

function getFn(e) {
  e.preventDefault();
  const dataId = $("#dataElement").attr("data-id");
  alert("data-id : " + (dataId || "없음"));
}
