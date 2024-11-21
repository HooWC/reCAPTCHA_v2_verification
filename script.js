// 当用户通过验证时调用的回调函数
function onRecaptchaSuccess() {
    // 验证成功后自动跳转到 home.html
    window.location.href = 'home.html';
}