// RadioButton
$('.radioblock').find('.radio').each(function(){
    $(this).click(function(){
        // Заносим текст из нажатого дива в переменную
        var valueRadio = $(this).html();
        // Находим любой активный переключатель и убираем активность
        $(this).parent().find('.radio').removeClass('active');
        // Нажатому диву добавляем активность
        $(this).addClass('active');
        // Заносим значение объявленной переменной в атрибут скрытого инпута
        $(this).parent().find('input').val(valueRadio);
    });
});




// Select
$('.slct').click(function(){
    $(this).parent().parent().parent().find(".drop").slideUp();
    $(this).parent().parent().parent().find(".slct").removeClass("active");
    /* Заносим выпадающий список в переменную */
    var dropBlock = $(this).parent().find('.drop');

    /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
    if( dropBlock.is(':hidden') ) {
        dropBlock.slideDown();

        /* Выделяем ссылку открывающую select */
        $(this).addClass('active');

        /* Работаем с событием клика по элементам выпадающего списка */
        $('.drop').find('li').click(function(){

            /* Заносим в переменную HTML код элемента
            списка по которому кликнули */
            var selectResult = $(this).html();

            /* Находим наш скрытый инпут и передаем в него
            значение из переменной selectResult */
            $(this).parent().parent().find('input').val(selectResult);

            /* Передаем значение переменной selectResult в ссылку которая
            открывает наш выпадающий список и удаляем активность */
            $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

            /* Скрываем выпадающий блок */
            dropBlock.slideUp();
        });

    /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }

    /* Предотвращаем обычное поведение ссылки при клике */
    return false;
});