function toggleFullscreen()
{
    let target = document.querySelector('.fullscreen-target');

    if (!document.fullscreenElement)
    {
        target.requestFullscreen();
    }
    else
    {
        document.exitFullscreen();
    }
}