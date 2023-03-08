import $ from "jquery";

//функция обертка, которая аналогична DOMContentLoaded
$(document).ready(function() {
    //обращаемся к первому элементу
    $('.list-item:first').hover(function() {
        //через контекст события hover  тогглим класс active
        $(this).toggleClass('active');
    });
    //реализуем функцию удаления четных картинок при нажатии на кнопку "третий"
    $('.list-item:eq(2)').hover(function() {
        $(this).toggleClass('active');
    }).on('click', function() {
        $('.image:even').fadeToggle('slow');
    });
    //заставляем прятаться нечетные картинки при нажатии на кнопку "пятый"
    $('.list-item:eq(4)').hover(function() {
        $(this).toggleClass('active');
    }).on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });
});