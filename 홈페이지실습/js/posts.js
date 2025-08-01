// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1/comments?_limit=3

// 전역변수 posts.js 모든 곳에서 사용할 수 있는 변수이름
let 현재페이지 = 1;
let 전체게시물 = [];
console.log("전체게시물 1번 : ", 전체게시물);
const 페이지당게시물수 = 3; // 한 페이지당 10개

$(function () {
  // 1. posts 를 클릭하지 않고 가져오기
  // 한 페이지당 10개의 게시물만 볼 수 있도록 만들것
  getAllPosts();

  $("#prevBtn").click(function () {
    if (현재페이지 > 1) {
      현재페이지--;
      getPosts();
    } else {
      alert("첫 번째 페이지 입니다.");
    }
  });
  $("#nextBtn").click(function () {
    const 총페이지수 = Math.ceil(전체게시물.length / 페이지당게시물수);
    if (현재페이지 < 총페이지수) {
      현재페이지++;
      getPosts();
    } else {
      alert("마지막 게시물 입니다.");
    }
  });
});

// getAllPosts 초반에 데이터를 전체 가져오는 기능
function getAllPosts() {
  $.get("https://jsonplaceholder.typicode.com/posts").done(function (data) {
    전체게시물 = data; // 전체 데이터를 변수에 저장
    console.log("전체게시물 2번 : ", 전체게시물);
    getPosts(); // 첫 번째 페이지 표시
  });
}

// getPosts 페이지에 해당하는 게시물만 보여주는 기능
function getPosts() {
  // 현재 페이지에서 해당하는 게시물들만 계산
  const 시작하는게시물 = (현재페이지 - 1) * 페이지당게시물수;
  console.log("시작하는게시물 : ", 시작하는게시물);

  const 끝인덱스 = 시작하는게시물 + 페이지당게시물수;
  console.log("끝인덱스 : ", 끝인덱스);

  const 현재페이지게시물 = 전체게시물.slice(시작하는게시물, 끝인덱스);
  console.log("현재페이지게시물 : ", 현재페이지게시물);

  // 페이지 정보 업데이트
  const 총페이지수 = Math.ceil(전체게시물.length / 페이지당게시물수);
  $("#pageInfo").text(`페이지 ${현재페이지} / ${총페이지수}`);
  // $("#pageInfo").html("페이지" + 현재페이지 + "/" + 총페이지수); - 내가 해본것
  $("#postsResult").html(
    // map으로 순회하는 데이터를 모두 전달 받을 것!
    현재페이지게시물.map(
      (post) =>
        `
                <div class="success">
                    <div class="post-item" onclick="getComments(${post.id})">
                        <h4>${post.id}. ${post.title}</h4>
                        <p>${post.body}</p>
                    </div>
                </div>
                `
    )
  );
}

// 게시물에 해당하는 댓글 가져오기
// https://jsonplaceholder.typicode.com/posts/1/comments?_limit=3
function getComments(postId) {
  $.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=3`
  )
    .done(function (data) {
      $("#commentsResult").html(
        data.map(
          (comment) =>
            `
                    <h4>${comment.name}  (<span class="comment-email">${comment.email}</span>)</h4>
                    
                    <p class="comment-body">${comment.body}</p>
                    `
        )
      );
    })
    .fail();
}
