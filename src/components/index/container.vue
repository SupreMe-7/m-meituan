<template>
  <div class="m-istyle">
    <dl @mousemove="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type='item.tab'
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <!-- <span class="old-price">门市价¥{{item.price_info.old_price}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
                <span class="sold bottom-right-info">{{item.address}}</span>
              </span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                <span class="units">/{{item.price_info.units}}</span>
                <span class="sold bottom-right-info">{{item.address}}</span>
              </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js';
export default {
  data() {
    return {
      kind: "all",
      resultsData: {}
    };
  },
  props: ["nav"],
  created() {
    api.getStyle().then(res=>{
        this.resultsData = res.data.data;
      })
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName;
      if (tagName != "DD") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>

<style lang="sass">
    @import '@/assets/css/index/artistic.scss'
</style>
