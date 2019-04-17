<template>
  <div>
   <header class="header-tabs">
		<div class="header-back"></div>
		<div class="header-group">
			<div class="header-title font-34 active">收藏</div>
			<div class="header-title font-34" @click="lishi">历史</div>
		</div>

	</header>
	<section class="comic-cue">

		<div class="cue font-26">
			<div class="cue-pic"></div>
			<p class="fav-text">还没有收藏任何一本书哦！</p>
		</div>
	</section>
	<section class="hot-recommend">
    <p class="recommend-title font-26">热门推荐</p>
    <div class="recommend-list">
        <div class="list-item">
            <div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/249079/3314529_b501e630b59445c3b17fa852a78150ac.jpg&quot;);"></div>
            <p class="item-name font-26">阴间贷</p>
        </div><div class="list-item">
            <div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/246679/2206143_d3fb0f5798c5405cbb204c4bb76df309.jpg&quot;);"></div>
            <p class="item-name font-26">神眼鉴定师</p>
        </div><div class="list-item">
            <div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/249146/3333485_30a2bf3a52a44c8b864576fca2162f42.jpg&quot;);"></div>
            <p class="item-name font-26">天神外卖员</p>
        </div><div class="list-item">
            <div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/247841/2330701_a690d64f2bb44732814698e3fa231d2d.jpg&quot;);"></div>
            <p class="item-name font-26">废柴的超能后宫</p>
        </div><div class="list-item">
            <div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/249354/3355235_99acd5c949314c50b623ddddb763a704.png&quot;);"></div>
            <p class="item-name font-26">冥王大人晚上好</p>
        </div><div class="list-item">
            <div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/179178/179178_fdfdc354365742d6a2e02e904803ea26.jpg&quot;);"></div>
            <p class="item-name font-26">都市极品仙医</p>
        </div>
    </div>
</section>
  </div>
</template>

<script>
export default {
  methods:{
    lishi(){
      this.$router.push('./history')
    }
  }
}
</script>


<style>
@import "../styles/reset.css";
@import "../styles/gongyong.css";
@import "../styles/shoucang.css";
</style>
