<template>
    <div class="page-login">
        <div class="login-header">
            <a class="logo" href="http://www.meituan.com"></a>
        </div>
        <div class="login-panel">
            <div class="banner">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            </div>
            <div class="form">
                <h4 v-if="error" class="tips">{{error}}</h4>
                <p>
                    <span>账号登录</span>
                </p>
                    <el-input
                        placeholder="手机号/用户名/有邮箱"
                        :class="{error:error && !userName}"
                        prefix-icon="profile"
                        v-model="userName">
                    </el-input>
                    <el-input
                        placeholder="密码"
                        :class="{error:error && !password}"
                        type="password"
                        prefix-icon="password"
                        v-model="password">
                    </el-input>
                <div class="foot">
                    <a href="#">忘记密码？</a>
                </div>
                <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
                <p class="reg">
                    <span>还没有账号？</span>
                    <router-link :to="{name:'register'}">免费注册</router-link>
                </p>
                <div class="oauth-wrapper">
                    <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
                    <div class="oauth cf">
                        <a class="oauth__link oauth__link--qq" href="/account/connect/tencent" data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}" target="_blank"></a>
                        <a class="oauth__link oauth__link--weibo" href="/account/connect/sina" data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <ul>
                <li><a href="#">关于美团</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">商家入驻</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">美团手机版</a></li>
            </ul>
            <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
        </footer>
    </div>
</template>

<script>
import api from '@/api/index.js';
export default {
    data() {
        return {
            userName: '',
            password: '',
            error: ''
        }
    },
    methods: {
        submit() {
            api.login({
               userName: this.userName ,
               password: this.password
            }).then(res=> {
                if(res.data.status == 'success') {
                    this.$router.push({name: 'index'})
                    this.$store.commit('setUserName',this.userName)
                }else {
                    this.error = res.data.msg
                }
            })
        }
    }
}
</script>

<style lang="sass">
    @import '@/assets/css/login/index.scss'
</style>
