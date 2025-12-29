export default function pageTcp() {
    const cardTcp = document.getElementById('card-tcp');

    cardTcp.addEventListener('click', () => {
        
        window.location.href = './src/pages/loja_Tcp/index.html';
    });
}