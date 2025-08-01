// bookTitle  author  검색초기화  result

$(function () {
  $("#도서검색").click(function () {
    // Json 파일에서 도서 데이터 가져오기
    $.get("../json/books.json", function (data) {
      // data 에서 length 를 활용해서 총 몇개의 도서가 존재하는지 확인
      // for 문이나 while 문 대신 총 갯수 가져오는 방법
      // 객체.keys(data.books).length
      // 객체는 length 사용할 때 단독으로 사용할 수 없고, keys values 키들이나 값들을 모아서 갯수 확인
      // 배열은 length 를 바로 확인할 수 있음

      const totalBooks = Object.keys(data.books).length;
      console.log("Object.keys(data.books) : ", Object.keys(data.books));
      console.log(
        "Object.keys(data.books).length : ",
        Object.keys(data.books).length
      );
      $("#result").html(`
                <div>총 ${totalBooks} 개의 도서가 존재합니다.</div>
                `);
      // 1. bookTitle 로 도서 값 val() 가져오기
      const bookTitle = $("#bookTitle").val();
      // 2. author 로 저자 값 val() 가져오기
      const author = $("#author").val();
      if (data.books[bookTitle]) {
        // 책 제목이 존재한다면
        // if(json 데이터에 저장된 저자와 소비자가 검색한 저자가 일치하는 항목이 존재한다면){
        if (data.books[bookTitle].author === author) {
          $("#result").removeClass("error");
          $("#result").addClass("success");
          $("#result").html(`
                            <div class="book-info">
                                <h3>도서 찾기 성공!<h3>
                                <p><strong>제목 : ${bookTitle}</strong></p>
                                <p><strong>저자 : ${author}</strong></p>
                                <p><strong>가격 : ${data.books[bookTitle].price}</strong></p>
                            `);

          // 도서 검색 버튼 숨기기
          // 검색초기화 버튼 보이기
          $("#도서검색").hide();
          $("#검색초기화").show();
        }
      } else {
        // 책 제목이 존재하지 않는다면
        $("#result").html(`${bookTitle}와 존재하는 책이 없습니다.`);
      }
    });
  });
});
