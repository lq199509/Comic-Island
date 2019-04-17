<template>
  <div>
    <!-- <header class="index-header">
      <a href="#">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="#">
        <div class="header-search"></div>
      </a>
    </header> -->
    <nav class="index-nav">
      <a href="#">
        <div class="nav-item">
          <div class="nav-pic pic-1"></div>
          <p class="nav-text font-24">分类</p>
        </div>
      </a>
      <a href="#">
        <div class="nav-item">
          <div class="nav-pic pic-2"></div>
          <p class="nav-text font-24">排行</p>
        </div>
      </a>
      <a href="#">
        <div class="nav-item">
          <div class="nav-pic pic-3"></div>
          <p class="nav-text font-24">VIP专区</p>
        </div>
      </a>
      <a href="#">
        <div class="nav-item">
          <div class="nav-pic pic-4"></div>
          <p class="nav-text font-24">历史</p>
        </div>
      </a>
    </nav>
  </div>
</template>

<style>
.index-nav {
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 10rem;
  height: 2.66666667rem;
  margin: 0 auto;
  padding: 0 0.66666667rem;
}

.index-nav .nav-item .nav-pic {
  background-repeat: no-repeat;
  background-size: contain;
}

.index-nav .nav-item .pic-1 {
  width: 1.46666667rem;
  height: 1.46666667rem;
  background-image: url(../img/fenl.png);
}

.index-nav .nav-item .nav-text {
  margin: 0.13333333rem 0 0;
  color: #8d8d8d;
  font-weight: 500;
  text-align: center;
}

.font-24 {
  font-size: 0.32rem;
}

a:active,
a:hover,
a:link,
a:visited {
  outline: none;
  text-decoration: none;
  color: #333;
}

.index-nav .nav-item .pic-2 {
  width: 1.46666667rem;
  height: 1.46666667rem;
  background-image: url(../img/pai.png);
}

.index-nav .nav-item .pic-3 {
  width: 1.46666667rem;
  height: 1.46666667rem;
  background-image: url(../img/vip.png);
}

.index-nav .nav-item .pic-4 {
  width: 1.46666667rem;
  height: 1.46666667rem;
  background-image: url(../img/history.png);
}
</style>
