
// LOJA DE AUGUSTINÓPOIS
export default function rootPageAug() {
    const cardAug = document.getElementById('card-aug');

    if (cardAug) {
        cardAug.addEventListener('click', () => {
            window.location.href = './src/pages/loja_Aug/index.html';
        });
    }
}