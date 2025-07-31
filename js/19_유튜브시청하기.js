// 검색버튼 무시 바로 나오는 영화 확인
// $.get()

// .done()
// results 결과에

// <p> 영화제목
// <p> 영화설명
// <img> 썸네일

// <p> 주소
$.get("../json/youtube.json").done(function (data) {
  console.log("json 확인");
  $("#results").html(
    `
        <p>영화 제목 : ${data.result.title}</p>
        <p>영화 설명 : ${data.result.description}</p>
        <img src="${data.result.thumbnail}"/>
        <p>주소 : ${data.result.url}</p>
        `
  );
});

$.get("../json/youtube.json").done(function (data) {
  const search = "#searchInput".val();
  if (data && data.result.title == search) {
    $("#results").html(
      `
        <p>영화 제목 : ${data.result.title}</p>
        <p>영화 설명 : ${data.result.description}</p>
        <img src="${data.result.thumbnail}"/>
        <p>주소 : ${data.result.url}</p>        
        `
    );
  }
});
