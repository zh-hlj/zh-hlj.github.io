
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'url(./../img/118106032_p0.png)',
        'url(.../img/1733463165743.jpg)',
        /*'url(./images/background3.jpg)'*/
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = randomImage;
});