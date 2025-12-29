export default function pageVendedores() {
    const btnVendedor = document.getElementById('btn-vendedores');

    btnVendedor.addEventListener('click', () => {

        window.location.href = './pages/vendedores/index.html'
    })
}