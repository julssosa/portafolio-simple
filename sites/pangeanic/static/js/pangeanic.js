(function () {
    
    var md = new MobileDetect(window.navigator.userAgent);
        
    // Sub menu interaccion en hover
    var showSubMenu = function () {
        var subMenuItem = $(this).find(".header__sub-menu-block");
        $(subMenuItem).show();
        $(subMenuItem).css("opacity", "1").css("top", "+=5px");
        $(subMenuItem).addClass("header__sub-menu-block__hover");
    }

    var hideSubMenu = function () {
        var subMenuItem = $(this).find(".header__sub-menu-block");
        $(subMenuItem).removeClass("header__sub-menu-block__hover");
        $(subMenuItem).css("opacity", "0").css("top", "75px");
        $(subMenuItem).hide();
    }

    var config = {
        sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)    
        interval: 100, // number = milliseconds for onMouseOver polling interval    
        over: showSubMenu, // function = onMouseOver callback (REQUIRED)    
        timeout: 200, // number = milliseconds delay before onMouseOut    
        out: hideSubMenu // function = onMouseOut callback (REQUIRED)    
    }

    $(".header .header__menu-item__has-children").hoverIntent(config);
    
    $(".header__menu-item__dropdown-btn").click(function () {
        $(this).siblings(".header__sub-menu-block").find(".header__sub-menu-items").slideToggle();
        $(this).toggleClass("dropdown-btn__item-toggle-active");
    });

    $(".nav-sml__lang-wrapper").click(function () {
        $(this).find(".nav-sml__lang-dropdown-menu").slideToggle();
    });
    
    var disableBodyScroll = bodyScrollLock.disableBodyScroll;
    var enableBodyScroll = bodyScrollLock.enableBodyScroll;
    var targetElementScrollHeader = document.querySelector(".responsive-nav");
        
    // Boton Responsive Hamburguesa
    $('.hamburger-icon').click(function () {
        if ($(window).width() <= 992) {
            if ($('.responsive-menu').hasClass('active-nav')) {
                 enableBodyScroll(targetElementScrollHeader);
            } else {
                disableBodyScroll(targetElementScrollHeader);
            }
        }
        $('.responsive-menu').toggleClass('active-nav');
        $('.responsive-nav').toggleClass('active-hamburger-btn');
    });

    $(window).resize(function () {
        if ($(window).width() > 992) {
            enableBodyScroll(targetElementScrollHeader);
            $('.responsive-menu').removeClass('active-nav');
            $('.responsive-nav .header__menu-item__dropdown-btn').siblings(".header__sub-menu-block").find(".header__sub-menu-items").slideUp();
            $('.responsive-nav .header__menu-item__dropdown-btn').removeClass("dropdown-btn__item-toggle-active");
        }
    });

    // Bloque Acordeon Funcionalidad
    $('.bloque-acordeon__item-toggle-list .bloque-acordeon__item-toggle-item:first').addClass('item-toggle-active');
    $('.bloque-acordeon__item-toggle-list .bloque-acordeon__item-toggle-item:first-child .bloque-acordeon__sub-item-toggle-list .bloque-acordeon__sub-item-toggle-item:first').addClass('sub-item-toggle-active');
    $('.bloque-acordeon__item-toggle-list .bloque-acordeon__item-toggle-item:first-child .bloque-acordeon__sub-item-toggle-list').slideDown();
    $('.bloque-acordeon__inner-content .bloque-acordeon__inner-content-item:first-child').fadeIn().addClass('inner-content-item-active');
    
    $('.bloque-acordeon__item-toggle-item-clickable').click(function () {
        var parentToggleItem = $(this).parent('.bloque-acordeon__item-toggle-item');
        var activeItem = $('.bloque-acordeon__item-toggle-item.item-toggle-active');
        if ($(parentToggleItem).hasClass('item-toggle-active')) {
            $(parentToggleItem).find('.bloque-acordeon__sub-item-toggle-list').slideUp();
            $(parentToggleItem).removeClass('item-toggle-active');
        } else {
            $(activeItem).find('.bloque-acordeon__sub-item-toggle-list').slideUp();
            $(activeItem).removeClass('item-toggle-active');
            $(parentToggleItem).addClass('item-toggle-active');
            $(parentToggleItem).find('.bloque-acordeon__sub-item-toggle-list').slideDown();
        }
    });

    $('.bloque-acordeon__sub-item-toggle-item').click(function () {
        var idSubItem = $(this).attr('id');
        var subItem = $(this);
        if ($(subItem).hasClass('sub-item-toggle-active')) {
        } else {
            var innerContentItem = $('.bloque-acordeon__inner-content').find('.bloque-acordeon__inner-content-item.' + idSubItem);
            $('.bloque-acordeon__sub-item-toggle-item').removeClass('sub-item-toggle-active');
            $('.bloque-acordeon__inner-content-item').hide();
            $('.bloque-acordeon__inner-content-item').removeClass('inner-content-item-active');
            $(innerContentItem).fadeIn();
            $(innerContentItem).addClass('inner-content-item-active');
            $(subItem).addClass('sub-item-toggle-active');
        }
    });


    // Bloque Tabs Funcionalidad
    $('.bloque-tabs__tabs .bloque-tabs__tab:first').addClass('tab-active');
    $('.bloque-tabs__inner-tab-content .bloque-tabs__inner-content-item:first').fadeIn();
    $('.bloque-tabs__tab').click(function () {
        var idTab = $(this).attr('id');
        var tab = $(this);
        if ($(tab).hasClass('tab-active')) {
        } else {
            var innerContentItem = $('.bloque-tabs__inner-tab-content').find('.bloque-tabs__inner-content-item.' + idTab);
            $('.bloque-tabs__tab').removeClass('tab-active');
            $('.bloque-tabs__inner-content-item').hide();
            $('.bloque-tabs__inner-content-item').removeClass('tab-inner-content-item-active');
            $(innerContentItem).fadeIn();
            $(innerContentItem).addClass('tab-inner-content-item-active');
            $(tab).addClass('tab-active');
        }
    });


    // Slider Testimonios con Thumbnails
    $(".testimonios-slider__slider__slides-with-thumbs").lightSlider({
        item: 1,
        // pager: false,
        gallery: true,
        thumbItem: 5,
        addClass: 'slider-with-thumbs',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    thumbItem: 3,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    thumbItem: 1,
                }
            },
        ]
    });

    
    // Slider Testimonios sin Thumbnails
    $(".testimonios-slider__slider__slides-no-thumbs").lightSlider({
        item: 1,
        pager: false,
        addClass: 'slider-no-thumbs',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    thumbItem: 3,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    thumbItem: 1,
                }
            },
        ]
    });

    // Slider Servicios
    $('.bloque-servicios__slider').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 3,
                
            },
            992: {
                items: 3,
                margin: 1,
                
            },
            1280: {
                items: 3,
                margin: 1,
                
            }
        },
        navText: [
            '<div class="bloque-servicios__slider-nav-prev"></div>',
            '<div class="bloque-servicios__slider-nav-next"></div>'
        ]
    })

    
    
    // Imagenes Slider
    $('.imagenes-slider__slider-wrapper').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false,
        navText: [
            '<div class="bloque-servicios__slider-nav-prev"></div>',
            '<div class="bloque-servicios__slider-nav-next"></div>'
        ]
    })

    // Funcion Debounce
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
        };
    }

    // Modal Funcionalidad
    $('.contacto-modal__cerrar').click(function () {
        $('.contacto-modal').removeClass('modal-active').addClass('modal-closed');
    });

    function modalShow() {
        var documentHeight = document.body.offsetHeight;
        var windowHeight = window.innerHeight;
        var scrollPos = window.scrollY + windowHeight;
        var modalContainer = $('.contacto-modal');
        var modalIsClosed = $(modalContainer).hasClass('modal-closed');
        var showModalPos = documentHeight * 0.33;
        // Mostrar modal si se ha hecho scroll sobre más de un tercio del documento
        if (scrollPos > (showModalPos)) {
            if (modalIsClosed) { } else {
                $(modalContainer).addClass("modal-active");
            }
        }
    };
    var debounceTime = 50;
    window.addEventListener('scroll', debounce(modalShow, debounceTime));



    // Función para Throttle 
    function throttle(callback, limit) {
        var wait = false; // Initially, we're not waiting
        return function () { // We return a throttled function
            if (!wait) { // If we're not waiting
                callback.call(); // Execute users function
                wait = true; // Prevent future invocations
                setTimeout(function () { // After a period of time
                    wait = false; // And allow future invocations
                }, limit);
            }
        }
    }


    // Indicador sección funcionalidad 

    // Cambiar posicion indicador en scroll
    var sectionsPos = [];
    var throttleTime = 75;
    

    // Obtener posiciones de cada bloque en la pagina en un array
    $(".main .bloque").each(function (i) {
        var sectionOffset = $(this).offset()['top'] / 1.125;
        sectionsPos.push(sectionOffset);
    });
    
    // return true if in range, otherwise false
    function inRange(x, min, max) {
        return ((x - min) * (x - max) <= 0);
    }

    function changeClassIndicator(pos) {
        var activeSectionIndicator = '.section-indicator__items .section-indicator__ancla:nth-child(' + pos + ') .section-indicator__item';
        var activeSectionIndicatorBarClass = 'section-indicator__active-section-' + pos + '';
        $('.section-indicator__active-bar').attr('class', 'section-indicator__active-bar');
        $('.section-indicator__item').attr('class', 'section-indicator__item');
        $(activeSectionIndicator).addClass('section-indicator__active');
        $('.section-indicator__active-bar').addClass(activeSectionIndicatorBarClass);
    }
    
    
    function detectScrollPosForIndicator() {
        var scrollPosY = window.scrollY;
        var numSection = sectionsPos.length;        
        // Primera sección
        if (scrollPosY < sectionsPos[1]) {
            changeClassIndicator(1);
        // Ultima sección
        } else if (scrollPosY > sectionsPos[numSection-1]) {
            changeClassIndicator(numSection);
        } else {
            // Todo lo que va en medio
            var i;
            for (i = 1; i <= numSection; i++){
                if (inRange(scrollPosY, sectionsPos[i], sectionsPos[i + 1])){
                    changeClassIndicator(i + 1);
                }   
            }
        }        
    }

    window.addEventListener('scroll', throttle(detectScrollPosForIndicator, throttleTime));

    
    // Header
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var showHeaderPos = 250;
        if (scroll >= showHeaderPos) {
            $('.header').addClass("header-scroll");
        } else if (scroll < showHeaderPos) {
            $('.header').removeClass("header-scroll");
        }
    
    });

    $(document).on('click', 'a[href^="#"].section-indicator__ancla', function (event) {
        event.preventDefault();
        var sectionIndicatorItem = $(this).find('.section-indicator__item');
        if ($(sectionIndicatorItem).hasClass('section-indicator__active')) {
            
        } else {
            $('.section-indicator__item').attr('class', 'section-indicator__item');
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 150
            }, 500);
            $(sectionIndicatorItem).addClass('section-indicator__active');

        }
    });

    /**
     * Detecta si existe un campo de contat form 7 llamado "wpcf7_attach_file_id" y si es así le asigna el id del archivo
     * adjunto para procesar con el action "wpcf7_mail_components" y el filtro wpcf7_mail_components
     */
    (function () {
        var field = document.getElementById("wpcf7_attach_file_id");
        if (field) {
            field.value = document.getElementById("file_download_id").value;
        }
    })();

    /**
     * Inserta un id en cada section para que lo enlace el selector flotante
     */
    (function () {
        var elements = document.querySelectorAll('section');
        for (var i = elements.length - 1; i >= 0; i--) {
            // console.log(elements[i]);
            elements[i].setAttribute("id", "section-" + (i + 1));
        }
    })();

    // Borrar elementos generados automaticamente en editor de texto backend de WPCF7
    $('.form-multistep__form-container').find('p').remove();
    $('.form-multistep__form-container').find('br').remove();



    // Animaciones en scroll

    var animDuration = 0.3;
    var sceneDuration = 0;
    var sceneOffset = "-250";
    
    if (md.mobile() || md.phone() || md.tablet() || $(window).width() <= 768) {
        // No cargar animaciones
    } else {
        var controller = new ScrollMagic.Controller({
            // addIndicators: true
        });
        
        $(".bloque").each(function (i) {

            var bloque = this,
                bloqueAnimacion = new TimelineLite();
                h1 = $(bloque).find("h1"),
                h2 = $(bloque).find("h2"),
                h3 = $(bloque).find("h3"),
                h4 = $(bloque).find("h4"),
                p = $(bloque).find("p"),
                img = $(bloque).find("img");
                bloqueTextoImgWrapper = $(bloque).find(".bloque-texto__imagen"),
                btns = $(bloque).find(".btn"),
                icon = $(bloque).find(".pangeanic__icon"),
                todo = $(p).add(h1).add(h2).add(h3).add(h4).add(img);
    
            if ($(bloque).hasClass("bg-img")) {
                bgImg = $(bloque).find(".bg-img__bg");
                bloqueAnimacion.from(bgImg, animDuration, {opacity: 0})
            }
    
            // Anular animaciones por defecto y asignar animaciones especificas 

            if ($(bloque).hasClass("ubicaciones")) {
                var ubicacionesItems = $(bloque).find(".ubicaciones__item ");
                bloqueAnimacion.staggerFrom(ubicacionesItems, animDuration, { opacity: 0, y: 100, delay: 0.5 }, 0.10);

            } else if ($(bloque).hasClass("translation-options")) {
                var translationOptionContainer = $(bloque).find(".translation-options__option");
                bloqueAnimacion.staggerFromTo(translationOptionContainer, animDuration, { scale: 1.25, opacity: 0 }, { scale: 1, opacity: 1, ease: "bounce.in" })

            } else if ($(bloque).hasClass("news-header")) { 
                var newsHeaderImagen = $(bloque).siblings(".bloque__imagen-full-width");
                    newsHeaderCurva = $(bloque).find(".curva-fin-bloque__negativa"),
                    newsHeaderContent = $(bloque).find(".news-header__content"),
                    newsHeaderInfo = $(newsHeaderContent).find(".news-header__info"),
                    newsHeaderIcon = $(newsHeaderContent).find(".pangeanic__icon-h"),
                    newsHeaderNext = $(newsHeaderContent).find(".news-header__next");
                bloqueAnimacion.from(bloque, animDuration, { opacity: 0 })
                    .from(newsHeaderCurva, animDuration, { y: -500 })
                    .from(newsHeaderImagen, 0.5, {opacity: 0, y: -500})
                    .from(newsHeaderContent, animDuration, { opacity: 0 }, "-=0.5")
                    .from(newsHeaderIcon, animDuration, { x: 100, opacity: 0 }, "-=0.5")
                    .from(h4, animDuration, { y: -200, opacity: 0 }, "-=0.5")
                    .from(newsHeaderInfo, animDuration, { y: 100, opacity: 0 }, "-=0.5")
                    .from(newsHeaderNext, animDuration, { x: -100, opacity: 0 }, "-=0.5")
                    .from(h1, animDuration, { y: 100, opacity: 0 }, "-=0.5")
                
            } else if ($(bloque).hasClass("news-feed-full")) {

                // No cargar animaciones por defecto de bloque

            } else {
                
                // Cargar Animaciones por defecto de bloque

                bloqueAnimacion.staggerFromTo(todo, animDuration, { opacity: 0 }, { opacity: 1 }, 0.15);
                
                // Animaciones especificas para cada bloque + animaciones por defecto de bloque

                if ($(bloque).hasClass("bloque-texto-iconos")) {
                    var iconosBloque = $(bloque).find(".bloque-texto-iconos__icono-col");
                    bloqueAnimacion.staggerFrom(iconosBloque, animDuration, {opacity: 0, y: 100}, 0.10);
                } else if ($(bloque).hasClass("servicios")) {
                    var imgColServicios = $(bloque).find(".servicios__main-content__img-centro__img");
                    bloqueAnimacion.from(imgColServicios, animDuration, {opacity: 0, y: 100, delay: 0.5}, 0.10);
                } 

            }
    
            
            // Si hay contenido, estas animaciones siempre se cargan

            if (bloqueTextoImgWrapper.length > 0) {
                var bloqueTextoImg = $(bloqueTextoImgWrapper).find(".bloque-texto__imagen-container");
                // Entrar por la izquierda o la derecha
                if ($(bloqueTextoImgWrapper).parent(".bloque-texto__main-content-img").hasClass("img-der")) {
                    bloqueAnimacion.from(bloqueTextoImg , animDuration, { x: '500px', opacity: 0});
                } else {
                    bloqueAnimacion.from(bloqueTextoImg , animDuration, { x: '-500px', opacity: 0});
                }
                // Imagen fija en scroll
                if ($(bloque).hasClass("bloque-texto")) {
                    var bloqueTextoContent = $(bloque).find(".bloque-texto__texto");
                    if ($(bloqueTextoContent).height() > ($(bloqueTextoImg).height() * 1.75)) {
                        stickybits($(bloqueTextoImg), {stickyBitStickyOffset: 150});
                     }
                }
            }

            if ($(bloque).hasClass('bloque__curva')) {
                if ($(bloque).hasClass('bloque__curva-fin-bloque__positiva')) {
                    var curvaBloque = $(bloque).find('.curva-fin-bloque__positiva');
                    bloqueAnimacion.from(curvaBloque, animDuration, {zIndex: 0, y: '-75', ease:Elastic.easeOut.config(2, 0.5) }, '+=0.25');
                } else if ($(bloque).hasClass('bloque__curva-fin-bloque__negativa')) {
                    var curvaBloque = $(bloque).find('.curva-fin-bloque__negativa');
                    bloqueAnimacion.from(curvaBloque, animDuration, {zIndex: 0, y: '-75', ease:Elastic.easeOut.config(1, 0.5) }, '+=0.25');
                }
            }

            if (btns.length > 0) {
                bloqueAnimacion.staggerFrom(btns, animDuration, { opacity: 0, y: 100 }, 0.15);
            } 
            
            if (icon.length > 0) {
                bloqueAnimacion.from(icon, animDuration, {opacity: 0, y: 100, delay: 0.25});
            }

            
            var scene = new ScrollMagic.Scene({ triggerElement: bloque, duration: sceneDuration, offset: sceneOffset })
                .setTween(bloqueAnimacion)	
                .reverse(false)
                .addTo(controller);
        });
    }

    // Dividir ul en 2 objetos. Utilizar como fallback si CSS Grid no es compatible.
    function divideUnorderedList(element) {
        var listChildren = $(element).children(),
            breakPoint = Math.round(listChildren.length / 2),
            col1 = listChildren.slice(0, breakPoint),
            col2 = listChildren.slice(breakPoint, listChildren.length),
            cols = [col1, col2];
        return cols;
    }

    var listasBloqueTexto = $(".bloque-texto ul");
    $(listasBloqueTexto).each(function (i) {
        var listaBloqueTexto = this,
        listChildren = $(this).children();
        if (listChildren.length >= 6) {
            $(this).addClass("lista-2-columnas");
        }
    });

})();

