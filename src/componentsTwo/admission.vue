<template>
    <div>
        		<section class="classify-list">
			<div class="list-item"
            v-for="(item,index) in warmList"
            :key="item.id">
				<div class="item-pic"><img :src="item.img"></div>
				<div class="item-info">
					<div class="info-book font-30">{{item.name}}</div>
					<div class="info-author font-26">作者：{{item.bigbook_author}}</div>
					<div class="info-fans font-26">人气：{{item.Popularity}}</div>
          <div :class="'item-ranking-'+index" ></div>
          <div class="item-ranking-other font-24">{{item.number}}</div>
				</div>
			</div>
		</section>
    </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      warmList: [],
      pageNum: 1,
      pageSize: 20
    };
  },

  methods: {
    getList() {
      Axios.get("../../json/list.json", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(res => {
        var data = res.data;
        this.warmList = data[5];
      });
    }
  },

  created() {
    this.getList();
  }
};
</script>


<style>
@import "../styles/ranking.css";
</style>
