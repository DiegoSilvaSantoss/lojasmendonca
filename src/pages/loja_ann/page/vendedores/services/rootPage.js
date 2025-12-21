export default function rootPageVendedor() {
    const btn = document.getElementById('sellers');

    btn.addEventListener('click', () => {

        window.location.href = './page/vendedores/index.html'
    })
}