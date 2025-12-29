export default function pageBut() {
    const cardBut = document.getElementById('card-but');

    cardBut.addEventListener('click', () => {
        
        window.location.href = './src/pages/loja_But/index.html';
    });
}