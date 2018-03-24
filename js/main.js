// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// WOW JS
wow = new WOW(
	{
		animation: {
			duration: 400,
			effects: 'fade stagger(34ms) translateZ(-360px) translateY(10%)',
			easing: 'ease'
		}
	}
);
wow.init();

//Script for Mixitup
$(function(){
	$('#portfolio-items').mixItUp();
});

// Contact form

$(document).ready(function(){
            $('#btn_submit').click(function(e){
                // собираем данные с формы
                e.preventDefault();
                var user_phone = $('#user_phone').val();
                var user_email = $('#user_email').val();
                // отправляем данные
                $.ajax({
                    url: "action.php", // куда отправляем
                    type: "post", // метод передачи
                    dataType: "json", // тип передачи данных
                    data: { // что отправляем
                        "user_phone": user_phone,
                        "user_email": user_email,
                    },
                    // после получения ответа сервера
                    success: function(response){
                        $('#messages').empty();
                        $('#messages').append(response); // выводим ответ сервера
                        //if (response){ // если есть ответ, то выполняем след. действия
                   //$('#messages').append('<div class="mes-success">Спасибо за ваше сообщение</div>');
                //} else {
                   //$('#messages').append('<div class="mes-error">Ошибка!</div>');
                //}
                    //alert("Ваше сообщение отправлено!");
                }
                });
            });
        });
