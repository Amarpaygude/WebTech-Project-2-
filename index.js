let firstCard = null;
let isChecking = false;

document.querySelectorAll('.card').forEach(card => {
    card.textContent = card.getAttribute('number');
});

setTimeout(() => {
document.querySelectorAll('.card').forEach(card => {
card.textContent = ''; 
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
    if (isChecking || card.className.includes('flipped')) return;
    card.className = 'card flipped';
    card.textContent = card.getAttribute('number')
    if (!firstCard) {
        firstCard = card;
    } else {
    isChecking = true;
    setTimeout(() => {
    if (firstCard.getAttribute('number') === card.getAttribute('number')) {
        firstCard.className = 'card matched';
        card.className = 'card matched';
    } else {
        firstCard.className = 'card';
        card.className = 'card';
        firstCard.textContent = '';
        card.textContent = '';
    }
    firstCard = null;
    isChecking = false;
    }, 500);
    }
});
});
}, 1000);
