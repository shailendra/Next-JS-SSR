var isMobile = {};
isMobile.Android = function() { return navigator.userAgent.match(/Android/i);};
isMobile.BlackBerry = function() { return navigator.userAgent.match(/BlackBerry/i);};
isMobile.iOS = function() { return (navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))};
isMobile.iPad = function() { return (navigator.userAgent.match(/iPad/i) ||
  ((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && window.screen.width==768))};
isMobile.Opera = function() { return navigator.userAgent.match(/Opera Mini/i);};
isMobile.Windows = function() {return navigator.userAgent.match(/IEMobile/i);};
isMobile.Firefox = function() {return navigator.userAgent.match(/Firefox/gi);};
isMobile.InternetExplorer = function() {return navigator.userAgent.match(/MSIE/gi);};
isMobile.Opera = function() {return navigator.userAgent.match(/Opera/gi);};
isMobile.Safari = function() {return navigator.userAgent.match(/Safari/gi);};
isMobile.any = function() {
  return ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
};
$(document).ready(function(){
    
    console.log('dsdsf');
});