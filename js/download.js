document.addEventListener('DOMContentLoaded', () => {//定义网盘下载链接监听器
    const gameDownloadLink = document.getElementById('games_download');
    if (gameDownloadLink) {
        gameDownloadLink.addEventListener('click', (event) => {
            event.preventDefault();
            selectCloudServiceForGame();
        });
    }//定义网盘下载链接到此结束

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

    const animeLinks2026 = document.querySelectorAll('#anime_202601-12'); // 定义2026年动画情报下载链接
    animeLinks2026.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            selectCloudServiceForAnime2026();
        });
    });

    // 动态入站效果
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);
    });
});//定义2025年动画情报下载链接到此结束

function selectCloudServiceForGame() {//网盘服务选择
    const services = [
        { name: '百度网盘', url: 'https://pan.baidu.com/s/1TY8NagX6NBDqQhttXXOONg?pwd=tzsg' },
        { name: '夸克网盘（提取码：bBPJ）', url: 'https://pan.quark.cn/s/a6211fdada88' },
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
        { name: '第一季度', url: './download/animes/y-2025/zip/202501v3.11.zip' },
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

function selectCloudServiceForAnime2026() { // 2026年动画情报服务选择
    const services = [
        { name: '第一季度', url: '' },
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
} // 2026年动画情报服务选择到此结束
