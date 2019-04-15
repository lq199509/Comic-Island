<template>
  <!-- <section class="index-recommend">
    <div class="recommend-divide"></div>
    <div class="recommend-title">
      <div class="title-group">
        <img class="title-icon" src="https://mhdgu.1391.com/upload/icon/180208/ic_renqi2.png">
        <span class="title-text font-36">人气推荐</span>
      </div>
      <span class="title-more font-24">更多 &gt;</span>
    </div>
    <div class="recommend-type-1">
      <div class="item">
        <img
          class="item-pic"
          src="https://mhdgu.1391.com/upload/BigBook201904/b0313e77f220486ea319eef23de3ad2f.png"
        >
        <p class="item-name font-28">很纯很暧昧</p>
        <p class="item-text font-24">学渣的美妙后宫生活</p>
      </div>
      <div class="item">
        <img
          class="item-pic"
          src="https://mhdgu.1391.com/upload/BigBook201901/0286943eda8945aa90a0b46586923576.jpg"
        >
        <p class="item-name font-28">地府开发商</p>
        <p class="item-text font-24">让全世界都知道这个地府被我承包了！</p>
      </div>
      <div class="item">
        <img class="item-pic" src="https://mhdgu.1391.com/upload/BigBook201812/lndqj400.jpg">
        <p class="item-name font-28">落难千金的逆袭</p>
        <p class="item-text font-24">失去的终会夺回来</p>
      </div>
      <div class="item">
        <img class="item-pic" src="https://mhdgu.1391.com/upload/BigBook201807/wjzccrf400400.jpg">
        <p class="item-name font-28">我家总裁吃软饭</p>
        <p class="item-text font-24">失忆总裁竟赖在我家不走？！</p>
      </div>
    </div>
  </section>-->
  <div>
    <section class="index-recommend" v-for="item in msg" :key="item">
      <div class="recommend-divide"></div>
      <div class="recommend-title">
        <div class="title-group">
          <img class="title-icon" :src="item.icon">
          <span class="title-text font-36">{{ item.name }}</span>
        </div>
        <span class="title-more font-24">更多 &gt;</span>
      </div>
      <div :class="'recommend-type-' + item.comicsviewtype">
        <div class="item" v-for="a in item.comicslist" :key="a.bigbook_id">
          <img
            class="item-pic"
            :src="getUrl(a.extension)"
          >
          <p class="item-name font-28">{{ a.bigbook_name }}</p>
          <p class="item-text font-24">{{ getDesc(a.extension) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: [],
      data: [1, 2, 3, 4]
    };
  },
  methods: {
    getDesc(str) {
        var obj = JSON.parse(str);
        return obj.recommendwords;
    },
    getUrl(str){
        var obj = JSON.parse(str);
        return obj.xqytt;   
    },
    getData() {
      axios
        .get(
          "https://mhjkm.1391.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1"
        )
        .then(res => {
          console.log(res.data);
          var data = res.data;
          if (data.code === 200) {
            this.msg = data.info;
          } else {
            alert("获取数据失败！");
          }
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
@import "../style/css/reset.css";
@import "../style/css/home.css";
</style>
