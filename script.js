const reviewsList = document.getElementsByClassName('reviews-list')[0];
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    scrollAmount += 300;
    reviewsList.scrollLeft = scrollAmount;
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= 300;
    if (scrollAmount < 0) scrollAmount = 0;
    reviewsList.scrollLeft = scrollAmount;
});