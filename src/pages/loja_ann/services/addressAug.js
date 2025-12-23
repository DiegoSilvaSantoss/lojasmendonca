export default function addressAug() {
    const btn = document.getElementById('address');

    if (!btn) return;

    btn.addEventListener('click', () => {
        window.open('https://maps.app.goo.gl/HBhLsfNp5hpN39Kj7', '_blank')
    });
}

