$(document).ready(function () {

  // Responsive menu
$('.hamburger-btn').click(function (event) {
  if ($('.informe__nav-container').hasClass('active')) {
    $('.informe__nav-container').removeClass('active');
  } else {
    $('.informe__nav-container').addClass('active');
  }
});

jQuery.fn.removeClassExcept = function (val) {
  return this.each(function () {
      $(this).removeClass().addClass(val);
  });
};

$('.informe__nav-item').click(function (event) {
  $('.informe__nav-item-indicator').removeClassExcept('informe__nav-item-indicator');
  $('.informe__nav-item-indicator').addClass('item-' + $(this).index());
})

$('.modal-window__close').click(function (event) {
  
    $('.modal-window__wrapper').fadeOut();
  
   
});

  var md = new MobileDetect;
  
  

  if ($(window).width() > 992) {
  
  $('.modal-window__wrapper').addClass('active');
  $('.modal-window__bg').fadeIn(1000);
  $('.modal-window').fadeIn(2000);
    $(window).keyup(function (event) {
      $('.modal-window__wrapper').fadeOut(1000);
    });
    $(".informe__scroll-area-container").scroll(function () {
      $('.modal-window__wrapper').fadeOut(1000);
    });
   
    
  // init Scroll Magic controller
  var controller = new ScrollMagic.Controller({ container: ".informe__scroll-area-container", vertical: false });

    // Quienes Somos 
  var quienesSomos_TL = new TimelineLite();
  quienesSomos_TL
    .fromTo(".section__quienes-somos__bg", 1.5, { scale: 0.98, right: '27.6%', y: 0, bottom: '-66%' }, { scale: 0.6, rotationZ: 0.01, right: '-100px', y: -300, bottom: '-70%', ease: ExpoScaleEase.config(0.5, 1) })
    .fromTo(".quienes-somos__heading-dos", 0.75, { opacity: 0 }, { opacity: 1 })
	var QuienesSomos_scene = new ScrollMagic.Scene({triggerElement: ".section__quienes-somos", duration: 850, offset: 700})
    .setTween(quienesSomos_TL)
    .addTo(controller);
  
  // Social Digital 
  var SocialDigital_TL = new TimelineLite();
  SocialDigital_TL
      .from(".section__social-digital .text", 0.25, { x: 200, opacity: 0, ease: Power0.easeNone  })
      .to(".section__social-digital .section-element__play-btn", 1 , {className: "+=pulse"},"+=0.75")
  var SocialDigital_Scene = new ScrollMagic.Scene({ triggerElement: ".section__social-digital", duration: 0, offset: -150 })
    .setTween(SocialDigital_TL)
    .addTo(controller);
    
  // Social Digital Video 
  var SocialDigitalVideo_TL = new TimelineLite();
  SocialDigitalVideo_TL
    .from(".section__social-digital-video .section-element__video", 1, { opacity: 0 })
  var SocialDigitalVideo_Scene = new ScrollMagic.Scene({ triggerElement: ".section__social-digital-video", duration: 0, offset: -150 })
    .setTween(SocialDigitalVideo_TL)
    .addTo(controller);
  
  // Cumplido Timeline 
  var Cumplido_TL = new TimelineLite();
   Cumplido_TL
    .from(".section__cumplido .section__cumplido__heading", 0.25, { x: 400, ease: Power2.easeOut })
    .from(".section__cumplido .section__imagen-full-bg", 0.5, { opacity: 0,  ease: Power2.easeOut})
    .from(".section__cumplido .section__cumplido__heading-dos", 0.25, { opacity: 0 }, "-=0.5")
  var Cumplido_Scene = new ScrollMagic.Scene({ triggerElement: ".section__cumplido", duration: 0, offset: -100 })
    .setTween(Cumplido_TL)
    .addTo(controller);
  var CumplidoDos_TL = new TimelineLite();
  CumplidoDos_TL
    .from(".section__cumplido .section-element__numero-dato", 0.25, { opacity: 0 }, "numeros-=0.1")
  var CumplidoDos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__cumplido .section__imagen-full-bg", duration: 0, offset: 250 })
    .setTween(CumplidoDos_TL)
    .on("enter", function (e) {
      $('#dato-cumplido-1').html(7300);
    })
    .on("leave", function (event) {
      $('#dato-cumplido-1').html(0);
     })
    .addTo(controller);  
    var CumplidoBGTween =
  TweenMax.to(".section__cumplido .section__imagen-full-bg", 2, { backgroundPositionX: 0 });
var CumplidoBG_Scene = new ScrollMagic.Scene({ triggerElement: ".section__cumplido .section__imagen-full-bg", duration: '50%', offset: -100 })
    .setTween(CumplidoBGTween)
    .addTo(controller);

  // Que Hacemos
  var QueHacemos_TL = new TimelineLite();
  QueHacemos_TL
    .from(".section__quehacemos  .section__quehacemos__heading-uno", 0.25, { x: 200, opacity: 0, ease: Power0.easeNone  })
    .from(".section__quehacemos  .section__quehacemos__texto-heading", 0.75, { x: 600, opacity: 0 }, "-=0.1")
    .from(".section__quehacemos  .section__quehacemos__texto", 0.75, { x: 800, opacity: 0 }, "-=0.25")
    .from(".section__quehacemos  .section__imagen-full-bg", 0.75, { opacity: 0})
  var QueHacemos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__quehacemos", duration: 0, offset: -100 })
    .setTween(QueHacemos_TL)
    .addTo(controller);
  var sectionImagenFullBgAnimation =
    TweenMax.from(".section__quehacemos .section__imagen-full-bg", 2, { scale: 1.2 });  
   var sectionImagenFullBgAnimation_Scene = new ScrollMagic.Scene({ triggerElement: ".section__quehacemos ", duration: 1000, offset: 800 })
    .setTween(sectionImagenFullBgAnimation)
    .addTo(controller);

  // Presentes 
    var PresentesUno_TL = new TimelineLite();
    PresentesUno_TL
    .from(".section__presentes-texto  .section__presentes__h-uno", 0.25, { x: 400, opacity: 0, ease: Power0.easeNone })
    .from(".section__presentes  .section__imagen-full-bg", 0.25, { x: 400, opacity: 0, ease: Power0.easeNone })
    .from(".section__presentes  .section__presentes__h-dos", 0.25, { x: 400, opacity: 0, ease: Power0.easeNone },"-=1.0")

  var PresentesUno_Scene = new ScrollMagic.Scene({ triggerElement: ".section__presentes-texto", duration: 0, offset: -20 })
    .setTween(PresentesUno_TL)
    .addTo(controller);
  var PresentesDos_TL = new TimelineLite();
    PresentesDos_TL
      .from(".section__presentes  .section__presentes__h-tres", 0.25, { x: 400, opacity: 0, ease: Power0.easeNone })
      .to(".section__presentes", 2, {})
      .to(".section__presentes  .section__presentes__h-tres", 0.25, { opacity: 0 }, "text-fadeout")
      .to(".section__presentes  .section__presentes__h-dos", 0.25, { opacity: 0 }, "text-fadeout")
      .from(".section__presentes  .section__presentes__heading-paises",0.5, { x: 1400, opacity: 0, display: 'none', ease: Power0.easeNone  }, "-=0.5")
    var PresentesDos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__presentes ", duration: 0, offset: 0 })
      .setTween(PresentesDos_TL)
      
      .addTo(controller);
      var PresentesTres_TL = new TimelineLite();
      PresentesTres_TL
        // .from(".section__presentes  .section__presentes__h-tres", 0.25, { x: 400, opacity: 0, ease: Power0.easeNone })
        // .to(".section__presentes", 1.5, {})
       .to(".section__presentes  .section__presentes__h-tres", 0.25, { opacity: 0}, "text-fadeout")
       .to(".section__presentes  .section__presentes__h-dos", 0.25, { opacity: 0 }, "text-fadeout")
      //  .to(".section__presentes  .section__presentes__h-tres", 0, { display: 'none'}, "text-dnone+=0.25")
      //  .to(".section__presentes  .section__presentes__h-dos", 0, { display: 'none' }, "text-dnone+=0.25")
       .from(".section__presentes  .section__presentes__heading-paises",0.5, { x: 1400, opacity: 0, display: 'none', ease: Power0.easeNone  }, "-=0.5")
    // Presentes Scene PIN
      var PresentesTres_Scene = new ScrollMagic.Scene({ triggerElement: ".section__presentes__h-tres ", duration: 0, offset: 100 })
       // .setTween(PresentesTres_TL)
        
      .addTo(controller);
  
  // Proyectos Timeline
  var Proyectos_TL = new TimelineLite();
  Proyectos_TL
    .from(".section__proyectos  .section__proyectos__palabras", 2, { x: 200 })
    .from(".section__proyectos  .proyectos__palabra-uno", 2, { x: 100 }, "palabras-main")
    .from(".section__proyectos  .proyectos__palabra-dos", 2, { x: 50 }, "palabras-main")
    .from(".section__proyectos  .proyectos__palabra-tres", 2, { x: 250 }, "palabras-main")
    .from(".section__proyectos  .proyectos__palabra-cuatro", 2, { x: 50 }, "palabras-main")
  // Proyectos Scene
  var Proyectos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__proyectos", duration: 1100, offset: 100 })
    .setTween(Proyectos_TL)
    .addTo(controller);
  
  //Section Sociedad Video Texto Timeline
  var SociedadVideoTexto_TL = new TimelineLite();
  SociedadVideoTexto_TL
    .from(".section__sociedad-video-texto  .text", 0.25, { x: 200, opacity: 0, ease: Power0.easeNone })
    .to(".section__sociedad-video-texto .section-element__play-btn", 1 , {className: "+=pulse"},"+=1.0")
  //Section Sociedad Video Texto Scene
  var SociedadVideoTexto_Scene = new ScrollMagic.Scene({ triggerElement: ".section__sociedad-video-texto", duration: 0, offset: 80 })
    .setTween(SociedadVideoTexto_TL)
    .addTo(controller);

  // Sociedad Video Timeline 
  var SociedadVideo_TL = new TimelineLite();
  SociedadVideo_TL
    .from(".section__sociedad-video .section-element__video", 1, { opacity: 0 })
  // Sociedad Video Scene
  var SociedadVideo_Scene = new ScrollMagic.Scene({ triggerElement: ".section__sociedad-video", duration: 0, offset: -300 })
    .setTween(SociedadVideo_TL)
    .addTo(controller);
  
  // Transformacion Texto
  var TransformacionTextoTween =
      TweenMax.from(".section__transformacion .section__transformacion__heading", 0.25, { x: 600, opacity: 0, ease: Power0.easeNone  }, "entrada")
  var TransformacionTexto_Scene = new ScrollMagic.Scene({ triggerElement: ".section__transformacion", duration: 0, offset: 100 })
  .setTween(TransformacionTextoTween)
  .addTo(controller);
  // Transformacion Timeline
  var Transformacion_TL = new TimelineLite();
  Transformacion_TL
    .to(".section__transformacion .section__col-img img", 2, { width: "150%", height: "150%" })
    .to(".section__transformacion .section__col-img img",2, {width: "100%", height: "100%"})
  // Transformacion Scene
  var Transformacion_Scene = new ScrollMagic.Scene({ triggerElement: ".section__transformacion", duration: 1200, offset: 100 })
    .setTween(Transformacion_TL)
    .addTo(controller);
  
  // Educacion Timeline // section__imagen-full-bg con section-element__big-text-block
  var Educacion_TL = new TimelineLite();
  Educacion_TL
    .from(".section__educacion .section-element__big-text-block ", 0.4, { x: 200, opacity: 0, ease: Power0.easeNone }, "educacion")
    .from(".section__educacion .section__imagen-full-bg", 0.5, { x: 500, opacity: 0, ease: Power0.easeNone }, "educacion+=0.2")
  // Educacion Scene
  var Educacion_Scene = new ScrollMagic.Scene({ triggerElement: ".section__educacion", duration: 0, offset: -280 })
    .setTween(Educacion_TL)
    .addTo(controller);
  
  //Promovemos
  var Promovemos_TL = new TimelineLite();
  Promovemos_TL
    .from(".section__promovemos .promovemos__text-inside", 0.5, { x: 100, opacity: 0 }, "texto")
    .from(".section__promovemos .section-element__rect", 1, { x: 500 }, "texto", "-=0.25") 
  var PromovemosBGTween =
  TweenMax.from(".section__promovemos .section__imagen-full-bg", 2, { scale: 1.5 });
  var Promovemos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__promovemos", duration: 0, offset: -100 })
    .setTween(Promovemos_TL)
    .addTo(controller);
  var PromovemosBG_Scene = new ScrollMagic.Scene({ triggerElement: ".section__promovemos .section__imagen-full-bg__wrapper", duration: 1150, offset: -500 })
    .setTween(PromovemosBGTween)
    .addTo(controller);
  
  // Educacion Video Texto Animacion
  var EducacionVideoTexto_TL = new TimelineLite();
  EducacionVideoTexto_TL
    .from(".section__educacion-video-texto  .text", 0.20, { x: 200, opacity: 0, ease: Power0.easeNone  })
    .to(".section__educacion-video-texto .section-element__play-btn", 1, { className: "+=pulse" }, "+=0.75")
  // Educacion Video Texto Scene
  var EducacionVideoTexto_Scene = new ScrollMagic.Scene({ triggerElement: ".section__educacion-video-texto", duration: 0, offset: 0 })
    .setTween(EducacionVideoTexto_TL)
    .addTo(controller);
    
  // Educacion Video Timeline 
  var EducacionVideo_TL = new TimelineLite();
  EducacionVideo_TL
    .from(".section__educacion-video .section-element__video", 1, { opacity: 0 })
  // Educacion Video Scene
  var EducacionVideo_Scene = new ScrollMagic.Scene({ triggerElement: ".section__educacion-video", duration: 0, offset: -100 })
    .setTween(EducacionVideo_TL)
    .addTo(controller);  

  // Docentes Animacion
  var Docentes_TL = new TimelineLite();
  Docentes_TL
    .from(".section__docentes  .section-element__dato-foto__arriba .section-element__dato-foto__foto", 0.5, { opacity: 0 })
    .from(".section__docentes  .section-element__dato-foto__abajo .section-element__dato-foto__foto", 0.5, { opacity: 0 },"-=0.2")    
    .from(".section__docentes  .section-element__dato-foto__arriba .section-element__dato-foto__text__dato-entrada", 0.5, { x: 600, opacity: 0 }, "entrada")
      .from(".section__docentes  .section-element__dato-foto__abajo .section-element__dato-foto__text__dato-entrada", 0.5, { x: 400, opacity: 0 }, "entrada-=0.2")
  var DocentesDos_TL = new TimelineLite();
  DocentesDos_TL
    .from(".section__docentes  .section-element__dato-foto__arriba .section-element__dato-foto__text__dato-salida", 0.5, { x: 600, opacity: 0 }, "salida")
    .from(".section__docentes  .section-element__dato-foto__abajo .section-element__dato-foto__text__dato-salida", 0.5, { x: 400, opacity: 0 }, "salida+=0.5") 
  // Docentes Scene
  var Docentes_Scene = new ScrollMagic.Scene({ triggerElement: ".section__docentes", duration: 0, offset: 200 })
   .setTween(Docentes_TL)
   .on("enter", function (e) {
     $('#dato-docentes-1').html(3772651);
   })
   .on("leave", function (event) {
     $('#dato-docentes-1').html(0);
    })
    .addTo(controller);
  var DocentesDos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__docentes", duration: 0, offset: 800 })
    .setTween(DocentesDos_TL)
    .on("enter", function (e) {
      $('#dato-docentes-2').html(170808);
      $('#dato-docentes-3').html(36041);
    })
    .on("leave", function (event) {
      $('#dato-docentes-2').html(0);
      $('#dato-docentes-3').html(0);
     })
  .addTo(controller);
  
  
  // Eje Animacion 
  var Eje_TL = new TimelineLite();
  Eje_TL
    .from(".section__eje .text", 0.25, { x: 200, opacity: 0, ease: Power0.easeNone  }, "eje")
    .from(".section__eje .section__imagen-full-bg", 0.5, { x: 300, opacity: 0}, "eje+=0.75")
  // Eje Scene
  var Eje_Scene = new ScrollMagic.Scene({ triggerElement: ".section__eje", duration: 0, offset: -50 })
    .setTween(Eje_TL)
    .addTo(controller);
  var EjeBgAnimation =
    TweenMax.to(".section__eje .section__imagen-full-bg__wrapper", 2, {  scale: 1.1 });  
   var EjeBgAnimation_Scene = new ScrollMagic.Scene({ triggerElement: ".section__eje .section__imagen-full-bg__wrapper", duration: '50%', offset: 0 })
    .setTween(EjeBgAnimation)
    .addTo(controller);
    
  // Acceso Scene Tween
  var AccesoTween = new TimelineLite();
  AccesoTween  
    .from(".section__acceso .section-element__texto-recuadro .top-left-corner", 1.25, { top: '25%', left: '25%', ease: Bounce.easeOut}, "esquinasac")
    .from(".section__acceso .section-element__texto-recuadro .bottom-right-corner", 1.25, { bottom: '25%', right: '50%', ease: Bounce.easeOut }, "esquinasac")
    .from(".section__acceso .section-element__texto-recuadro .text", 0.75, { opacity: 0 }, "-=0.5")
  // Acceso Scene
  var Acceso_Scene = new ScrollMagic.Scene({ triggerElement: ".section__acceso", duration: 0, offset: 0 })
    .setTween(AccesoTween)
    .addTo(controller);
  
  
   // Empleabilidad Timeline // section__imagen-full-bg con section-element__big-text-block
   var Empleabilidad_TL = new TimelineLite();
   Empleabilidad_TL
   .from(".section__empleabilidad .section-element__big-text-block ", 0.4, { x: 200, opacity: 0, ease: Power0.easeNone }, "educacion")
   .from(".section__empleabilidad .section__imagen-full-bg", 0.5, { x: 500, opacity: 0, ease: Power0.easeNone }, "educacion+=0.2")
   // Empleabilidad Scene
   var Empleabilidad_Scene = new ScrollMagic.Scene({ triggerElement: ".section__empleabilidad", duration: 0, offset: -200 })
    .setTween(Empleabilidad_TL)
    .addTo(controller);
  
  // Conectamos
  var Conectamos_TL = new TimelineLite();
  Conectamos_TL
    .from(".section__conectamos .conectamos__text-inside", 0.25, { x: 200, opacity: 0, ease: Power0.easeNone  }, "texto")
    .from(".section__conectamos .section-element__rect", 1, { x: 500 }, "texto", "-=0.25") 
  var ConectamosBGTween =
  TweenMax.to(".section__conectamos .section__imagen-full-bg__wrapper", 2, { scale: 1.1 });
  var Conectamos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__conectamos", duration: 0, offset: -50 })
    .setTween(Conectamos_TL) 
    .addTo(controller);
  var ConectamosBG_Scene = new ScrollMagic.Scene({ triggerElement: ".section__conectamos .section__imagen-full-bg__wrapper", duration: '50%', offset: 0 })
    .setTween(ConectamosBGTween)
    .addTo(controller);
  
  // // Beatriz Cita Scene
  var BeatrizCitaTween = new TimelineLite();
  BeatrizCitaTween
    .to(".section__beatriz-cita .section-element__play-btn", 1 , {className: "+=pulse"})  
    .from(".section__beatriz-cita .section-element__texto-recuadro .top-left-corner", 1.25, { top: '25%', left: '25%', ease: Bounce.easeOut}, "esquinasac-=0.4")
    .from(".section__beatriz-cita .section-element__texto-recuadro .bottom-right-corner", 1.25, { bottom: '20%', right: '50%', ease: Bounce.easeOut }, "esquinasac-=0.4")
    .from(".section__beatriz-cita .section-element__texto-recuadro .text", 0.75, { opacity: 0 }, "-=0.5")
    .from(".section__beatriz-cita .section__beatriz-cita__autor", 0.75, { opacity: 0 },"-=0.25")
   var BeatrizCita_Scene = new ScrollMagic.Scene({ triggerElement: ".section__beatriz-cita", duration: 0 , offset: 0})
     .setTween(BeatrizCitaTween)
     .addTo(controller);
  
  
  // Conecta Empleo
  var ConectaEmpleo_TL = new TimelineLite();
  ConectaEmpleo_TL
    .from(".section__conecta-empleo  .section-element__dato-foto__arriba .section-element__dato-foto__foto", 0.75, { opacity: 0 })
    .from(".section__conecta-empleo  .section-element__dato-foto__abajo .section-element__dato-foto__foto", 0.75, { opacity: 0 },"-=0.2")    
    .from(".section__conecta-empleo  .section-element__dato-foto__arriba .section-element__dato-foto__text__dato-entrada", 0.75, { x: 600, opacity: 0 }, "entrada")
      .from(".section__conecta-empleo  .section-element__dato-foto__abajo .section-element__dato-foto__text__dato-entrada", 0.75, { x: 400, opacity: 0 }, "entrada-=0.2")
  var ConectaEmpleoSalida_TL = new TimelineLite();
  ConectaEmpleoSalida_TL
    .from(".section__conecta-empleo  .section-element__dato-foto__arriba .section-element__dato-foto__text__dato-salida", 0.75, { x: -600, opacity: 0 }, "entrada")
    .from(".section__conecta-empleo  .section-element__dato-foto__abajo .section-element__dato-foto__text__dato-salida", 0.75, { x: -400, opacity: 0 }, "entrada-=0.2")
  var ConectaEmpleo_Scene = new ScrollMagic.Scene({ triggerElement: ".section__conecta-empleo", duration: 0, offset: 0 })
    .setTween(ConectaEmpleo_TL)
    .on("enter", function (e) {
      $('#dato-conecta-empleo-1').html(400000);
    })
    .on("leave", function (event) {
      $('#dato-conecta-empleo-1').html(0);
     })
   
   .addTo(controller);
   var ConectaEmpleoSalida_Scene = new ScrollMagic.Scene({ triggerElement: ".section__conecta-empleo", duration: 0 , offset: 800})
   .setTween(ConectaEmpleoSalida_TL)
    .on("enter", function (e) {
      $('#dato-conecta-empleo-2').html(411370);
    })
    .on("leave", function (event) {
      $('#dato-conecta-empleo-2').html(0);
    })
   
    .addTo(controller);
  
  // Cultura Timeline // section__imagen-full-bg con section-element__big-text-block
  var Cultura_TL = new TimelineLite();
  Cultura_TL
  .from(".section__cultura .section-element__big-text-block ", 0.4, { x: 200, opacity: 0, ease: Power0.easeNone }, "educacion")
    .from(".section__cultura .section__imagen-full-bg", 0.5, { x: 500, opacity: 0, ease: Power0.easeNone }, "educacion+=0.2")
  // Cultura Scene
  var Cultura_Scene = new ScrollMagic.Scene({ triggerElement: ".section__cultura", duration: 0, offset: -300 })
    .setTween(Cultura_TL)
    
    .addTo(controller);
  
  // Divulgamos
  var Divulgamos_TL = new TimelineLite();
  Divulgamos_TL
  .from(".section__divulgamos .divulgamos__text-inside", 0.5, { x: 100, opacity: 0 }, "texto")
  .from(".section__divulgamos .section-element__rect", 1, { x: 500, opacity: 0 }, "texto", "-=0.25")    
  var DivulgamosBGTimeline = new TimelineLite();
  DivulgamosBGTimeline
    .to(".section__divulgamos .section__imagen-full-bg", 2, { scale: 1.2 }, "divulgamosbg")
    .from(".section__divulgamos .divulgamos__img-text", 2, { scale: 1.2 }, "divulgamosbg+=1.0")
  var Divulgamos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__divulgamos", duration: 0, offset: 0 })
    .setTween(Divulgamos_TL)
    
    .addTo(controller);
  var DivulgamosBG_Scene = new ScrollMagic.Scene({ triggerElement: ".section__divulgamos .section__imagen-full-bg__wrapper", duration: 1150, offset: -500 })
    .setTween(DivulgamosBGTimeline)
    
    .addTo(controller);
  
  // Oferta Cultural
  var OfertaCulturalTween = new TimelineLite();
  OfertaCulturalTween  
    .from(".section__oferta-cultural .section-element__texto-recuadro .top-left-corner", 1.25, { top: '25%', left: '25%', ease: Bounce.easeOut}, "esquinasac")
    .from(".section__oferta-cultural .section-element__texto-recuadro .bottom-right-corner", 1.25, { bottom: '0%', right: '50%', ease: Bounce.easeOut }, "esquinasac")
    .from(".section__oferta-cultural .section-element__texto-recuadro .text", 0.75, { opacity: 0 }, "-=0.5")
  var OfertaCultural_Scene = new ScrollMagic.Scene({ triggerElement: ".section__oferta-cultural", duration: 0, offset: 0 })
    .setTween(OfertaCulturalTween)
    
    .addTo(controller);
  
  
  // Asistentes
  var AsistentesTween = new TimelineLite();
  AsistentesTween  
    .to(".section__asistentes .section__imagen-full-bg", 2, { scale: 1.1 }, "asistentesbg")
  var AsistentesContadorTween = new TimelineLite();
  AsistentesContadorTween  
  .from(".section__asistentes .section-element__numero-dato", 0.5, { scale: 1.2, opacity: 0 }, "+=0.25")
  var Asistentes_Scene = new ScrollMagic.Scene({ triggerElement: ".section__asistentes", duration: 1000, offset: -200 })
    .setTween(AsistentesTween)
    
    .addTo(controller);
  var AsistentesContador_Scene = new ScrollMagic.Scene({ triggerElement: ".section__asistentes", duration: 0, offset: -100 })
  .setTween(AsistentesContadorTween)
  .on("enter", function (e) {
    $('#dato-asistentes-1').html(2152375);
  })
  .on("leave", function (event) {
    $('#dato-asistentes-1').html(0);
    })
  
  .addTo(controller);
  
  // Mas Datos
  var MasDatos_TL = new TimelineLite();
  MasDatos_TL
  .from(".section__mas-datos  .section-element__dato-foto__abajo .section-element__dato-foto__foto", 0.75, { opacity: 0 },"-=0.2")    
  .from(".section__mas-datos  .section-element__dato-foto__arriba .section-element__dato-foto__foto", 0.75, { opacity: 0 })
  .from(".section__mas-datos  .section-element__dato-foto__arriba .section-element__dato-foto__text", 0.75, { x: 600, opacity: 0 }, "entrada")
  .from(".section__mas-datos  .section-element__dato-foto__abajo .section-element__dato-foto__text", 0.75, { x: 400, opacity: 0 }, "entrada-=0.2")  
  // MasDatos Scene
  var MasDatos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__mas-datos", duration: 0, offset: -100 })
    .setTween(MasDatos_TL)
    .on("enter", function (e) {
      $('#dato-mas-datos-1').html(1820018);
      $('#dato-mas-datos-2').html(50060);
    })
    .on("leave", function (event) {
      $('#dato-mas-datos-1').html(0);
      $('#dato-mas-datos-2').html(0);
     })
   
   .addTo(controller);
  
  
  // Descargas
  var DescargasTween = new TimelineLite();
  DescargasTween  
    .from(".section__descargas .section__imagen-full-bg", 2, { scale: 1.5 }, "descargasbg")
  var DescargasContadorTween = new TimelineLite();
  DescargasContadorTween  
    .from(".section__descargas .section-element__numero-dato", 0.5, { scale: 1.2, opacity: 0 }, "+=0.25")
  var Descargas_Scene = new ScrollMagic.Scene({ triggerElement: ".section__descargas", duration: 800, offset: -200 })
    .setTween(DescargasTween)
    
    .addTo(controller);
  var DescargasContador_Scene = new ScrollMagic.Scene({ triggerElement: ".section__descargas", duration: 0, offset: -100 })
  .setTween(DescargasContadorTween)
  .on("enter", function (e) {
    $('#dato-descarga-1').html(508351);
  })
  .on("leave", function (event) {
    $('#dato-descarga-1').html(0);
    })
  
  .addTo(controller);
  
  //Datos 2018
  var Datos2018Tween = new TimelineLite();
  Datos2018Tween  
      .from(".section__datos-2018 .text", 0.25, { x: 600, opacity: 0, ease: Power0.easeNone })
      .from(".datos-2018-img-dato-1", 0.25, { x: 600, opacity: 0, ease: Power0.easeNone  })
  var Datos2018_Scene = new ScrollMagic.Scene({ triggerElement: ".section__datos-2018", duration: 0, offset: -200 })
    .setTween(Datos2018Tween)
    
    .addTo(controller);
  
  //Datos 2018 IMG
  var Datos2018ImgTween = new TimelineLite();
  Datos2018ImgTween  
      .to(".section__datos-2018-img .section__imagen-full-bg", 2, { scale: 1.1 })
  var Datos2018DatosTween = new TimelineLite();
  Datos2018DatosTween  
      .staggerFrom([".datos-2018-img-dato-2", ".datos-2018-img-dato-3" ], 0.1, { opacity: 0, y: -100, ease: Power0.easeNone }, 0.2)
  var Datos2018Img_Scene = new ScrollMagic.Scene({ triggerElement: ".section__datos-2018-img", duration: 800, offset: -200 })
    .setTween(Datos2018ImgTween) 
    .addTo(controller);
  var Datos2018Datos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__datos-2018-img", duration: 0, offset: -150 })
  .setTween(Datos2018DatosTween)
  .addTo(controller);
    

  // Visitantes
  var VisitantesTween = new TimelineLite();
  VisitantesTween  
    .from(".section__visitantes .section__imagen-full-bg", 2, { scale: 1.3 }, "asistentesbg")
  var VisitantesContadorTween = new TimelineLite();
    VisitantesContadorTween  
    .from(".section__visitantes .section-element__numero-dato", 0.5, { scale: 1.2, opacity: 0 }, "+=0.25")
  var Visitantes_Scene = new ScrollMagic.Scene({ triggerElement: ".section__visitantes", duration: 700, offset: -200 })
    .setTween(VisitantesTween)
    .addTo(controller);
  var VisitantesContador_Scene = new ScrollMagic.Scene({ triggerElement: ".section__visitantes", duration: 0, offset: -100 })
    .setTween(VisitantesContadorTween)
    .on("enter", function (e) {
      $('#dato-visitantes-1').html(988133);
    })
    .on("leave", function (event) {
      $('#dato-visitantes-1').html(0);
      })
    .addTo(controller);
    
  // Laurie
  var LaurieTween = new TimelineLite();
  LaurieTween  
    .from(".section__laurie .section__imagen-full-bg", 2, { scale: 1.3 })
    .from(".section__laurie .text", 2, { className: "+=heartBeat" })
  var Laurie_Scene = new ScrollMagic.Scene({ triggerElement: ".section__laurie", duration: 800, offset: -200 })
    .setTween(LaurieTween)
    
    .addTo(controller);
    
  // Voluntariado
  var Voluntariado_TL = new TimelineLite();
  Voluntariado_TL
    .from(".section__voluntariado .section-element__big-text-block ", 0.4, { x: 200, opacity: 0, ease: Power0.easeNone }, "educacion")
    .from(".section__voluntariado .section__imagen-full-bg", 0.5, { x: 500, opacity: 0, ease: Power0.easeNone }, "educacion+=0.2")
  // Voluntariado Scene
  var Cultura_Scene = new ScrollMagic.Scene({ triggerElement: ".section__voluntariado", duration: 0, offset: -200 })
    .setTween(Voluntariado_TL)
    
    .addTo(controller);
  
  
  // Voluntarios Texto
  var VoluntariosTextoTween = new TimelineLite();
  VoluntariosTextoTween  
  .from(".section__voluntarios-texto .section-element__texto-recuadro .top-left-corner", 1.25, { top: '30%', left: '30%', ease: Bounce.easeOut}, "esquinasac")
  .from(".section__voluntarios-texto .section-element__texto-recuadro .bottom-right-corner", 1.25, { bottom: '25%', right: '50%', ease: Bounce.easeOut }, "esquinasac")
  .from(".section__voluntarios-texto .section-element__texto-recuadro .text", 0.75, { opacity: 0 }, "-=0.5")
  var VoluntariosTexto_Scene = new ScrollMagic.Scene({ triggerElement: ".section__voluntarios-texto", duration: 0, offset: 0 })
    .setTween(VoluntariosTextoTween)
   
    .addTo(controller);
  
    
  // Familia
  var Familia_TL = new TimelineLite();
  Familia_TL
    .from(".section__familia .text", 2, { x: 100 }, "texto")
    .from(".section__familia .section-element__rect", 2, { x: 500 }, "texto")
  var FamiliaBGTween =
  TweenMax.to(".section__familia .section__imagen-full-bg", 2, { scale: 1.1 });
  var Familia_Scene = new ScrollMagic.Scene({ triggerElement: ".section__familia", duration: 600, offset: -400 })
    .setTween(Familia_TL)
    .addTo(controller);
  var FamiliaBG_Scene = new ScrollMagic.Scene({ triggerElement: ".section__familia .section__imagen-full-bg__wrapper", duration: 1150, offset: -500 })
    .setTween(FamiliaBGTween)
    
      .addTo(controller);
    
    // Voluntarios Video Texto
    var VoluntariosVideoTexto_TL = new TimelineLite();
    VoluntariosVideoTexto_TL
      .from(".section__voluntarios-video-texto  .text", 0.25, { x: 200, opacity: 0, ease: Power0.easeNone  })
      .to(".section__voluntarios-video-texto .section-element__play-btn", 1, { className: "+=pulse" }, "+=0.75")
    //Section Voluntarios Video Texto Scene
    var VoluntariosVideoTexto_Scene = new ScrollMagic.Scene({ triggerElement: ".section__voluntarios-video-texto", duration: 0, offset: -100 })
      .setTween(VoluntariosVideoTexto_TL)
      
      .addTo(controller);
    
    // Voluntarios Video Timeline 
  var VoluntariosVideo_TL = new TimelineLite();
  VoluntariosVideo_TL
    .from(".section__voluntarios-video .section-element__video", 0.75, { opacity: 0 })
  // Voluntarios Video Scene
  var EducacionVideo_Scene = new ScrollMagic.Scene({ triggerElement: ".section__voluntarios-video", duration: 0, offset: -300 })
    .setTween(VoluntariosVideo_TL)
    .addTo(controller); 
    
  // Numero Voluntarios
  var NumeroVoluntarios_TL = new TimelineLite();
  NumeroVoluntarios_TL
    .from(".section__numero-voluntarios .section-element__numero-dato", 0.5, { x: 300, opacity: 0 })
    .from(".section__numero-voluntarios .section__imagen-full-bg", 0.75, { x: -600, opacity: 0}, "-=0.10")
  var NumeroVoluntarios_Scene = new ScrollMagic.Scene({ triggerElement: ".section__numero-voluntarios", duration: 0, offset: -150 })
    .setTween(NumeroVoluntarios_TL)
    .on("enter", function (e) {
      $('#dato-numero-voluntarios-1').html(42008);
    })
    .on("leave", function (event) {
      $('#dato-numero-voluntarios-1').html(0);
      })
    .addTo(controller);
  var NumeroVoluntariosImg = new TimelineLite();
  NumeroVoluntariosImg
    .to(".section__numero-voluntarios .section__imagen-full-bg", 2, { scale: 1.3 })  
  var NumeroVoluntarios_Scene = new ScrollMagic.Scene({ triggerElement: ".section__numero-voluntarios .section__imagen-full-bg__wrapper", duration: '50%', offset: 0 })
    .setTween(NumeroVoluntariosImg)
    .addTo(controller);
    
  // Numero Voluntarios Dos
  var NumeroVoluntariosDos_TL = new TimelineLite();
  NumeroVoluntariosDos_TL
  .from(".section__numero-voluntarios-dos .section-element__numero-dato", 0.5, { x: 300, opacity: 0 })
  .from(".section__numero-voluntarios-dos .section__imagen-full-bg", 0.75, { x: -600, opacity: 0}, "-=0.10")
  var NumeroVoluntariosDos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__numero-voluntarios-dos", duration: 0, offset: -150 })
    .setTween(NumeroVoluntariosDos_TL)
    .on("enter", function (e) {
      $('#dato-numero-voluntarios-2').html(486024);
    })
    .on("leave", function (event) {
      $('#dato-numero-voluntarios-2').html(0);
      })
    .addTo(controller);
    var NumeroVoluntariosDosImg = new TimelineLite();
    NumeroVoluntariosDosImg
      .to(".section__numero-voluntarios-dos .section__imagen-full-bg", 2, { scale: 1.3 })  
    var NumeroVoluntariosDos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__numero-voluntarios-dos .section__imagen-full-bg__wrapper", duration: '50%', offset: 0 })
      .setTween(NumeroVoluntariosDosImg)
      .addTo(controller);
    
  // Voluntarios Datos
  var VoluntariosDatos_TL = new TimelineLite();
  VoluntariosDatos_TL
  .from(".section__voluntarios-datos  .section-element__dato-foto__abajo .section-element__dato-foto__foto", 0.75, { opacity: 0 },"-=0.2")    
  .from(".section__voluntarios-datos  .section-element__dato-foto__arriba .section-element__dato-foto__foto", 0.75, { opacity: 0 })
  .from(".section__voluntarios-datos  .section-element__dato-foto__arriba .section-element__dato-foto__text", 0.75, { x: 600, opacity: 0 }, "entrada")
  .from(".section__voluntarios-datos  .section-element__dato-foto__abajo .section-element__dato-foto__text", 0.75, { x: 400, opacity: 0 }, "entrada-=0.2")  
  // VoluntariosDatos Scene
  var VoluntariosDatos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__voluntarios-datos", duration: 0, offset: -200 })
   .setTween(VoluntariosDatos_TL)
    .on("enter", function (e) {
      $('#dato-numero-voluntarios-3').html(32);
      $('#dato-numero-voluntarios-4').html(70735);
    })
    .on("leave", function (event) {
      $('#dato-numero-voluntarios-3').html(0);
      $('#dato-numero-voluntarios-4').html(0);
      })
   .addTo(controller);
  
    
    
// Voluntariado Digital
var VoluntariadoDigital_TL = new TimelineLite();
VoluntariadoDigital_TL
      .from(".section__voluntariado-digital .text", 0.5, { x: 300, opacity: 0 })
      .from(".section__voluntariado-digital .section__imagen-full-bg", 0.75, { opacity: 0 }, "-=0.25");
var VoluntariadoDigitalBGTween =
TweenMax.to(".section__voluntariado-digital .section__imagen-full-bg", 2, { scale: 1.1 });
var VoluntariadoDigital_Scene = new ScrollMagic.Scene({ triggerElement: ".section__voluntariado-digital", duration: 0, offset: -200 })
.setTween(VoluntariadoDigital_TL)

.addTo(controller);  
var VoluntariadoDigitalBG_Scene = new ScrollMagic.Scene({ triggerElement: ".section__voluntariado-digital .section__imagen-full-bg__wrapper", duration: '50%', offset: 0 })
  .setTween(VoluntariadoDigitalBGTween)
  
  .addTo(controller);

// Voluntarios Datos Dos
var VoluntariosDatosDos_TL = new TimelineLite();
VoluntariosDatosDos_TL
.from(".section__voluntarios-datos-dos  .section-element__dato-foto__abajo .section-element__dato-foto__foto", 0.5, { opacity: 0 },"-=0.2")    
.from(".section__voluntarios-datos-dos  .section-element__dato-foto__arriba .section-element__dato-foto__foto", 0.5, { opacity: 0 })
.from(".section__voluntarios-datos-dos  .section-element__dato-foto__arriba .section-element__dato-foto__text", 0.5, { x: 600, opacity: 0 }, "entrada")
.from(".section__voluntarios-datos-dos  .section-element__dato-foto__abajo .section-element__dato-foto__text", 0.5, { x: 400, opacity: 0 }, "entrada-=0.2")  
// Voluntarios Datos Dos Scene
var VoluntariosDatosDos_Scene = new ScrollMagic.Scene({ triggerElement: ".section__voluntarios-datos-dos", duration: 0, offset: -200 })
  .setTween(VoluntariosDatosDos_TL)
  
  .on("enter", function (e) {
    $('#dato-numero-voluntarios-5').html(32808);
    $('#dato-numero-voluntarios-6').html(15242);
  })
  .on("leave", function (event) {
    $('#dato-numero-voluntarios-5').html(0);
    $('#dato-numero-voluntarios-6').html(0);
    })
  .addTo(controller);


// Beneficiarios Numero
var BeneficiariosNumero_TL = new TimelineLite();
BeneficiariosNumero_TL
  .from(".section__beneficiarios-numero .section-element__numero-dato", 0.5, { x: 300, opacity: 0 })
  .from(".section__beneficiarios-numero .section__imagen-full-bg", 0.75, { x: -600, opacity: 0}, "-=0.10")
var BeneficiariosNumero_Scene = new ScrollMagic.Scene({ triggerElement: ".section__beneficiarios-numero", duration: 0, offset: -150 })
  .setTween(BeneficiariosNumero_TL)
  .on("enter", function (e) {
    $('#dato-beneficiarios').html(71623);
  })
  .on("leave", function (event) {
    $('#dato-beneficiarios').html(0);
    })
  .addTo(controller);
  var BeneficiariosImg = new TimelineLite();
  BeneficiariosImg
    .to(".section__beneficiarios-numero .section__imagen-full-bg", 2, { scale: 1.1 })  
  var BeneficiariosImg_Scene = new ScrollMagic.Scene({ triggerElement: ".section__beneficiarios-numero .section__imagen-full-bg__wrapper", duration: '50%', offset: 0 })
    .setTween(BeneficiariosImg)
    .addTo(controller);
    
// Titulo Final
var TituloFinal_TL = new TimelineLite();
TituloFinal_TL
  // .to(".section__titulo-final .text", 0.75, { opacity: 0, y: -100 }, "+=2.0")
  .to(".section__titulo-final .section__imagen-full-bg", 0.75, { opacity: 1 },"+=1")
var TituloFinalScene = new ScrollMagic.Scene({ triggerElement: ".section__titulo-final .text", duration: 0, offset: '75' })
  .setTween(TituloFinal_TL)
  .addTo(controller);
    
// Cierre
  var Cierre_TL = new TimelineLite();
    Cierre_TL
  .to(".section__edificio .section__imagen-full-bg", 0.5, { opacity: 0 }, "cierre")
  .from(".section__cierre .section__cierre__bg", 0.75, { opacity: 0 }, "cierre-=0.25")
  // .from(".section__cierre .section__cierre__footer", 0.75, { opacity: 0, y: -500 })
  // .staggerFrom([".section__cierre__footer-social", ".section__cierre__footer-downloads", ".section__cierre__legal" ], 0.5, { opacity: 0, y: -25, ease: Power0.easeNone }, 0.1)
  var CierreFinalScene = new ScrollMagic.Scene({ triggerElement: ".section__cierre", duration: 0, offset: 200 })
    .setTween(Cierre_TL)
    .addTo(controller)

    var CierreDos_TL = new TimelineLite();
    CierreDos_TL
  // .to(".section__edificio .section__imagen-full-bg", 0.5, { opacity: 0 }, "cierre")
  // .from(".section__cierre .section__cierre__bg", 0.75, { opacity: 0 }, "cierre-=0.25")
  .from(".section__cierre .section__cierre__footer", 0.75, { opacity: 0, y: -500 })
  .staggerFrom([".section__cierre__footer-social", ".section__cierre__footer-downloads", ".section__cierre__legal" ], 0.5, { opacity: 0, y: -25, ease: Power0.easeNone }, 0.1)
  var CierreDosFinalScene = new ScrollMagic.Scene({ triggerElement: ".section__cierre__footer", duration: 0, offset: -300 })
    .setTween(CierreDos_TL)
    .addTo(controller)
  

  
    
    
    
    
  } else {
    
    // Insertar numeros de contadores manualmente para responsive
    $('#dato-cumplido-1').html(7300);
    $('#dato-docentes-1').html(3772651);
    $('#dato-docentes-2').html(170808);
    $('#dato-docentes-3').html(36041);
    $('#dato-conecta-empleo-1').html(400000);
    $('#dato-conecta-empleo-2').html(411370);
    $('#dato-mas-datos-1').html(1820018);
    $('#dato-mas-datos-2').html(50060);
    $('#dato-descarga-1').html(508351);
    $('#dato-asistentes-1').html(2152375);
    $('#dato-visitantes-1').html(988133);
    $('#dato-numero-voluntarios-1').html(42008);
    $('#dato-numero-voluntarios-2').html(486024);
    $('#dato-numero-voluntarios-3').html(32);
    $('#dato-numero-voluntarios-4').html(70735);
    $('#dato-numero-voluntarios-5').html(32808);
    $('#dato-numero-voluntarios-6').html(15242);
    $('#dato-beneficiarios').html(71623);
  }
    
});

$(window).load(function() {
  
});

