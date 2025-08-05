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

    // TODO:
    // - 입력값 가져오기
    // - localStorage에 저장
    // - 성공 메시지 표시
  });
});

// $(function () {
//   showUserList();
// });
// // 1. 중복확인 버튼 클릭 시 팝업 열기
// $("#emailCheck").click(function () {
//   // 팝업 설정
//   const popupWidth = 400;
//   const popupHeight = 400;
//   // TODO: 화면 중앙에 팝업 띄우기

//   const width = (window.screen.width - popupWidth) / 2;
//   const height = (window.screen.height - popupHeight) / 2;

//   const options = `
//     width=${popupWidth},
//     height=${popupHeight},
//     left=${width},
//     top=${height},
//     `;

//   window.open("24_emailCheck.html", "_blank", options);
// });

// // 2. 회원가입 폼 제출
// $("#signupForm").submit(function (e) {
//   e.preventDefault();

//   const email = $("#inputEmail").val();
//   if (!email) {
//     alert("이메일 중복확인을 먼저 해주세요.");
//     return;
//   }

//   const phone = $("#phone").val();
//   if (!phone) {
//     alert("전화번호를 입력해주세요.");
//     return;
//   }

//   newUsers = {
//     email: email,
//     phone: phone,
//   };

//   let users = JSON.parse(localStorage.getItem("users") || "[]");

//   users.push(newUsers);

//   localStorage.setItem("users", JSON.stringify(users));

//   alert("회원가입이 완료되었습니다.");
//   // TODO:
//   // - 입력값 가져오기
//   // - localStorage에 저장
//   // - 성공 메시지 표시

//   $("#inputEmail").html("");
//   $("#phone").html("");

//   showUserList();
// });
