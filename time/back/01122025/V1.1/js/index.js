document.addEventListener('DOMContentLoaded', () => {
    // 动态入站效果
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);
    });
});
