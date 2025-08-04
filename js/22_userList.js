$(function () {
  showUsers();
  $("#clear-all").click(clearAll);
});

function showUsers() {
  // 기존 회원 목록 가져오기 (없으면 빈 배열 형태) 가져온 값을 userList 변수이름에 담아두기
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  // 사용자 총 회원수 표시 user.length

  // 사용자가 없으면 users.length === 0 no-users 볼 수 있음!

  // map 사용해서 HTML 로 소비자가 유저 리스트 목록을 확인할 수 있도록 설정

  const userHTML = userList.map(
    (u) =>
      `
    <div class="user-item">
        <div class="user-id">아이디 : ${u.username}</div>
        <div class="user-pw">비밀번호 : ${u.password}</div>
    </div>
    
    `
  );

  $("#user-list").html(userHTML);
}

function clearAll(e) {
  if (confirm("모든 회원 데이터를 삭제하시겠습니까? ")) {
    localStorage.removeItem("userList");
    alert("모든 상품이 삭제되었습니다.");
    location.reload();
  }
}
