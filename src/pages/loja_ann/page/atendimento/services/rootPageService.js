export default function rootPageService() {
    const btnService = document.getElementById('service');

    btnService.addEventListener('click', () => {
        window.location.href = './page/atendimento/index.html'
    })
}