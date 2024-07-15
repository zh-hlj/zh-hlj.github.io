function updateTime() {
    var startTime = new Date('2024-07-06T00:00:00').getTime();
    var endTime = new Date('2024-09-10T20:00:00').getTime();
    var now = new Date().getTime();

    var distance = endTime - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + "天 " + hours + "小时 "
    + minutes + "分钟 " + seconds + "秒 ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = "维护已完成";
    }
}

var x = setInterval(updateTime, 1000);
