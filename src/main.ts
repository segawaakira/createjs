import MyAsset = lib.MyAsset;
import {LoadAsset} from "./load-asset";

var stage = null;
var clock = null;
var asset:MyAsset = null;
var asset2:MyAsset = null;

//  ウィンドウのロードが終わり次第、初期化コードを呼び出す。
window.addEventListener("load", function () {
  new LoadAsset().init(startCreateJS);
});

function startCreateJS() {
  // Stageオブジェクトを作成します。表示リストのルートになります。
  stage = new createjs.Stage("myCanvas");
  clock = new createjs.Stage("clock");
  asset = new MyAsset();
  asset2 = new MyAsset();

  stage.addChild(asset);
  stage.addChild(asset2);

  // フレームレートの設定
//  createjs.Ticker.framerate = lib.properties.fps;
  // フレームレートに従う
//  createjs.Ticker.timingMode = createjs.Ticker.TIMEOUT;
  // 定期的に呼ばれる関数を登録
 // createjs.Ticker.addEventListener("tick", handleTick);
  asset2.y += 250;
  stage.update();
  createjs.Ticker.addEventListener("tick", time);
}

function handleTick() {
  // 描画を更新する
  stage.update();
  asset2.y += 100;
}



function time() {
  // // Stageオブジェクトを作成。表示リストのルートになります。
  // var stage = new createjs.Stage("myCanvas");
  // // Text インスタンスを作成
  var label = new createjs.Text("", "20px sans-serif", "red");
  // Text インスタンスは一度だけしか stage に追加しない
  clock.addChild(label);
  // 時間経過のイベント
  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick() {
    // 現在時間を取得
    var now = new Date();
    // 時間の数値を取得
    var h = now.getHours(); // 時(0〜23)
    var m = now.getMinutes(); // 分(0〜59)
    var s = now.getSeconds(); // 秒(0〜59)
    // 表示文言を作成
    var time = h + ":" + m + ":" + s;
    // Text インスタンスの文字列を更新
    label.text = time;
    // Stageの描画を更新
    clock.update();
  }

}