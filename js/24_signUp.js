$(function () {
  // 1. 중복확인 버튼 클릭 시 팝업 열기
  $("#emailCheck").click(function () {
    // 팝업 설정
    const popupWidth = "450";
    const popupHeight = "450";
    // TODO: 화면 중앙에 팝업 띄우기
    const left = (window.screen.width - popupWidth) / 2;
    const top = (window.screen.height - popupHeight) / 2;

    const options = `
    width=${popupWidth},
    height=${popupHeight},
    left=${left},
    top=${top},
    `;

    window.open("24_emailCheck.html", "_blank", options);
  });

  // 2. 회원가입 폼 제출
  $("#signupForm").submit(function (e) {
    e.preventDefault();

    const email = $("#inputEmail").val();

    if (!email) {
      alert("이메일 중복확인을 먼저 해주세요");
      return;
    }

    const phone = $("#phone").val();

    if (!phone) {
      alert("전화번호를 입력해주세요.");
      return;
    }

    let newUser = {
      email: email,
      phone: phone,
    };

    let userList = JSON.parse(localStorage.getItem("users") || "[]");

    userList.push(newUser);

    alert("회원가입이 완료되었습니다.");

    $("#inputEmail, phone").val("");

    // 이메일 확인
    // 전화번호 확인
    // 새 회원 정보
    // 기존 회원 목록 가져오기
    // 새 회원 추가
    // - 성공 메시지 표시
    // 폼 초기화
    // 회원 목록 갱신

    // TODO:
    // - 입력값 가져오기
    // - localStorage에 저장
  });
});
