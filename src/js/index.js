import html2canvas from '../../node_modules/html2canvas/dist/html2canvas.js';

window.onload = function(){
 html2canvas(document.getElementById("target")).then(function(canvas) {
   const imgData = canvas.toDataURL();
   document.getElementById("result").src = imgData;
 });

 //ボタンを押下した際にダウンロードする画像を作る
   html2canvas(document.getElementById("target")).then(function(canvas) {
      //aタグのhrefにキャプチャ画像のURLを設定
      const imgData = canvas.toDataURL();
      document.getElementById("ogp_image").href = imgData;
  });
};