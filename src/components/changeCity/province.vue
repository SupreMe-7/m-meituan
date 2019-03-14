<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :choose="provinceList"
      :value="province"
      title="省份"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <m-select
      :choose="cityList"
      :value="city"
      title="城市"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityAble"
      className="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import mSelect from "./select.vue";
import api from '@/api/index.js';
export default {
  data() {
    return {
      cityAble: true,
      provinceList: [],
      province: "省份",
      cityList: ["成都", "哈尔滨"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList:["成都", "哈尔滨"],
      searchWord:'',
      loading: false
    };
  },
  created() {
    api.province().then(res=>{
      this.provinceList = res.data.data.map(item=> {
        item.name = item.provinceName
        return item
      })
    })
  },
  components: {
    mSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
      this.cityAble = false;
      this.province = item.name
      this.cityList = item.cityInfoList
    },
    changeCity(item) {
      this.city = item.name
      this.$store.dispatch('setPosition',item)
      this.$router.push({name: 'index'})
    },
    remoteMethod(val) {
        //请求后端接口
    }
  }
};
</script>

<style lang="sass">
    @import '@/assets/css/changecity/iselect.scss'
</style>
