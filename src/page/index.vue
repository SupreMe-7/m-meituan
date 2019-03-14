<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-contain  :nav="iStyle" />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-contain  :nav="iMovie" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import mMenu from '@/components/index/menu.vue'
import mLife from '@/components/index/life.vue'
import mContain from '@/components/index/container.vue'
export default {
    data() {
        return {
            iStyle: {
                class: 'istyle',
                title: '有格调',
                list: [{
                tab:'all',
                text:'全部'
            },{
                tab:'food',
                text:'约会聚餐'
            },{
                tab:'spa',
                text:'丽人SPA'
            },{
                tab:'movie',
                text:'电影演出'
            },{
                tab:'travel',
                text:'品质出游'
            }]
            },
            iMovie: {
                class: 'youhui',
                title: '猫眼电影',
                list: [{
                tab:'now',
                text:'正在热映'
            },{
                tab:'will',
                text:'即将上映'
            }]
            }
        }
    },
    components: {
        mMenu,
        mLife,
        mContain
    }
}
</script>

<style lang="sass">
    @import '@/assets/css/index/index.scss'
</style>
