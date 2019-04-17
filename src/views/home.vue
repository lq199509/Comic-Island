<template>
  <div>
    <headlog></headlog>
    <banner :banners="bannerList"></banner>
    <lqnav></lqnav>
    <listdata></listdata>
    <footlist></footlist>
    <goToTop></goToTop>
  </div>
</template>
<script>
import banner from '../components/banner.vue'
import lqnav from '../components/nav.vue'
import headlog from '../components/log.vue'
import listdata from '../components/list-data'
import footlist from '../components/footlist'
import goToTop from '../components/goToTop'
import axios from 'axios'

export default {
  data () {
    return {
      bannerList: []
    }
  },
  components: {
    banner,
    lqnav,
    headlog,
    listdata,
    footlist,
    goToTop
  },
  methods: {
    getBanner () {
      // 获取轮播图的数据的方法
      axios
        .get(
          'https://mhjkm.1391.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123'
        )
        .then(res => {
          // console.log(res.data);
          let data = res.data
          if (data) {
            this.bannerList = data.info
          } else {
            alert('bucunzai')
          }
        })
    }
  },
  created () {
    this.getBanner()
  }
}
</script>

<style scope>
.swiper-container .swiper-wrapper .swiper-slide {
  height: 4.8rem;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
