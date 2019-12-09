$(document).ready(function () {

    //делаем активной ссылку в навбаре
    $('.ul li a').click(function(e) {
        $('.ul li.active').removeClass('active');
        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    });

    //плавный переход по ссылке
    $(".scroll").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

    //закрытие меню при нажатии на ссылку в мобильной версии
	$('.ul a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
 	});

	//клонирование предыдущих div при нажатии на "load more work"
	$('.load p').on('click', function(){ 
		$('.clone').each(function(){
	        $(this).clone().insertAfter(this);
	    });
	 });


});
