<template>
  <div class="page-changeCity">
    <el-row>
        <province />
    </el-row>
    <el-row>
        <hot title='热门城市:' :list = 'hotCity'/>
    </el-row>
    <el-row>
        <hot title='最近访问:' :list = 'recentList'/>
    </el-row>
    <el-row>
        <category />
    </el-row>
  </div>
</template>

<script>
import province from '@/components/changeCity/province.vue'
import hot from '@/components/changeCity/hot.vue'
import category from '@/components/changeCity/categroy.vue';
import api from '@/api/index.js';
  export default {
    data () {
      return {
        hotCity: [],
        recentList: []
      }
    },
      components: {
          province,
          hot,
          category
      },
      created() {
        api.hot().then(res=>{
          this.hotCity = res.data.data.map((item)=>item.name)
        }),
        api.recents().then(res=> {
          this.recentList = res.data.data.map((item)=>item.name)
        })
      }
  };
</script>
<style lang="sass">

</style>
