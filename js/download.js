document.addEventListener('DOMContentLoaded', () => {//定义下载链接
    const gameDownloadLink = document.getElementById('NEKOPARA_download');
    if (gameDownloadLink) {
        gameDownloadLink.addEventListener('click', (event) => {
            event.preventDefault();
            selectCloudServiceForGame();
        });
    }//定义下载链接到此结束

    const animeLinks2024 = document.querySelectorAll('#anime_202401-12');//定义2024年动画情报下载链接
    animeLinks2024.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            selectCloudServiceForAnime2024();
        });
    });//定义2024年动画情报下载链接到此结束

    const animeLinks2025 = document.querySelectorAll('#anime_202501-12');//定义2025年动画情报下载链接
    animeLinks2025.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            selectCloudServiceForAnime2025();
        });
    });
});//定义2025年动画情报下载链接到此结束

function selectCloudServiceForGame() {//网盘服务选择
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
}//网盘服务选择到次结束

function selectCloudServiceForAnime2024() {//2024年动画情报服务选择
    const services = [
        { name: '第一季度', url: './download/animes/y-2024/zip/202401v4.0.zip' },
        { name: '第二季度', url: './download/animes/y-2024/zip/202404v4.2.zip' },
        { name: '第三季度', url: './download/animes/y-2024/zip/202407v4.0.zip' },
        { name: '第四季度', url: './download/animes/y-2024/zip/202410v4.7.zip' },
    ];

    let serviceList = '请选择月份:\n';
    services.forEach((service, index) => {
        serviceList += `${index + 1}. ${service.name}\n`;
    });

    const choice = prompt(serviceList);
    const selectedService = services[parseInt(choice) - 1];

    if (selectedService) {
        if (selectedService.url) {
            window.location.href = selectedService.url;
        } else {
            alert('该季度文件暂未整理，请等待后续更新或访问相关百科网站查找');
        }
    } else {
        alert('未输入值或无效的选择');
    }
}//2024年动画情报服务选择到此结束

function selectCloudServiceForAnime2025() {//2025年动画情报服务选择
    const services = [
        { name: '第一季度', url: './download/animes/y-2025/zip/202501v3.0.zip' },
        { name: '第二季度', url: '' },
        { name: '第三季度', url: '' },
        { name: '第四季度', url: '' },
    ];

    let serviceList = '请选择月份:\n';
    services.forEach((service, index) => {
        serviceList += `${index + 1}. ${service.name}\n`;
    });

    const choice = prompt(serviceList);
    const selectedService = services[parseInt(choice) - 1];

    if (selectedService) {
        if (selectedService.url) {
            window.location.href = selectedService.url;
        } else {
            alert('该季度文件暂未整理，请等待后续更新或访问相关百科网站查找');
        }
    } else {
        alert('未输入值或无效的选择');
    }
}//2025年动画情报服务选择到此结束
