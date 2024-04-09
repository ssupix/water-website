$(function(){
    // Parallax initialization
    $(".sea-shore-parallax").parallax({
        imageSrc: "assets/imgs/sea.jpg"
    });

    $(".about-img").parallax({
        imageSrc: "assets/imgs/this.jpeg"
    });

    $(".lake-image").parallax({
        imageSrc: "assets/imgs/lake.png"
    });

    $(window).trigger('resize').trigger('scroll');

    $(".my-background-video").bgVideo({
        pauseAfter: 0,
        fadeIn: 0,
        showPausePlay: false
    });

    // ScrollReveal initialization
    ScrollReveal().fish('.item', {
        delay: 375,
        duration: 500,
        reset: true
    });
    
});

