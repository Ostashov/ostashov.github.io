$(document).ready(function() {

    //Таймер обратного отсчета
    //Документация: http://keith-wood.name/countdown.html
    //<div class="countdown" date-time="2015-01-07"></div>
    var austDay = new Date($(".countdown").attr("date-time"));
    $(".countdown").countdown({until: austDay, format: 'yowdHMS'});

    //Попап менеджер FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $(".fancybox").fancybox();

    //Навигация по Landing Page
    //$(".top_mnu") - это верхняя панель со ссылками.
    //Ссылки вида <a href="#contacts">Контакты</a>
    $(".top_mnu").navigation();

    //Добавляет классы дочерним блокам .block для анимации
    //Документация: http://imakewebthings.com/jquery-waypoints/
    $(".block").waypoint(function(direction) {
        if (direction === "down") {
            $(".class").addClass("active");
        } else if (direction === "up") {
            $(".class").removeClass("deactive");
        };
    }, {offset: 100});

    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo
    $("a.scroll").click(function() {
        $.scrollTo($(".div"), 800, {
            offset: -90
        });
    });

    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carousel");
    owl.owlCarousel({
        items : 4
    });
    owl.on("mousewheel", ".owl-wrapper", function (e) {
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next_button").click(function(){
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function(){
        owl.trigger("owl.prev");
    });

    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function() {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("form").serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });


    // Выбор дня
    $(".day_select").click(function() {
        $(".days li.selected").removeClass("selected");
        $(this).addClass("selected");
    });

    //Popup

    function getPosition(e) {
      var posx = 0;
      var posy = 0;

      if (!e) var e = window.event;

      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      }
      else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft
          + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
          + document.documentElement.scrollTop;
      }

      return {
        x: posx,
        y: posy
      }
    }

    //$(window).mousemove(function (pos) {
    //    $(".pop_up").css('left',(pos.pageX+25)+'px').css('top',(pos.pageY-5)+'px');
    //});

    $(window).mousemove(function (pos) {
        var elem_height = $(".pop_up").outerHeight();
        var elem_width = $(".pop_up").outerWidth();
        var window_height = $(window).height();
        var window_width = $(window).width();
        var margin = 25;
        var posx = getPosition(pos).x;
        var posy = getPosition(pos).y;
        var scrollTop = document.body.scrollTop;
        
        if (posx + margin + margin + elem_width > window_width) {
            $(".pop_up").css('left',posx - margin - elem_width + 'px');
        } else {
            $(".pop_up").css('left',posx + margin +'px');
        }

        if (posy - elem_height / 2 - margin < scrollTop) {
            $(".pop_up").css('top',margin + scrollTop + 'px');
        } else if (posy + elem_height / 2 + margin > scrollTop + window_height) {
            $(".pop_up").css('top',scrollTop + window_height - margin - elem_height + 'px');
        } else {
            $(".pop_up").css('top',posy - elem_height / 2 +'px');
        }

        //if (posy + elem_height / 2 + margin_bottom > window_height * Math.floor((posy + elem_height / 2 + margin_bottom) / window_height)) {
        //    $(".pop_up").css('top',window_height * Math.floor((posy + elem_height / 2 + margin_bottom) / window_height) - elem_height - margin_bottom + 'px');
        //};
    });

    $('.tv_show').hover(
        function() {
            $(".pop_up").css('display','block');
        },
        function() {
            $(".pop_up").css('display','none');
            
        });
});