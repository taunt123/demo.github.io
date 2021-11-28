var add = document.getElementById('add');
var username = document.getElementById('username');
var password = document.getElementById('password');
var rein = document.getElementById('rein');
// 贵宾邀请码
add.addEventListener('click', function () {
    if (this.checked) {
        console.log(2);
        var p1 = document.createElement('p');
        p1.innerHTML = `<input type="text">`;
        this.parentNode.style.height = 90 + 'px';
        this.parentNode.appendChild(p1);
    } else {
        console.log(3);
        this.parentNode.style.height = 40 + 'px';
        this.parentNode.lastElementChild.remove();
    }
})
//用户名检测
username.onblur = function () {
    var s1 = username.value;

    if (!isMobil(s1)) {
   
        username.style.borderColor = 'red';
        $('#tips').css('color', 'red');
    } else {
        username.style.borderColor = '#000';
        $('#tips').css('color', '#999999');
    }
}
username.onfocus = function () {
    username.style.borderColor = '#000';
    $('#tips').css('color', '#999999');

}
function isMobil(s) {
    var patrn = /^1\d{10}$/;
    if (!patrn.exec(s)) return false
    return true
}
//密码检测
password.onblur = function () {
    var s2 = password.value;
    if (!isPasswd(s2)) {
        password.style.borderColor = 'red';
    }
}
password.onfocus = function () {
    password.style.borderColor = '#000';

}
function isPasswd(s) {
    var patrn = /^(\w){6,16}$/;
    if (!patrn.exec(s)) return false
    return true
}
//密码确认

rein.onblur = function () {
    console.log(username.value);
    console.log(password.value);
    console.log(rein.value);
    var s3 = password.value;
    if (rein.value!==password.value) {
        rein.style.borderColor = 'red';
    }
}
rein.onfocus = function () {
    rein.style.borderColor = '#000';
}
//数据库操作

