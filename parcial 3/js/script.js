// JavaScript source code
// Activador de jQuery - Funci�n principal de jQuery
$(document).ready(function(){


    // activación de slick slider //
    
    $('.slick-slider').slick({
        autoplay: true,
        fade: true,
        Infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:300,
        arrows: true
      });

    // Activaci�n de transici�n del men� principal y del men� m�vil
    $("aside#menu-hamburguesa nav a, header article nav a").bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    // Funciones de Abrir y Cerrar el Men� Responsive
    $('a#abrir-menu').click(function(){
        $('aside#menu-hamburguesa').animate({
            right: 0
        },300,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        event.preventDefault();
    });

    $('a#cerrar-menu, aside#menu-hamburguesa nav a').click(function(){
        $('aside#menu-hamburguesa').animate({
            right: -290
        },300,'easeOutExpo');
        
        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    });
    
 
       // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});