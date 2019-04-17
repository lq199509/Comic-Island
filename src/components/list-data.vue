<template>
  <div>
    <section class="index-recommend" v-for="item in fistMsg" :key="item.specialid">
      <div class="recommend-divide"></div>
      <div class="recommend-title">
        <div class="title-group">
          <img class="title-icon" :src="item.icon">
          <span class="title-text font-36">{{ item.name }}</span>
        </div>
        <span class="title-more font-24">更多 &gt;</span>
      </div>
      <div :class="'recommend-type-' + item.comicsviewtype">
        <div class="item" v-for="one in item.comicslist" :key="one.bookstore_id">
          <img class="item-pic" :src="getUrl(one.extension)">
          <p class="item-name font-28">{{ one.bigbook_name }}</p>
          <p class="item-text font-24">{{ getDesc(one.extension) }}</p>
        </div>
      </div>
    </section>

    <section class="index-recommend" v-for="(ms, index) in lastMsg" :key="index">
      <div class="recommend-divide"></div>
      <div class="recommend-title">
        <div class="title-group">
          <img class="title-icon" :src="ms.icon">
          <span class="title-text font-36">{{ ms.name }}</span>
        </div>
        <span class="title-more font-24">更多 &gt;</span>
      </div>

      <div :class="'recommend-type-'+ ms.comicsviewtype">
        <div class="item" v-for="(single, index) in ms.comicslist" :key="index">
          <img class="item-pic" :src="getUrl(single.extension)">
          <div class="ranking-group">
            <div class="item-ranking" :class="'item-ranking-'+index"></div>
          </div>
          <div class="text-group">
            <p class="item-name font-30">{{ single.bigbook_name }}</p>
            <p class="item-hot font-24">
              人气：
              <span class="hot-hot">{{ getHot(single.bigbookview) }}</span>
            </p>
            <p class="item-text font-24">{{ single.brief }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: []
    }
  },
  computed: {
    fistMsg () {
      var arr = []
      arr = this.msg.slice(0, 13)
      return arr
    },
    lastMsg () {
      var arr = []
      arr = this.msg.slice(13)
      return arr
    }
  },
  methods: {
    getHot (num) {
      var x = Number(num)
      if (x > 100000000) {
        return (x / 100000000).toFixed(2) + '亿'
      } else {
        return (x / 10000).toFixed(2) + '万'
      }
    },
    getDesc (str) {
      var obj = JSON.parse(str)
      return obj.recommendwords
    },
    getUrl (str) {
      var obj = JSON.parse(str)
      return obj.xqytt
    },
    getData () {
      axios
        .get(
          'https://mhjkm.1391.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1'
        )
        .then(res => {
          var data = res.data
          if (data.code === 200) {
            this.msg = data.info
          } else {
            alert('获取数据失败！')
          }
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style>
@import "../style/css/reset.css";
@import "../style/css/home.css";
</style>
