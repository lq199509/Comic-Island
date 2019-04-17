<template>
  <div>
    <header class="header-normal">
    <div class="header-back"></div>
    <span class="header-title font-32">求书&amp;反馈</span>
    <span class="header-submit font-28"@click="tijiao">提交</span>
</header><section class="feedback-select">
    <p class="select-title font-28">反馈类型：</p>
    <div class="btn-group">
        <div class="item font-24"
        v-for="item in coupleBackData"
        :key="item.id"
        :class="{ active : active == item.id }"
        @click="selected(item.id)"
        >{{ item.title}}</div>

        <div class="item"></div>
    </div>
  </section><section class="feedback-input">
    <textarea class="input-main font-24" placeholder="请输入详细反馈内容，200字以内哦~喵~" maxlength="200" v-model="modData"></textarea>
    <span class="input-num font-24">0/200</span>
    <input type="number" class="input-contact font-24" placeholder="QQ/手机至少填一项" v-model="qqData">
  </section><section class="feedback-follow">
    <p class="follow-text font-26">官方Q群：239159587</p>
    <p class="follow-text font-26">微信公众号：漫画岛（mhdapp）</p>
    <div class="follow-group">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACZCAMAAAALgmiIAAABy1BMVEUAAAD///////////////////////////////////8AAAA/Pz8YGBgyMjKOjo76+/sRERH39/fOzs7c3NywsLDi4uNVVVW2trafn5/o6OghISGmpqbU1dWIiIirq6s5OTkmJiZsa2tPT0+UlJSampoJCQna1+/GxsZmZmbs7OxxcXF4eHhaWlorKythYGBISEjLyNbd2vLz8vO7urrv7+/X19e+vr+CgoLdnqDi3fXh4dzEgYF+fn7Wp6XCwsLcm5vYytvTmJnc2vng1O/g2e7/9+nf0ub67t3X3fTLjI2XUFG3RjX14NHVvczknJvbmZXOiYejZFz+/e3T0N3grarSlJDIhoS3WknZt7jWtKu7fnva4v7///XV0efFws++ssXnv7fwtbfno6DIkpXSi5HDjYjKd3GoNyS/vMjr0MPhubDHoLDqsK+9p6PSo5uzjo+xdW/+49zPtMXhxcHlpanKnpjRg37gws7PmKvgkZTKVDnk7v32ycSVd4GmdneqbGjr4vzf18/YzMTerbaGjLHKrK5OZqfAmJ98ZomAbmm8aGF6T12DMDSbJRmgrcuulaM2SZCzWl3AQiLo+vE8M3HQYFs/JSWwzN5YNzmOzpQdAAAACXRSTlMABuJUqtqJW5SFnEL+AAAVsklEQVR42syWb5OaMBDG9f60EwXBHCpKQQ5lEKg4U/X6xun3/1h9uOyYxASntnXG581m99nc/g4Q0vtU//nliT2GXl+e+72znl/ZI+n1mbj6X9ij6Yu4bI8HBrTPW8keUbih/SdEj/2dPKNwW3u3nvq9r59bbkejbXfT196LWFTDLkWy+0N3YpRivTRjmn6iNGHsjdwP6USd8yrR8NKj91g66NKJnRXqzhClTC+NdLIhSkfGCnJD6Zw656V0O3vybxgyhiW6k6G00UtrnWyKUolrRq5y+Ued84bUoZL5pojsUJaHCzKYG4WM+iPZPC7LskGJl2VBbiDdkX2encw/jC+VENkwz1OdbAHXk2QpbWCQm+cuwjrP8xClFKniIh0SWWLMO/h2MmZoT2Qp3AsyBilkTMoZDByEVTtbpKrrIyWyPTPUQTY2GgMicwXK7I/ItoOBS3sjRARH53aJLDDmjbvJ5rOz9jqZj9Jot9stOskmtNEB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" class="follow-2dcode">
        <p class="group-text font-22">截屏二维码，用微信扫一扫选择相册，扫描二维码完成关注</p>
    </div>
  </section>
  <hint v-if="flag"></hint>
  <hintyes v-if="flag1"></hintyes>
  </div>

</template>

<script>
import hint from '../components/hint';
import hintyes from '../components/hintyes';
export default {
  data() {
    return {
     coupleBackData:[
       {id:1 , title:'求漫画'},
       {id:2 , title:'章节/内容问题'},
       {id:3 , title:'加载慢/功能问题'},
       {id:4 , title:'岛蛋/支付问题'},
       {id:5 , title:'其他问题'},
       ],
    active:'',
       flag:false,
       flag1:false,
       modData:"",
       qqData:""
    }
  },
  methods:{
    selected(id){
      this.active = id;
    },
    tijiao(){
      if(this.modData!=""&&this.qqData!=""){
        this.flag1=true

      setTimeout(() => {
        this.flag1=false
        this.$router.push('./login')
      }, 1500);


     }else{
        this.flag=true
        setTimeout(() => {
        this.flag=false
      }, 1500);

     }
      }


  },
   components: {
    hint,
    hintyes
   },

}
</script>

<style>
@import "../styles/reset.css";
@import "../styles/gongyong.css";
@import "../styles/coupleback.css";
</style>
