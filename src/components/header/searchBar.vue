<template>
<div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="ishotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link v-for="(item, index) in suggestList" :key="item + '~' + index" :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js';
  export default {
    data() {
      return {
        searchWord: '',
        isFocus: false,
        hotPlaceList: [],
        searchList: [],
        suggestList:[]
      }
    },
    created() {
        api.searchHotWords().then(res=> {
          this.hotPlaceList = res.data.data;
          this.suggestList = res.data.data;
        })
    },
    computed: {
      ishotPlace() {
        return this.isFocus && !this.searchWord
      },
      isSearchList() {
        return this.isFocus && this.searchWord
      }
    },
    methods: {
      focus() {
        this.isFocus = true
      },
      blur() {
        let self = this
        setTimeout(function () {
          self.isFocus = false
        }, 200)
      },
      input() {
        api.searchWord().then(res=> {
          this.searchList = res.data.data.list.filter((item,index)=>{
            return item.indexOf(this.searchWord) > -1
          })   
        })
      }
    }
  }
</script>

<style lang="sass">
  @import '@/assets/css/public/header/search.scss'
</style>