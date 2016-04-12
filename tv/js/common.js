$(document).ready(function() {

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

    // Выбор дня
    $(".day_select").click(function() {
        $(".days li.selected").removeClass("selected");
        $(this).addClass("selected");
    });

    //Фильтр по передачам
    $(".types_desktop li").click(function() {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected");
        }
        showTVshows();
    });

    function showTVshows() {
        var films_flag = $("#films_flag").hasClass("selected");
        var series_flag = $("#series_flag").hasClass("selected");
        var sport_flag = $("#sport_flag").hasClass("selected");

        if (!films_flag & !series_flag & !sport_flag) {
            $(".tv_show").removeClass("genre_no");
        } else {
            $(".tv_show").addClass("genre_no");

            if (series_flag) {
                $(".tv_show.series").removeClass("genre_no");
            }

            if (films_flag) {
                $(".tv_show.film").removeClass("genre_no");
            }

            if (sport_flag) {
                $(".tv_show.sport").removeClass("genre_no");
            }
        }
    }
    
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
        };
    }

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

    });

    $('.tv_show').hover(
        function() {
            $(".pop_up").css('display','block');
        },
        function() {
            $(".pop_up").css('display','none');  
        });
});