export default function addressAug() {
    const btn = document.getElementById('address');

    if (!btn) return;

    btn.addEventListener('click', () => {
        window.open('https://maps.app.goo.gl/mqgJ3NHwE39zaj2U9', '_blank')
    });
}

