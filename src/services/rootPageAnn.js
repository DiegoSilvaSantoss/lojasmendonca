// LOJA DE ANANÁS
export default function rootPageAnn() {
    const cardAnn = document.getElementById('card-Ann');

    if (cardAnn) {
        cardAnn.addEventListener('click', () => {
            window.location.href = './src/pages/loja_ann/index.html';
        });
    }
}