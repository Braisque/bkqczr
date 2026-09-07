window.addEventListener('load', () =>
{
    const wrapper = document.getElementById('map-wrapper');

    const scrollX = (4096 - wrapper.clientWidth) / 2;
    wrapper.scrollTo(scrollX, 0);
});