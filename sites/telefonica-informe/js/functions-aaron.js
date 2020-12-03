
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(u){var f,d,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in window.document||9<=window.document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],w=Array.prototype.slice;if(u.event.fixHooks)for(var i=e.length;i;)u.event.fixHooks[e[--i]]=u.event.mouseHooks;var c=u.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,!1);else this.onmousewheel=n;u.data(this,"mousewheel-line-height",c.getLineHeight(this)),u.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null;u.removeData(this,"mousewheel-line-height"),u.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=u(e),i=t["offsetParent"in u.fn?"offsetParent":"parent"]();return i.length||(i=u("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return u(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function n(e){var t,i=e||window.event,n=w.call(arguments,1),o=0,l=0,s=0;if((e=u.event.fix(i)).type="mousewheel","detail"in i&&(s=-1*i.detail),"wheelDelta"in i&&(s=i.wheelDelta),"wheelDeltaY"in i&&(s=i.wheelDeltaY),"wheelDeltaX"in i&&(l=-1*i.wheelDeltaX),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(l=-1*s,s=0),o=0===s?l:s,"deltaY"in i&&(o=s=-1*i.deltaY),"deltaX"in i&&(l=i.deltaX,0===s&&(o=-1*l)),0!==s||0!==l){if(1===i.deltaMode){var a=u.data(this,"mousewheel-line-height");o*=a,s*=a,l*=a}else if(2===i.deltaMode){var h=u.data(this,"mousewheel-page-height");o*=h,s*=h,l*=h}if(t=Math.max(Math.abs(s),Math.abs(l)),(!d||t<d)&&g(i,d=t)&&(d/=40),g(i,t)&&(o/=40,l/=40,s/=40),o=Math[1<=o?"floor":"ceil"](o/d),l=Math[1<=l?"floor":"ceil"](l/d),s=Math[1<=s?"floor":"ceil"](s/d),c.settings.normalizeOffset&&this.getBoundingClientRect){var r=this.getBoundingClientRect();e.offsetX=e.clientX-r.left,e.offsetY=e.clientY-r.top}return e.deltaX=l,e.deltaY=s,e.deltaFactor=d,e.deltaMode=0,n.unshift(e,o,l,s),f&&window.clearTimeout(f),f=window.setTimeout(m,200),(u.event.dispatch||u.event.handle).apply(this,n)}}function m(){d=null}function g(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}u.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})});


$(document).ready(function() {

/* INICIO SRC ORIGINALES DE LOS VIDEOS EMBEBIDOS */ 
var src_ori_v1 = $("#videoContainer1 > div > iframe").attr('src');
var src_ori_v2 = $("#videoContainer2 > iframe").attr('src');
var src_ori_v3 = $("#videoContainer3 > iframe").attr('src');
var src_ori_v4 = $("#videoContainer4 > div > iframe").attr('src');
/* FIN SRC ORIGINALES DE LOS VIDEOS EMBEBIDOS */

/* INICIO VINCULACIÓN SCROLL CON FLECHAS */
$(".desplazamiento-flechas").each(function(index) {
  $(".desplazamiento-flechas").eq(index).mousewheel(function(e, delta) {
    posicion = index;

    console.log(posicion);
    console.log($('.section-element__play-btn-inner').eq(0));
  });
});
/* FIN VINCULACIÓN SCROLL CON FLECHAS */


/* INICIO MARCAR LINK MENÚ ACTIVO */
$( ".informe__scroll-area-container" ).scroll(function() {

    console.log(posicion);

    if( posicion <= 9){
      $('.informe__nav-item-indicator').removeClassExcept('informe__nav-item-indicator');
      $('.informe__nav-item-indicator').addClass('item-0');
    } else if( posicion > 9 && posicion <= 15 ){
      $('.informe__nav-item-indicator').removeClassExcept('informe__nav-item-indicator');
      $('.informe__nav-item-indicator').addClass('item-1');
    } else if( posicion > 15 && posicion <= 25 ){
      $('.informe__nav-item-indicator').removeClassExcept('informe__nav-item-indicator');
      $('.informe__nav-item-indicator').addClass('item-2');
    } else if( posicion > 25 && posicion <= 31 ){
      $('.informe__nav-item-indicator').removeClassExcept('informe__nav-item-indicator');
      $('.informe__nav-item-indicator').addClass('item-3');
    } else if( posicion > 31 && posicion <= 42 ){
      $('.informe__nav-item-indicator').removeClassExcept('informe__nav-item-indicator');
      $('.informe__nav-item-indicator').addClass('item-4');
    } else if( posicion > 42 ){
      $('.informe__nav-item-indicator').removeClassExcept('informe__nav-item-indicator');
      $('.informe__nav-item-indicator').addClass('item-5');
    }

    // Pausar videos si no se esta en esa diapositiva
    if(posicion != 3){
      $('#videoContainer1 > div > iframe').attr('src', src_ori_v1);

      /* Pruebas */
      $("#videoContainer1").children().eq(0).show();
      $("#videoContainer1").children().eq(1).show();
      /* Fin pruebas */
    }

    if(posicion != 13){
      $('#videoContainer2 > iframe').attr('src', src_ori_v2);
    }

    if(posicion != 20){
      $('#videoContainer3 > iframe').attr('src', src_ori_v3);
    }

    if(posicion != 48){
      $('#videoContainer4 > div > iframe').attr('src', src_ori_v4);

      $("#videoContainer4").children().eq(0).show();
      $("#videoContainer4").children().eq(1).show();
    }

});
/* FIN MARCAR LINK MENÚ ACTIVO */

/* INICIO CLIC IMAGEN IFRAME */

// Video 1
$("#videoContainer1").children().eq(0).click(function(){
    console.log($("#videoContainer1").children().eq(0));

    $("#videoContainer1").children().eq(0).hide();
    $("#videoContainer1").children().eq(1).hide();

    var src = $("#videoContainer1 > div > iframe").attr('src');
    $("#videoContainer1").children().eq(2).html('<iframe width="1920" height="1080" src="' + src + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen allow="autoplay" wmode="Opaque"></iframe>');

});

$("#videoContainer1").children().eq(1).click(function(){
    console.log($("#videoContainer1").children().eq(1));

    $("#videoContainer1").children().eq(0).hide();
    $("#videoContainer1").children().eq(1).hide();

    var src = $("#videoContainer1 > div > iframe").attr('src');
    $("#videoContainer1").children().eq(2).html('<iframe width="1920" height="1080" src="' + src + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen allow="autoplay" wmode="Opaque"></iframe>');

});

// Video 2
$("#videoContainer4").children().eq(0).click(function(){
    console.log($("#videoContainer4").children().eq(0));

    $("#videoContainer4").children().eq(0).hide();
    $("#videoContainer4").children().eq(1).hide();

    var src = $("#videoContainer4 > div > iframe").attr('src');

    console.log(src);

    $("#videoContainer4").children().eq(2).html('<iframe width="1980" height="1080" src="' + src + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen allow="autoplay" wmode="Opaque"></iframe>');

});

$("#videoContainer4").children().eq(1).click(function(){
    console.log($("#videoContainer4").children().eq(1));

    $("#videoContainer4").children().eq(0).hide();
    $("#videoContainer4").children().eq(1).hide();

    var src = $("#videoContainer4 > div > iframe").attr('src');

    console.log(src);

    $("#videoContainer4").children().eq(2).html('<iframe width="1980" height="1080" src="' + src + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen allow="autoplay" wmode="Opaque"></iframe>');

});


/* INICIO CONTROL VIDEOS */
$('.introVid').eq(0).click(function(){
  posicion++;
  var src = $("#videoContainer1 > div > iframe").attr('src');
  var mediaquery = window.matchMedia("(min-width: 993px)");
  if (mediaquery.matches) {
    $('.informe__scroll-area-container').animate({
          scrollLeft: $('.informe__scroll-area-container').scrollLeft() + ($(".desplazamiento-flechas").eq(3).offset().left -160)
      }, 1000);
  }else{
    $('.informe__scroll-area-container').animate({
          scrollTop: $('.informe__scroll-area-container').scrollTop() + ($("#videoContainer1").offset().top -160)
      }, 800);
  }

  $("#videoContainer1").children().eq(0).hide();
  $("#videoContainer1").children().eq(1).hide();

  $("#videoContainer1").children().eq(2).html('<iframe width="1920" height="1080" src="' + src + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen allow="autoplay" wmode="Opaque"></iframe>');
});

$('.introVid').eq(1).click(function(){
  var src = $("#videoContainer2 > iframe").attr('src');
  posicion++;
  if (mediaquery.matches) {
    $('.informe__scroll-area-container').animate({
          scrollLeft: $('.informe__scroll-area-container').scrollLeft() + ($(".desplazamiento-flechas").eq(13).offset().left - 160)
      }, 1000);
  }else{
    $('.informe__scroll-area-container').animate({
          scrollTop: $('.informe__scroll-area-container').scrollTop() + ($("#videoContainer2").offset().top -160)
      }, 800);
  }

  $("#videoContainer2").html('<iframe width="1920" height="1080" src="'+src+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen allow="autoplay" wmode="Opaque"></iframe>');
});

$('.introVid').eq(2).click(function(){
  var src = $("#videoContainer3 > iframe").attr('src');
  posicion++;
  if (mediaquery.matches) {
    $('.informe__scroll-area-container').animate({
          scrollLeft: $('.informe__scroll-area-container').scrollLeft() + ($(".desplazamiento-flechas").eq(20).offset().left - 160)
      }, 1000);
  }else{
    $('.informe__scroll-area-container').animate({
          scrollTop: $('.informe__scroll-area-container').scrollTop() + ($("#videoContainer3").offset().top -160)
      }, 800);
  }

  $("#videoContainer3").html('<iframe width="1920" height="1080" src="'+src+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen allow="autoplay" wmode="Opaque"></iframe>');
});

$('.introVid').eq(3).click(function(){
  var src = $("#videoContainer4 > div > iframe").attr('src');
  posicion++;
  if (mediaquery.matches) {
    $('.informe__scroll-area-container').animate({
          scrollLeft: $('.informe__scroll-area-container').scrollLeft() + ($(".desplazamiento-flechas").eq(48).offset().left - 160)
      }, 1000);
  }else{
    $('.informe__scroll-area-container').animate({
          scrollTop: $('.informe__scroll-area-container').scrollTop() + ($("#videoContainer4").offset().top -160)
      }, 800);
  }

  $("#videoContainer4").children().eq(0).hide();
  $("#videoContainer4").children().eq(1).hide();

  $("#videoContainer4").children().eq(2).html('<iframe width="1980" height="1080" src="' + src + '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen allow="autoplay" wmode="Opaque"></iframe>');
});
/* FIN CONTROL VIDEOS */


/* INICIO DESPLAZAMIENTO FLECHAS */
var posicion = 0;
var contadorScroll = 0;

var mediaquery = window.matchMedia("(min-width: 993px)");
if (mediaquery.matches) {
  $(window).keyup(function(event){  

    if(event.which == 39 && posicion < $(".desplazamiento-flechas").length-1){
      posicion++;
      $('.informe__scroll-area-container').animate({
        scrollLeft: $('.informe__scroll-area-container').scrollLeft() + ($(".desplazamiento-flechas").eq(posicion).offset().left - 160)
    }, 1000);
    } else if(event.which == 37 && posicion > 0){
      posicion--;
      $('.informe__scroll-area-container').animate({
        scrollLeft: $('.informe__scroll-area-container').scrollLeft() + ($(".desplazamiento-flechas").eq(posicion).offset().left - 160)
    }, 1000);
    }    

  }); 
}
/* FIN DESPLAZAMIENTO FLECHAS */


/* INICIO MARCAR POSICION PARA MENÚ SMOOT SCROLL */
$( "#menu-quehacemos" ).click(function() {
  posicion = 0;
});

$( "#menu-proyectos" ).click(function() {
  posicion = 10;
});

$( "#menu-educacion" ).click(function() {
  posicion = 16;
});

$( "#menu-empleabilidad" ).click(function() {
  posicion = 26;
});

$( "#menu-cultura" ).click(function() {
  posicion = 32;
});

$( "#menu-voluntariado" ).click(function() {
  posicion = 43;
});
/* FIN MARCAR POSICION PARA MENÚ SMOOT SCROLL */


/* INICIO SCROLL POR ENCIMA DEL IFRAME */
$('.section-element__video').click(function() {
  $( this ).find('iframe').css('pointer-events','auto');
});

$('.section-element__video').mouseleave(function() {
  $( this ).find('iframe').css('pointer-events','none');
});
/* FIN SCROLL POR ENCIMA DEL IFRAME */


/* INICIO SCROLL HORIZONTAL */
var velocidadScroll;
var os = getOS();

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
    velocidadScroll = 0.5;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
    velocidadScroll = 100;
  }

  return os;
}

var mediaquery = window.matchMedia("(min-width: 993px)");
if (mediaquery.matches) {
    $('.informe__scroll-area-container').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * velocidadScroll);
        e.preventDefault();
    });
}
/* FIN SCROLL HORIZONTAL */


/* INICIO SMOOTH SCROLL LINKS ACCESO RÁPIDO */
  $('.informe__nav a').click(function (event) {
    var $link = $(this).attr('href');
    event.preventDefault();

    var mediaquery = window.matchMedia("(min-width: 993px)");
	if (mediaquery.matches) {
	   $('.informe__scroll-area-container').animate({
      scrollLeft: $('.informe__scroll-area-container').scrollLeft() + $($link).offset().left -160
    }, 1000);
	} else {
	  $('.informe__scroll-area-container').animate({
      scrollTop: $('.informe__scroll-area-container').scrollTop() + $($link).offset().top
    }, 1000);
	}
  });
/* FIN SMOOTH SCROLL LINKS ACCESO RÁPIDO */

    
});