// JQUERY PLUGINS

$(function(){

    // Parallax initialization
    $(".sea-shore-parallax").parallax({
        imageSrc: "assets/imgs/sea.jpg" // Setting the background image for parallax effect
    });

    // Parallax initialization
    $(".about-img").parallax({
        imageSrc: "assets/imgs/this.jpeg" // Setting the background image for parallax effect
    });

    // Parallax initialization
    $(".lake-image").parallax({
        imageSrc: "assets/imgs/lake.jpg" // Setting the background image for parallax effect
    });

    
    // Initializing background video
    $(".my-background-video").bgVideo({
        // starts right when the page loads
        pauseAfter: 0,
        // no fade
        fadeIn: 0,
        // no controls
        showPausePlay: false
    });
    
});

