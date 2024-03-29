
$(function(){

    $(".my-background-video").bgVideo({
        pauseAfter: 0,
        fadeIn: 0,
        showPausePlay: false
    });

    $(".sea-shore-parallax").parallax({

        imageSrc: "assets/imgs/sea.jpg"

    });

    $(".about-img").parallax({

        imageSrc: "assets/imgs/this.jpeg"

    });

    $(window).trigger('resize').trigger('scroll');

});

