<template>
  <div>
    <header class="header-photo">
      <div class="icon-back"></div>
      <router-link class="icon-reg font-30" to="/register">注册</router-link>
      <div class="header-pic"></div>
    </header>
    <section class="login-main">
      <div class="input-group font-24">
        <label>邮 箱：</label>
        <input type="text" placeholder="请输入您的邮箱">
      </div>
      <div class="input-group font-24 password">
        <label>密 码：</label>
        <input type="password" placeholder="请输入您的密码">
        <span class="forget font-20">忘记密码?</span>
      </div>
      <div class="login-btn font-26">登录</div>
    </section>
    <footer class="login-third">
      <p class="third-title font-20">或者用以下方式登录</p>
      <div class="third-group">
        <div class="login-qq"></div>
        <div class="login-weibo"></div>
      </div>
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

.header-photo .icon-reg {
  width: 1.94666667rem;
  height: 1.65333333rem;
  line-height: 1.65333333rem;
  text-align: center;
  font-weight: 600;
  background: url(../img/tu6.png) no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  right: 0;
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

/*头部css*/

.login-main {
  box-sizing: border-box;
  width: 10rem;
  margin: 0.53333333rem auto;
  padding: 0 0.90666667rem;
}

.login-main .input-group {
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

.login-main .input-group input {
  width: 5.33333333rem;
  border: none;
}

.login-main .password {
  margin: 0.8rem 0 0;
}

.login-main .password input {
  letter-spacing: 0.2em;
}

.login-main .input-group .forget {
  color: #5094f9;
  position: absolute;
  right: 0;
}

.font-20 {
  font-size: 0.26666667rem;
}

.font-24 {
  font-size: 0.32rem;
}

.login-main .login-btn {
  height: 0.96rem;
  margin: 0.53333333rem 0 0;
  line-height: 0.96rem;
  text-align: center;
  color: #fff;
  background-color: #ff4c17;
  border-radius: 6px;
}

.font-26 {
  font-size: 0.34666667rem;
}

/*登录css*/

.login-third {
  box-sizing: border-box;
  width: 10rem;
  margin: 0.74666667rem auto;
  padding: 0 0.90666667rem;
  position: relative;
}

.login-third .third-title {
  width: 2.93333333rem;
  margin: auto;
  text-align: center;
  background-color: #fff;
  position: absolute;
  z-index: 999;
  top: -0.18666667rem;
  left: 0;
  right: 0;
}

.login-third .third-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0.61333333rem 1.06666667rem 0;
  border-top: 1px solid #ddd;
}

.login-third .third-group .login-qq {
  width: 1.2rem;
  height: 1.2rem;
  background: url(../img/tu3.png) no-repeat;
  background-size: contain;
}

.login-third .third-group .login-weibo {
  width: 1.2rem;
  height: 1.2rem;
  background: url(../img/tu4.png) no-repeat;
  background-size: contain;
}

/*footer css*/
</style>
