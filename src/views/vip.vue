<template>
    <div>
        <header class="header-normal">
			<div class="header-back"></div>
			<span class="header-title font-32">VIP专区</span>
			<div class="header-search"></div>
		</header>

        <div>
        		<section class="classify-list">
			<div class="list-item"
            v-for="item in warmList"
            :key="item.id">
				<div class="item-pic"><img :src="item.img"></div>
				<div class="item-info">
					<div class="info-book font-30">{{item.name}}</div>
					<div class="info-author font-26">作者：{{item.bigbook_author}}</div>
					<div class="info-fans font-26">人气：{{item.Popularity}}</div>
				</div>
			</div>
		</section>
    </div>
    <gototop></gototop>
    </div>
</template>

<script>
import gototop from "../components/goToTop";
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
      Axios.get("../../json/vip.json", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(res => {
        var data = res.data;
        this.warmList = data;
        //console.log(warmList);
      });
    }
  },

  created() {
    this.getList();
  },
  components: {
    gototop
  }
};
</script>


<style>
@import "../styles/index.css";
@import "../styles/classify.css";
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

.go-top .icon-arrow-up {
  width: 0.42666667rem;
  height: 0.24rem;
  margin: 0.26666667rem auto 0.10666667rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0QwQkMyQUM0RkRCMTFFNjkxQ0I4NkY4ODg3MkI3NEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0QwQkMyQUQ0RkRCMTFFNjkxQ0I4NkY4ODg3MkI3NEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRDBCQzJBQTRGREIxMUU2OTFDQjg2Rjg4ODcyQjc0QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRDBCQzJBQjRGREIxMUU2OTFDQjg2Rjg4ODcyQjc0QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpV2dW8AAADHSURBVHjavJTbCgIhEED9uqiItha6PNRun15EFPQBtbRgYzgkixPjOCYcELycA4LGWmuEbIE7cANq6T1S+QHo7Xf0PugvAUN5VkSqvCXkYcSmVEBM/gC6nAiuvCHkY2BORKy1AmLyp5fjHnGEhhypJBFacnEEddGekE8YT7YgIlbcgBx5cgRH3iXKkyLCAztFObKMRLzCiJJyVoTxk5h8qiBHaiKicovXwvJfEZdhQCk5FfEJmLkJcARGBeWI852As/vU3gIMANjHYdmMaYZIAAAAAElFTkSuQmCC);
  background-size: contain;
}

.header-normal {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 1.2rem;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
}

.header-normal .header-back {
  width: 0.61333333rem;
  height: 0.34666667rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAaCAMAAAD/jJ6+AAAAS1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNOfcgEAAAAGHRSTlMA+YTxaxvr3L+mCaqiUUYxJRHYmpKMd14rR8HRAAAAm0lEQVQ4y+2SyQ7CMAxE62xtQ1dW//+XYsURIEw7B8SNOeXNiyLFSfPMeiL3gsDcEjPpEpulY8lBAZnsSCoflJCZ2nJAVAIm9ixpp4rABC8VuayEzMDv8dcdQ2xb3f7RONMmHcOG0fscx8Zkw8zlIbq5IjZjGe8QlbDJIUlLoSI264V0Jhpslp7OD7Dmn5/F/kJyu9vJ/PCvTr8DD0sYr/4QOQEAAAAASUVORK5CYII=);
  background-size: contain;
  position: absolute;
  top: 0.42666667rem;
  left: 0.32rem;
}

.header-normal .header-title {
  max-width: 70%;
  color: #333;
  font-weight: 500;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.header-normal .header-search {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAmVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwwyRpgHAAAAMnRSTlMA+gbmzLWd7pEiDtwExpVDKvLRp1I+FOK/uDkX9q6rjnt3MxqHWAvXpGG6iYBya0pIMClQcwUAAAHZSURBVDjLlZPpmqIwEEUJYRFEBHHfl9ax9+nz/g83UwxBQEXn/Am536WqklRZNcbHeKpT0sm0MwytFn67igvLdf+eceTQpDe/ZTx55PizzW6367yl5GzsK2fwK88Zz6NCiPqeygMvGs5EA2ozromHPFE3qMeciLa/Ll+LXg1wkuzTW5ezcKSG6CJ44rStW4QD4OWSRrLcu/CDBpWYnfN3s7fu0Qdm5o2AjnWfM1BEcmE5brEGCrx/HaIgttpYQZof+gjMW61DIO+cGPyo1XpS8CEfUzlgOw6sZdVy/nYycGRNYfvA2oGJrMDnA+sL6P+MOnm+1im8PbAOICuip+33egC2tbcQqs9Wiq/AKG/eJXhG/drapv/jLyO65XuuQR0K1dbaO87nw8+V0uanhLKfRlTCfmP4rgTFjEFPaikLUwjqtdpXK7PZA5OyuX/OGn3+KRvbh2VgGTYywbfncCFzv7vsbSlhcLg1LF0aPToWRfev+9+XGOH132RBTUxWiHPRrKknsloPT4UQHl2EWWiFce/drnijl+KWnGzz3skGxW4X5V2Ca9fyzWiyCorRanqtvedzwY8TMwRNr2D3P9aDrt91su0oKkUXwbMeYry+9bTXsZ7zer6T/AE4EE3TZn9kCQAAAABJRU5ErkJggg==);
  background-size: contain;
}

.header-normal .header-index,
.header-normal .header-search {
  width: 0.56rem;
  height: 0.56rem;
  position: absolute;
  top: 0.32rem;
  right: 0.32rem;
}

.header-normal .header-index {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAV1BMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwxn+LnKAAAAHHRSTlMAUg338NIUCIbY24/77uPIsaSWaWBOQi0oHPKBH/oJmgAAATRJREFUOMvNlNuOwiAURaFQqGK9a9XZ//+dQxjLgeyAPs56OamupGWdporxYbbBq284IXL6xpyQmD6bVwDnM4DrJ/NugKNSR8Dc++bDAqOPRxsB++iZbgvsnyry3ANb1zb9ATCLSiwv4OB7mXa39eK2i8l6mS5yeamScSZVUCfjTIIka2QSKBllEopknIlYjCSjTIIk40wEJ+NMlKyTiZNJpoEVTsaZWsk4UzNZoEyNZEFZytRINqsZf+QNT6MBzDjlfSIR1VCr2uKN1bUalA9zoWoU6EKd1+/Nqjobs+jYeNAxoXXVn7X6A2zeyxg2wNRRx3TX/CxjRzVA3vAAmIYqU378j2o6Dh/rJTMhkTiWzISk5xXkKTgbHT3kGRcbDevyLNDooFWFtmhgxZRXegeifMV/ARY5MLGD2AosAAAAAElFTkSuQmCC);
  background-size: contain;
}

.header-normal .header-submit {
  color: #333;
  position: absolute;
  top: 0.32rem;
  right: 0.32rem;
}

@media (orientation: landscape) and (max-width: 736px) {
  .header-type {
    width: 100% !important;
  }
}
</style>
