document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-section');

    carousels.forEach(section => {
        const track = section.querySelector('.carousel-track');
        const prevBtn = section.querySelector('.prev-btn');
        const nextBtn = section.querySelector('.next-btn');
        
        // Get width of card dynamically + gap
        const cardWidth = track.querySelector('.card').offsetWidth + 20; 
        let currentIndex = 0;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            // Prevent scrolling past the beginning or end
            const maxIndex = track.children.length - 4; 
            if(currentIndex < 0) currentIndex = 0;
            if(currentIndex > maxIndex) currentIndex = maxIndex;
        };

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            updateCarousel();
        });
    });
});