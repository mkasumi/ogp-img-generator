import html2canvas from '../../node_modules/html2canvas/dist/html2canvas.js';
import Vue from '../../node_modules/vue/dist/vue.js';
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
 var emoji = document.getElementsByClassName('js-ogp-emoji')[0];
 console.log('test' + emoji.dataset.emoji);

 for (var i = 0; i < 5; i++){
  var ogpIconRow = document.createElement( "li" );
  for (var j = 0; j < 5; j++){
   var ogpIcon = document.createElement( "span" );
   var textNode = document.createTextNode("🐶");
   ogpIcon.appendChild(textNode);
   ogpIcon.setAttribute('class','c-img-ogp__icon')
   ogpIconRow.appendChild(ogpIcon);
  }
  element.appendChild(ogpIconRow);
 }

};

window.addEventListener("load",function(){
 bg();
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
   if (!this.newText) {
    return;
   }
   this.newText.push({
     title: this.newText,
     titleColor: this.newTextColor
   });
   this.newText = "";
  },
  addTextColor: function() {
   if (!this.newTextColor) {
    return;
   }
   this.newTextColor.push({
    titleColor: this.newTextColor
   });
   this.newTextColor = "";
  },
  addEmoji: function() {
   if (!this.newEmoji) {
    return;
   }
   this.newEmoji.push({
    emoji: this.newEmoji
   });
   this.newEmoji = "";
  }
 }
});
