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

var bg = function() {
	var element = document.getElementsByClassName('js-ogp-bg')[0];

	for(var i = 1; i <= 5; i++){
    var ogpIcon = document.createElement( "span" );
    var textNode = document.createTextNode("🐶");
    ogpIcon.appendChild(textNode);
    ogpIcon.setAttribute('class','c-img-ogp__icon')
    element.appendChild(ogpIcon);
}

};

window.addEventListener("load",function(){
  bg();
});