// 监听日期输入框的输入事件
document.getElementById('search-date').addEventListener('input', function() {
    const searchDate = this.value; // 获取输入的日期
    const historyItems = document.querySelectorAll('.history-item'); // 获取所有历史记录项
    historyItems.forEach(item => {
        const itemDate = item.getAttribute('data-date'); // 获取历史记录项的日期
        // 根据输入的日期过滤历史记录项
        if (itemDate.startsWith(searchDate)) {
            item.style.display = ''; // 显示匹配的历史记录项
        } else {
            item.style.display = 'none'; // 隐藏不匹配的历史记录项
        }
    });
});

// 为超链接添加鼠标悬停效果
document.querySelectorAll('.links').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'blue';
        link.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '';
        link.style.textDecoration = '';
    });
});

// 监听版本输入框的输入事件
document.getElementById('search-version').addEventListener('input', function() {
    const searchVersion = this.value.toLowerCase(); // 获取输入的版本并转换为小写
    const historyItems = document.querySelectorAll('.history-item'); // 获取所有历史记录项
    historyItems.forEach(item => {
        const versionText = item.querySelector('.version').textContent.toLowerCase(); // 获取历史记录项的版本并转换为小写
        // 根据输入的版本过滤历史记录项
        if (versionText.includes(searchVersion)) {
            item.style.display = ''; // 显示匹配的历史记录项
        } else {
            item.style.display = 'none'; // 隐藏不匹配的历史记录项
        }
    });
});
