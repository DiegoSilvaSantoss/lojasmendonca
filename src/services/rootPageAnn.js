export default function pageAnn() {
    const cardAnn = document.getElementById('card-ann');

    cardAnn.addEventListener('click', () => {
        
        window.location.href = './src/pages/loja_Ann/index.html';
    });
}