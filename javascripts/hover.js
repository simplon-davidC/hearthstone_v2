function main(){
    var tap = ("ontouchstart" in document.documentElement);

    if(tap)
    {
        $window = $(window);
        var screen_width = $window.width();
    }

// Si l'Ã©cran est large d'au moins 500px, on affiche la carte
    if(!tap || (tap && screen_width >= 500))
    {
        $('.over a').on("mousemove", function(e) {
            // LARGEUR DU NOM DE LA CARTE
            var width = parseInt($(this).width());
            var marginLeft = width+20;

            // HAUTEUR DE LA PAGE JUSQU'AU SCROLL TOP
            var height = $(window).height();
            var scrollTop = $(window).scrollTop();
            var scrollBottom = scrollTop + height;


            // HAUTEUR DEPUIS L'ELEMENT HOVER JUSQU'EN HAUT DE LA PAGE
            var element = $(this);
            var offset = element.offset();
            var top = parseInt(offset.top - scrollTop);
            var bottom = parseInt(scrollBottom - offset.top);

            var position = "";
            if(bottom < 320)
            {
                position = e.pageY+30 - $('.container').offset.top - 350;
            }
            else if (top < 320)
            {
                position = e.pageY+30 - $('.container').offset.top;
            }
            else
            {
                position = e.pageY+30 - $('.container').offset.top-350;
            }

            $(this).siblings('img').css('left', e.pageX-30 - $('.container').offset.left).css('top', position);
            $(this).siblings('img').show();

            //console.log($(this).siblings('img'));
        });
    }

    $('.over a').on("mouseout", function(e)
    {
        $(this).siblings('img').hide();
    });

    $('.over a').on("click", function(e)
    {
        $(this).siblings('img').hide();
    });

}

$(document).ready(main);