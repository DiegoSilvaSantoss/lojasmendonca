// LOJA DE BURITI
export default function rootPageBut() {
    const cardBut = document.getElementById('card-but');

    if (cardBut) {
        cardBut.addEventListener('click', () => {
            window.location.href = './src/pages/loja_But/index.html';
        });
    }
}