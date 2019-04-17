<template>
  <header class="index-header">
    <router-link to="/login">
      <div class="header-user">
        <div class="user-btn"></div>
      </div>
    </router-link>
    <div class="header-logo"></div>
    <a href="#">
      <div class="header-search"></div>
    </a>
  </header>
</template>

<style>
.index-header {
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 10rem;
  height: 1.2rem;
  margin: auto;
  padding: 0 0.4rem;
  background-color: #fff;
  position: fixed !important;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
}

.index-header .header-user .user-btn {
  width: 0.66666667rem;
  height: 0.66666667rem;
  background: url(../img/my.png) no-repeat;
  background-size: contain;
}

.index-header .header-logo {
  width: 2.48rem;
  height: 0.74666667rem;
  background: url(../img/log.png) no-repeat;
  background-size: contain;
}

.index-header .header-search {
  width: 0.66666667rem;
  height: 0.66666667rem;
  background: url(../img/seach.png) no-repeat;
  background-size: contain;
}
</style>
