<template>
 <div>
<header class="header-normal">
			<div class="header-back"></div>
			<span class="header-title font-32">我的</span>

</header>
<section class="mine-login">
			<div class="login-pic"></div>
			<p class="login-btn font-30"><router-link to='/logins'>登录</router-link><router-link to='/register'>注册</router-link></p>

</section>
<section class="mine-menu font-30">

		<a class="menu-item">
			<span class="icon-fav"></span>
			<span class="item-text" @click="shoucang">收藏</span>
		</a>
		<a class="menu-item">
			<span class="icon-clock"></span>
			<span class="item-text" @click="lishi">历史</span>
		</a>
		<a class="menu-item">
			<span class="icon-mhd"></span>
			<span class="item-text" @click="about">关于漫画岛</span>
		</a>
		<a class="menu-item">
			<span class="icon-pencil"></span>
			<span class="item-text" @click="coupleBack">反馈</span>
		</a>
</section>
 </div>
</template>
<script>
export default {
   methods:{
     shoucang(){
      this.$router.push('shoucang')
    },
    lishi(){
      this.$router.push('history')
    },
    about(){
      this.$router.push('about')
    },
    coupleBack(){
      this.$router.push('coupleback')
    }
   }

}

</script>


<style>
@import "../styles/reset.css";
@import "../styles/gongyong.css";
@import "../styles/login.css";

</style>
