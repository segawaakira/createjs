import MyAsset = lib.MyAsset;
import {LoadAsset} from "./load-asset";

var stage = null;
var asset:MyAsset = null;
var asset2:MyAsset = null;

//  ウィンドウのロードが終わり次第、初期化コードを呼び出す。
window.addEventListener("load", function () {
  new LoadAsset().init(startCreateJS);
});

function startCreateJS() {
  // Stageオブジェクトを作成します。表示リストのルートになります。
  stage = new createjs.Stage("myCanvas");
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
}

function handleTick() {
  // 描画を更新する
  stage.update();
  asset2.y += 100;
}