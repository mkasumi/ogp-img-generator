import html2canvas from '../../node_modules/html2canvas/dist/html2canvas.js';
import Vue from '../../node_modules/vue/dist/vue.js';



var generateImage = function() {
 html2canvas(document.getElementById("target")).then(function(canvas) {
  //aタグのhrefにキャプチャ画像のURLを設定
  const imgData = canvas.toDataURL();
  document.getElementById("generateImage").href = imgData;
 });
}

window.addEventListener("load",function(){
 generateImage();
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
