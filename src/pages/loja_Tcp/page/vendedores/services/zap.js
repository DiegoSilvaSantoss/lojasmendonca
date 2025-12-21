export default function zapVendedorDiego() {
    const btnzap = document.getElementById('btn-zap-diego');

    btnzap.addEventListener('click', () => {

        const tel = '5563999789035';

        const texto = `Olá, tudo bem? Quero ser atendido por gentileza!`;

        const msgFormatada = encodeURIComponent(texto);

        const url = `https://whatsa.me/${tel}/?t=${msgFormatada}`;

        window.open(url, '_blank');
    })
}