import html2canvas from '../../node_modules/html2canvas/dist/html2canvas.js';
import Vue from '../../node_modules/vue/dist/vue.js';

var genearatePreview = function() {
 var element = document.getElementsByClassName('js-ogp-bg')[0];
 var emoji = document.getElementsByClassName('js-ogp-emoji')[0];
 console.log('test' + emoji.dataset.emoji);

 for (var i = 0; i < 5; i++){
  var ogpIconRow = document.createElement( "li" );
  for (var j = 0; j < 5; j++){
   var ogpIcon = document.createElement( "span" );
   var textNode = document.createTextNode(emoji.dataset.emoji);
   ogpIcon.appendChild(textNode);
   ogpIcon.setAttribute('class','c-img-ogp__icon')
   ogpIconRow.appendChild(ogpIcon);
  }
  element.appendChild(ogpIconRow);
 }
};


var generateImage = function() {
 console.log('generate!');
 html2canvas(document.getElementById("target")).then(function(canvas) {
  //aタグのhrefにキャプチャ画像のURLを設定
  const imgData = canvas.toDataURL();
  document.getElementById("generateImage").href = imgData;
 });
}

window.addEventListener("load",function(){
 genearatePreview();
 generateImage();

 // document.getElementById("generateImage").onclick = function() {
 //  generateImage();
 // };
});


new Vue({
 el: '#app',
 data: {
  newText: 'イヌかわいい',
  newTextColor: '#F45C63',
  newEmoji: '🐶',
  newGradienColorStart: '#FFF',
  newGradienColorEnd: '#F45C63'
 },
 methods: {
  addText: function() {
   generateImage();
  },
  addTextColor: function() {
   generateImage();
  },
  addEmoji: function() {
   generateImage();
  }
 }
});
