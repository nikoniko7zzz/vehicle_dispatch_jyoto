//初期表示は非表示
document.getElementById("after_select").style.display ="none";
document.getElementById("driver-contena1").style.display ="none";
document.getElementById("driver-contena2").style.display ="none";
document.getElementById("driver-contena3").style.display ="none";
document.getElementById("driver-contena4").style.display ="none";
document.getElementById("driver-contena5").style.display ="none";

// clickBtn1を押した時の動き /////////////////////////
// 日付とチェックボックス値取得用
function clickBtn1() {

  // 担当者 取得
  const arr = [];
  const chk = document.form1.chk;

  for (let i = 0; i < chk.length; i++) {
    if (chk[i].checked) {//(chk[i].checked === true)と同じ
      arr.push(chk[i].value);
    }
  }

  // arrの数だけドライバーの枠を表示する
  if (arr.length >= 1){
    let driver1 = document.getElementById('driver1').textContent; //宣言
    document.getElementById('driver1').textContent = arr[0];
    document.getElementById("driver-contena1").style.display ="block";
  };
  if (arr.length >= 2){
    let driver2 = document.getElementById('driver2').textContent; //宣言
    document.getElementById('driver2').textContent = arr[1];
    document.getElementById("driver-contena2").style.display ="block";
  };
  if (arr.length >= 3){
    let driver3 = document.getElementById('driver3').textContent; //宣言
    document.getElementById('driver3').textContent = arr[2];
    document.getElementById("driver-contena3").style.display ="block";
  };
  if (arr.length >= 4){
    let driver4 = document.getElementById('driver4').textContent; //宣言
    document.getElementById('driver4').textContent = arr[3];
    document.getElementById("driver-contena4").style.display ="block";
  };
  if (arr.length >= 5){
    let driver5 = document.getElementById('driver5').textContent; //宣言
    document.getElementById('driver5').textContent = arr[4];
    document.getElementById("driver-contena5").style.display ="block";
  };

  // ドライバー選択枠を非表示する
  document.getElementById("managers_contena").style.display ="none";
  // 配車ゾーンを表示にする
  document.getElementById("after_select").style.display ="block";
}







/*
JavaScript を使用したドラッグ＆ドロップ イベントの処理
  合計8つのイベントハンドラがあります。
    ondrog、      実際のドロップを処理するコード
    ondragend、
    ondragenter、
    ondragexit、
    ondragleave、
    ondragover、  ドロップを許す処理
    ondragstart、 要素をドラッグした時
    ondrop
  (この例では、これらすべてを必要とするわけではありません。)
*/


// 要素をドラッグした時
function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

  event
    .currentTarget
    .style
    // .backgroundColor = '#29b6f6'; // ブルー
    .backgroundColor = '#ef9a9a'; // うすいピンク
  event
    .currentTarget
    .style
    .color = '#fff';
}

// ドロップを許す処理
function onDragOver(event) {
  event.preventDefault();
}

// 実際のドロップを処理するコード
function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event
    .dataTransfer
    .clearData();
}


