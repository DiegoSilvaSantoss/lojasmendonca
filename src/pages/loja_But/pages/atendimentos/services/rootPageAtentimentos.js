export default function rootPageAtendimento() {
    const btnAtendente = document.getElementById('btn-atendimentos');

    btnAtendente.addEventListener('click', () => {
        window.location.href = './pages/atendimentos/index.html'
    })
}