document.addEventListener('DOMContentLoaded', () => {
    const gameDownloadLink = document.getElementById('gamedownload');
    if (gameDownloadLink) {
        gameDownloadLink.addEventListener('click', (event) => {
            event.preventDefault();
            selectCloudServiceForGame();
        });
    }

    const animeLinks = document.querySelectorAll('.animes');
    animeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            selectCloudServiceForAnime();
        });
    });
});

function selectCloudServiceForGame() {
    const services = [
        { name: '百度网盘', url: 'https://pan.baidu.com/s/14Gxqzi2NZE3q4lsruwl6sg?pwd=tzsg' },
        { name: '夸克网盘（提取码：sLBM）', url: 'https://pan.quark.cn/s/c654142b4e34' },
    ];

    let serviceList = '请选择一个网盘服务:\n';
    services.forEach((service, index) => {
        serviceList += `${index + 1}. ${service.name}\n`;
    });

    const choice = prompt(serviceList);
    const selectedService = services[parseInt(choice) - 1];

    if (selectedService) {
        window.location.href = selectedService.url;
    } else {
        alert('未输入值或无效的选择');
    }
}

function selectCloudServiceForAnime() {
    const services = [
        { name: '', url: '' },
        { name: '', url: '' },
    ];

    let serviceList = '请选择一个网盘服务:\n';
    services.forEach((service, index) => {
        serviceList += `${index + 1}. ${service.name}\n`;
    });

    const choice = prompt(serviceList);
    const selectedService = services[parseInt(choice) - 1];

    if (selectedService) {
        window.location.href = selectedService.url;
    } else {
        alert('未输入值或无效的选择');
    }
}
