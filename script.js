document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButton = document.getElementById('learnMoreButton');
    
    learnMoreButton.addEventListener('click', () => {
        window.location.href = '#about'; // Scroll to the 'About' section
    });
});
const gallery = document.querySelector('.gallery');
const scrollAmount = 300; // Adjust this value based on your image width and gap
const scrollSpeed = 3000; // Time in milliseconds between scrolls

function autoScroll() {
    // Scroll to the right by the specified amount
    gallery.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

    // Reset scroll position if it reaches the end
    if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
        setTimeout(() => {
            gallery.scrollLeft = 0;
        }, scrollSpeed);
    }
}

// Set interval for auto-scrolling
setInterval(autoScroll, scrollSpeed);
document.addEventListener("DOMContentLoaded", function() {
    const trendingContent = document.querySelector(".trending-content");
    const scrollWidth = trendingContent.scrollWidth;

    let start = 0;
    function scroll() {
        start += 2; // Adjust the speed here
        if (start > scrollWidth) {
            start = 0;
        }
        trendingContent.style.transform = `translateX(-${start}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
});
const container = document.querySelector('.exclusives-container');

function autoScroll() {
    container.scrollBy({
        left: 1,
        behavior: 'smooth'
    });
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0; // Reset scroll position to start
    }
}

setInterval(autoScroll, 10); // Adjust interval as needed for desired scrolling speed
