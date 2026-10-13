// JavaScript
console.log('Hello world!');

const btn = document.querySelector('#btn');


// ボタンがクリックされたら、動作させる
btn.addEventListener('click', () => {
  //動作を記述
  // bodyにクラス名を付ける、または外す
  document.body.classList.toggle('black');
  // テキストを書き換える
  text.textContent = 'Dark mode';
  // もし、bodyにクラス名blackがついていたら
  if (document.body.classList.contains('black')) {
    text.textContent = 'Dark mode';
  } else {
    text.textContent = 'Light mode';
  }
});

const text = document.querySelector('#text');