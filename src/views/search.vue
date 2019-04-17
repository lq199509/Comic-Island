<template>
  <div>
    <header class="search-header">
			<div class="header-back"></div>
			<div class="header-search">
				<span class="icon-search"></span>
				<input class="search-input font-24" type="search" placeholder="漫画名丨作者 ^_^">
			</div>
			<div class="header-btn font-30">搜索</div>
		</header>
		<section class="search-recommend">
			<div class="recommend-title font-26">
				<span class="title-title">大家都在搜</span>
				<span class="title-btn" @click="shuaxin"><span class="icon-refresh"></span>刷新</span>
			</div>
			<div class="recommend-content font-28">
				<span class="recommend-item"
        v-for="item in searchData"
        :key="item.id"
        > {{ item.keyword}}</span>

			</div>
		</section>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
      return{
        searchData:[]
      }
    },
    methods:{
      getSearchData(){
        axios.get('https://mhjkm.1391.com/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8'
        ).then(res=>{
          let data=res.data
           if(data.code===200){
             this.searchData=data.info.hotWordsList
           }

         })

      },
      shuaxin(){
       this.getSearchData()
      }
    },
    created(){
      this.getSearchData()
    }
}
</script>






<style>
@import '../styles/reset.css';
@import '../styles/gongyong.css';
@import '../styles/search.css';

</style>
