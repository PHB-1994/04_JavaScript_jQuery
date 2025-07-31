const URL = "../json/news.json";

$(function () {
  뉴스불러오기();
  $("#loadBtn").click(뉴스선택하기);
});

// select value 값에 대한 데이터만 검색하기 설정
// input && category -> 검색이 일치하는 데이터만 조회하기 *과제*

function 뉴스선택하기() {
  const selectNews = $("#categoryFilter").val();
  $.get(URL).done(function (data) {
    $("#newsContainer").html(
      data
        .filter((category) => category.category == selectNews)
        .map(
          (category) => `
            <div class="news-card">
                <div class="news-title">${category.title}</div>
                <div class="news-content">${category.content}</div>
            </div>
            `
        )
    );
  });
}

function 뉴스불러오기() {
  $.get(URL).done(function (data) {
    $("#newsContainer").html(
      data.map(
        (i) => `
            <div class="news-card">
                <div class="news-title">${i.title}</div>
                <div class="news-content">${i.content}</div>
            </div>
            `
      )
    );
  });
}
