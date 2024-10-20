// JS Is Always Wrapped in DOMContentLoaded To Ensure The Page Is Fully Loaded Before The Script Is Ran 
// This Prevents Errors From Trying To Access Elements That Don't Exist Yet

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    let currentSlide = 0;
    const slides = document.querySelectorAll('.Slide');
    const indicators = document.querySelectorAll('.Indicator');

    console.log("Slides found:", slides.length); // Check if slides are found

    function showSlide(index) {
        const totalSlides = slides.length;
        if (index >= totalSlides) {
            currentSlide = 0; // Loop Back To First Slide
        } else if (index < 0) {
            currentSlide = totalSlides - 1; // Loop To Loop To Last Slide
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100; // Move Slides By Width
        document.querySelector('.Slides').style.transform = `translateX(${offset}%)`;

        // Update indicators
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // 3s Interval
    setInterval(nextSlide, 3000);

    // Initialize The First Slide
    showSlide(currentSlide);


    
});