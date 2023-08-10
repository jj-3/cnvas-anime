// //クイズ文
// const question = 'アプリゲームで最も売れたゲームはどれ？';
// //選択肢
// const answers = [
//     '幻燈',
//     'ドラゴンナイト',
//     '第五人格',
//     '原神'
// ];
//回答
//const correct = '原神';

// let buttonIndex = 0;
// let buttonLength = $button.length;
// while(buttonIndex < $button.length) {
//      $button[buttonIndex].textContent = answers[buttonIndex];
//      buttonIndex ++;
// }

// クリックイベントの元の記述
// $button[0].addEventListener('click',(e) => {
//  clikHandler(e);
//     if(correct === e.target.textContent){
//         window.alert('お見事！');
//     }else{
//         window.alert('ブッブー！間違いだよん');
//     } 
// });


//クイズ文の応用
const quiz = [
    {
        question:'最近リリースされたアプリゲームはどれ？',
        answers: [
            '幻燈',
            'ドラゴンナイト',
            '第五人格',
            '原神',
        ],
        correct: '幻燈'
    },{
        question: 'アプリゲームで最も売れたゲームはどれ？',
        answers: [
            '幻燈',
            'ドラゴンナイト',
            '第五人格',
            '原神'
        ],
        correct: '原神'
    },{
        question: '8人対戦ができるゲームはどれ?',
        answers: [
            '幻燈',
            'ドラゴンナイト',
            '第五人格',
            '原神'
        ],
        correct: '第五人格'
    },{
        question: '原神の新バージョンに追加される新マップは？',
        answers: [
            'スメール',
            '稲妻',
            'モンド',
            'リーユエ'
        ],
        correct: '第五人格'
    }
]

//ボタンタグを定義する（htmlのオブジェクトをとってくる場合は＄を頭につけるお約束）
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const quizLength = quiz.length;
let quizIndex = 0;
let answersIndex = 0;

let score = 0;

//問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;//タイトルをクイズ文quistionに変換
    let buttonIndex = 0;
    quiz[answersIndex].answers.forEach(function() {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex ++;
  })
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('お見事！');
        score ++;
    }else{
        window.alert('ブッブー！間違いだよん');
    } 

    quizIndex ++;

//問題がある分だけ分岐実行する
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert('おつかれい！正解数は' + score + '/' + quizLength);
    }
};


//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex ++;
}


const btn = document.getElementById(omikuji);

btn.addEventListener('click' , () => {
    const reslut = ['大吉','中吉', '小吉','凶','大凶'];
    const number = Math.floor(Math.random() * reslut.length);
    btn.textContent = reslut[number];
});