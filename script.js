// 3D Model Carousel Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    if (slides.length === 0) return;
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function currentSlide(n) {
    showSlide(n);
}

setInterval(() => {
    showSlide(slideIndex + 1);
}, 6000);

// Catalog Horizontal Carousel Logic
let catalogIndex = 0;
function moveCatalog(direction) {
    const track = document.getElementById('catalogTrack');
    const cards = track.querySelectorAll('.catalog-card');
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth + 24; // Card width + gap
    catalogIndex += direction;
    
    const maxIndex = cards.length - Math.floor(track.parentElement.offsetWidth / cardWidth);
    
    if (catalogIndex < 0) catalogIndex = 0;
    if (catalogIndex > maxIndex && maxIndex >= 0) catalogIndex = maxIndex;
    
    track.style.transform = `translateX(-${catalogIndex * cardWidth}px)`;
}

// Modal Dialog Logic
function openModal(title, subtitle, imgSrc, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalSubtitle').innerText = subtitle;
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalDescription').innerText = description;
    
    document.getElementById('catalogModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('catalogModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('catalogModal');
    if (event.target === modal) {
        closeModal();
    }
};
