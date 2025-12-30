export default function rotaSectionLojas() {
    const imgArrow = document.getElementById('img-arrow');
    const cards = document.getElementById('cards-loja');

    if (!imgArrow || !cards) return;

    imgArrow.addEventListener('click', () => {

        cards.scrollIntoView({behavior: 'smooth'});
    })
}