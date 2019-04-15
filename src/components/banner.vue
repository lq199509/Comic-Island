<template>
  <section class="swiper-container billboards swiper-container-horizontal swiper-container-ios">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
        v-for="item in banners"
        :key="item.id"  style="750px">
        <img :src="item.imageurl" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data () {
    return {
      swiper: null
    }
  },
  props: {
    banners: {
      type: Array
    }
  },
  updated () {
    if (!this.swiper) {
      this.swiper = new Swiper('.swiper-container', {
        loop: true, // 无缝轮播
        autoplay: 1000,
        initialSlide: 0,
        autoplayDisableOnInteraction: false,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>

<style lang="less">
.swiper-container {
  width: 22rem !important;

  .swiper-wrapper{
    height: 11rem;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: red;
  }
  .swiper-wrapper .swiper-slide {
    height: 11rem !important
  }
}

</style>
