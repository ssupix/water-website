// OCEAN ELEMENTS
// DRAGGABLE FISH

// runs code when all the content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Function to add initial random positions to fish elements
    function addInitialRandomPositions() {
        // Select all fish elements
        const fishElements = document.querySelectorAll(".drag-item");

        // Loop through each fish element and set initial random positions
        fishElements.forEach(function(fish) {
            fish.style.left = Math.random() * (window.innerWidth - fish.clientWidth) + "px";
            fish.style.top = Math.random() * (window.innerHeight - fish.clientHeight) + "px";
        });
    }

    // Call the function to add initial random positions to fish elements
    addInitialRandomPositions();
});


// DRAG AND DROP
// register the plugin
gsap.registerPlugin(Draggable) 

// use this plugin on elements with class .drag-item"
Draggable.create(".drag-item", {
    // you can drag elements outside of #ocean div
    bounds: "#ocean"
});









