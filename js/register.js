function huoqu() {
    console.log(1111)
    var num = 60;
    var yz = document.getElementById("yz")
    var timer = setInterval(function() {
        num--
        yz.innerHTML = num + '秒后重新获取'
        yz.style.color = ' #ccc'
        yz.disabled = ' disabled'
        if (num === 0) {
            element.disabled = ''
            element.style.color = ' #ffa600'
            element.innerHTML = '获取验证码'
            clearInterval(timer)
        }
    }, 1000)
}