export default function rootPage() {
    const cardAug = document.querySelector('.card-aug');

    if (cardAug) {
        cardAug.addEventListener('click', () => {
            window.location.href = './src/pages/loja_Aug/index.html';
        });
    }
}