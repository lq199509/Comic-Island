<template>
  <div>
    <header class="header-photo">
      <div class="icon-back"></div>
      <div class="header-pic"></div>
    </header>
    <section class="register-main">
      <p class="input-group font-24">
        <label>
          邮
          <span class="hide">邮箱</span>箱：
        </label>
        <input type="text" placeholder="请输入你的邮箱">
      </p>
      <p class="input-group font-24 password">
        <label>
          密
          <span class="hide">密码</span>码：
        </label>
        <input type="password" placeholder="请设置6-16位的字母、数字、符号的密码">
      </p>
      <p class="input-group font-24 password">
        <label>确认密码：</label>
        <input type="password" placeholder="请再次输入你的密码">
      </p>
      <div class="register-btn font-26">注册</div>
    </section>
    <footer class="register-footer">
      <p class="content font-24">
        已有账号？马上
        <span class="go-login">登录</span>
      </p>
    </footer>
  </div>
</template>
<style>
@import "../style/css/reset.css";
body,
html {
  min-height: 100%;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.header-photo {
  width: 10rem;
  margin: 0 auto;
  padding: 4.29333333rem 0 0;
  background: url(../img/tu1.png) no-repeat top;
  background-size: cover;
  position: relative;
}

.header-photo .icon-back {
  width: 0.64rem;
  height: 0.34666667rem;
  background: url(../img/tu5.png) no-repeat;
  background-size: contain;
  position: absolute;
  top: 0.58666667rem;
  left: 0.42666667rem;
}

.header-photo .header-pic {
  width: 4.98666667rem;
  height: 4.90666667rem;
  margin: 0 auto;
  background: url(../img/tu2.png) no-repeat 50%;
  background-size: cover;
}

.font-30 {
  font-size: 0.4rem;
}

/*head css*/

.register-main {
  box-sizing: border-box;
  width: 10rem;
  margin: 0.53333333rem auto;
  padding: 0 0.90666667rem;
}
.register-main .input-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 0 0.13333333rem;
  border-bottom: 1px solid #ddd;
  position: relative;
}
html * {
  outline: 0;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.font-24 {
  font-size: 0.32rem;
}
.register-main .input-group .hide {
  color: #fff;
}
.register-main .input-group input {
  width: 6.13333333rem;
  border: none;
}
.register-main .password {
  margin: 0.8rem 0 0;
}
.register-main .password input {
  letter-spacing: 0.2em;
}
.font-24 {
  font-size: 0.32rem;
}
.register-main .register-btn {
  height: 0.96rem;
  margin: 0.53333333rem 0 0;
  line-height: 0.96rem;
  text-align: center;
  color: #fff;
  background-color: #ff4c17;
  border-radius: 6px;
}

/*footer scc*/

.register-footer {
  box-sizing: border-box;
  width: 10rem;
  margin: 0 auto;
  padding: 0 0.90666667rem 0.42666667rem;
}
.register-footer .content {
  text-align: right;
}
.register-footer .content .go-login {
  color: #5094f7;
}
.font-26 {
  font-size: 0.34666667rem;
}
</style>
