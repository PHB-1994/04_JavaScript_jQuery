// 테스트용 회원 데이터
const userinfo = [
  {
    email: "test@test.com",
    phone: "010-1111-2222",
  },
  {
    email: "user@gmail.com",
    phone: "010-3333-4444",
  },
  {
    email: "admin@naver.com",
    phone: "010-5555-6666",
  },
  {
    email: "hello@daum.net",
    phone: "010-7777-8888",
  },
  {
    email: "sample@korea.kr",
    phone: "010-9999-0000",
  },
];

$(function () {
  $("#childEmail").focus();
});

// 1. 확인 버튼 클릭 시 중복 체크
$("#check").click(function () {
  const email = $("#childEmail").val();

  // TODO:
  // - localStorage에서 users 가져오기
  // - 중복 확인
  // - 결과 메시지 표시
  // - 중복되지 않으면 "사용하기" 버튼 활성화
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.length === 0) {
    users = userinfo;
    localStorage.setItem("users", JSON.stringify(userinfo));
  }
});

// 2. 사용하기 버튼 클릭
$("#send").click(function () {
  const email = $("#childEmail").val().trim();

  opener.document.$("#inputEmail").val(email);

  window.close();

  // TODO:
  // - 부모창의 이메일 입력란에 값 전달
  // - 팝업창 닫기
});
