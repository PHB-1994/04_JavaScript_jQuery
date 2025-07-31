function selectAlbum() {
  const albumId = $("#albumId").val(); // 사용자가 선택한 value 값 가져오기
  $.get(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=3`
  ).done(function (data) {
    $("#result9").html(
      // data.map 형태로 map 내부 변수이름 photo 를 이용해서
      // select 선택을 진행할 때 filter 를 사용해라 를 만날 수 있음
      // 주소값에서 작성된 모든 데이터를 조회할 때는
      // filter  를 굳이 사용하지 않아도 됨!!!!
      data.map(
        (photo) => `
                 <strong> ${photo.title}</strong >
                 <p> ${photo.url}</p>
                `
      )
      // title url 을
      //  <strong> ${ title    }</strong >
      // <p> ${ url    }</p>형태로 가져오기
    );
  });
}
