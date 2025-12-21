// LOJA DE TOCANTINÓPOLIS
export default function rootPageAnn() {
    const cardTcp = document.getElementById('card-Tcp');

    if (cardTcp) {
        cardTcp.addEventListener('click', () => {
            window.location.href = './src/pages/loja_Tcp/index.html';
        });
    }
}