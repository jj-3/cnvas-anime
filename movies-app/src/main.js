const btns = document.querySelectorAll('.button');
const outPut = document.querySelector('#cardWrap');

if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {

        //非同期処理　引数dirでボタンのdata値を入れて取得APIのURLを判別させる
        const getMovieData = async (dir) => {
          //URLの取得（サイトで登録したキーを含む）
          const url = 'https:api.themoviedb.org/3/movie/${dir}?api_key=5fb03482029e6be383f60f51c8ef4c12&language=ja&page=1`;

          const json = await fetch(url)
          .then((response) => {
            console.log('非同期成功');
            return response.json();
          }).catch (error => {
            console.error('同期処理失敗', error)
          });


          //console.log(json.results);

          if(json.results) {
            //map内だと加工の都度消してしまうので、成功判定があれば中身を消す
          }
        }
      })
    })
}