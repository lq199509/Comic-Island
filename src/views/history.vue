<template>
  <div>
   <header class="header-tabs">
		<div class="header-back"></div>
		<div class="header-group">
			<div class="header-title font-34" @click="shoucang">收藏</div>
			<div class="header-title font-34 active">历史</div>
		</div>

	</header>
	<section class="comic-cue">

		<div class="cue font-26">
			<div class="cue-pic"></div>
			<p class="fav-text">还未欣赏过任何漫画哦~</p>
		</div>
	</section>
	<section class="hot-recommend">
		<p class="recommend-title font-26">热门推荐</p>
		<div class="recommend-list">
			<div class="list-item">
				<div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/249139/3330753_383d6dcbfab549fdbd1b289f2b4ac473.jpg&quot;);"></div>
				<p class="item-name font-26">脱轨边缘</p>
			</div>
			<div class="list-item">
				<div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/247841/2330701_a690d64f2bb44732814698e3fa231d2d.jpg&quot;);"></div>
				<p class="item-name font-26">废柴的超能后宫</p>
			</div>
			<div class="list-item">
				<div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/213799/2054650_4f2da0a1df77413eb25a50f2d39f0781.jpg&quot;);"></div>
				<p class="item-name font-26">邪气凛然</p>
			</div>
			<div class="list-item">
				<div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/247375/2260286_a18c455b9ea84d2681f71bf26e688d14.jpg&quot;);"></div>
				<p class="item-name font-26">总裁老公爱不够</p>
			</div>
			<div class="list-item">
				<div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/249146/3333485_30a2bf3a52a44c8b864576fca2162f42.jpg&quot;);"></div>
				<p class="item-name font-26">天神外卖员</p>
			</div>
			<div class="list-item">
				<div class="item-pic" style="background-image: url(&quot;//mhdgu.1391.com/bookcenter/coverimages/246679/2206143_d3fb0f5798c5405cbb204c4bb76df309.jpg&quot;);"></div>
				<p class="item-name font-26">神眼鉴定师</p>
			</div>
		</div>
	</section>
  </div>
</template>
<script>
export default {
	methods:{
		shoucang(){

      this.$router.push('./shoucang')

		}
	}
}
</script>


<style>
@import "../styles/reset.css";
@import "../styles/gongyong.css";
@import "../styles/history.css";

</style>
