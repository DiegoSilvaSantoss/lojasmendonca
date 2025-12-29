export default function addressBut() {
    const addressBut = document.getElementById('map-but');

    addressBut.addEventListener('click', () => {

        window.open('https://maps.app.goo.gl/odN1mJhr1rWBnXEp6', '_blank');
    });
}
