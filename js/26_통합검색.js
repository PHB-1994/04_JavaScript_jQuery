$(function () {
  /**
   * #searchInput
   * #searchBtn
   * #result
   */
  $("#searchBtn").click(searchFn);
  loadBooks();

  // 엔터키 검색 추가
  

  // 실시간 검색 기능 추가
});

// 책 데이터 변수
let books = {};

// JSON 파일에서 책 데이터를 불러오기
function loadBooks() {
  $.get("../json/books.json")
    .done(function (data) {
      books = data.books;
      console.log("책 데이터 가져오기 완료!");
    })
    .fail();
}

// 검색 기능
function searchFn() {
  // 검색한 데이터 가져오기
  const keyword = $("#searchInput").val().trim();
  // localStorage 에 저장된 데이터를 가져오면
  // Object.values 대신 JSON.parse 를 이용해야함
  const allBooks = Object.values(books);
  let result;

  if (!keyword) {
    // 키워드가 존재하지 않을 때는
    result = allBooks; // 모든 책 데이터 보여주기
  } else {
    result = allBooks.filter(
      (book) => book.title.includes(keyword) || book.author.includes(keyword)
    );
  }
  displayResult(result, keyword);
}

function displayResult(result, keyword) {
  const 검색결과들 = $("#result");

  if (result.length === 0) {
    검색결과들.html(`<div class="no-result">검색 결과가 없습니다.</div>`);
    return; // 아래 기능들 실행 못하도록 돌려보내기
  }

  // 검색 결과가 존재한다면
  const bookHTMLS = 검색결과들.map((book) => {
    let title = book.title;
    let author = book.author;

    if (keyword) {
      title = book.title.replace(
        new RegExp(keyword, "gi"),
        `<span class="highlight">${keyword}</span>`
      );
      author = book.author.replace(
        new RegExp(keyword, "gi"),
        `<span class="highlight">${keyword}</span>`
      );
    }
    return `
    <div class="book-item">
        <div class="book-title">${title}</div>
        <div class="book-author">${author}</div>
        <div class="book-price">${book.price.toLocaleString()}원</div>
    `;
  });
  검색결과들.html(bookHTMLS.join(""));
}

/*

  allBooks.filter((book) => book.title.includes(keyword) || book.author.includes(keyword)

  .filter() : 배열에서 조건에 맞는 것들만 새 배열로 만들어준다.
  includes() : keyword 라는 명칭이
                book.title.includes(keyword)    book.title 내에 포함되어 있는가?
                || = or 또는 둘중 하나라도 존재하는가? 둘다 존재하는가? 그럼 참!
                book.author.includes(keyword)   book.author 내에 포함되어 있는가?

    replace() : 찾은 키워드를 다른 텍스트로 바꾸기
                    영어로 작성했을 경우 대소문자 구분을 무시하기 위한 방법


                    replace(new RegExp(keyword, "gi")          ,        `요소`      );
                              RegExp 정규 표현식에서 검색한 키워드의
                                                    g = 전체적으로  i = 대소문자 무시

 
  // 해리포터에서 해리 만 검색했을 경우 해리 대소문자 무시하고 해리 글자에만 highlight 효과를 주겠다는 의미
  book.title.replace(new RegExp(keyword, "gi"),`<span class="highlight">${keyword}</span>`


  💛 map 세 가지 방법이 존재 💛
  `` 백식   방식 : 리스트.map((매개변수이름) => `` )    ${} 를 사용해서 변수 이름과 html 태그를 혼합해서 사용 가능
  {} 중괄호 방식 : 리스트.map((매개변수이름) => {} )    map 내에 자바스크립트를 이용해서 복잡한 로직을 작성할 때 사용
                                                        return 으로 로직 결과를 반환할 때 주로 사용
  () 소괄호 방식 : 리스트.map((매개변수이름) => () )    `` 과 동일하나 return 없이 값 반환할 때 주로 사용
  
  
  */
