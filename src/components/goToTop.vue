<template>
  <section class="go-top font-20" v-if="hideOrShow" @click="goToTop()">
    <div class="icon-arrow-up"></div>顶部
  </section>
</template>

<script>
export default {
  data () {
    return {
      hideOrShow: false
    }
  },
  methods: {
    goToTop () {
      document.documentElement.scrollTop = 0
    },
    onScoll () {
      // 返回顶部的显示及隐藏
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop >= 250) {
        this.hideOrShow = true
      } else {
        this.hideOrShow = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScoll)
  },

  activated () {
    window.addEventListener('scroll', this.onScoll)
  },

  deactivated () {
    console.log('deactivated')
    window.removeEventListener('scroll', this.onScoll)
  }
}
</script>

<style>
.go-top {
  width: 1.2rem;
  height: 1.2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  text-align: center;
  position: fixed;
  z-index: 999;
  bottom: 2.53333333rem;
  right: 0.16rem;
  color: #fff;
}
.font-20 {
  font-size: 0.26666667rem;
}
.go-top .icon-arrow-up {
  width: 0.42666667rem;
  height: 0.24rem;
  margin: 0.26666667rem auto 0.10666667rem;
  background: url(../img/gotop.png) no-repeat;
  background-size: contain;
}
</style>
