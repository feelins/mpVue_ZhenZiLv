<template>
  <div>
    <div v-if="showLogin">
      <LoginWindow @changeShow="getModel(arguments)"></LoginWindow>
    </div>
    
    <div class="show">
      <div class="mark-text">当前分数</div>
      <div class="mark">{{mark}}</div>
    </div>
    <div class="row">
      <div class="button right" @click="addMark(1)">+1</div>
      <div class="button left" @click="addMark(-1)">-1</div>
    </div>
    <div class="row">
      <div class="button right" @click="addMark(5)">+5</div>
      <div class="button left" @click="addMark(-5)">-5</div>
    </div>
  </div>
</template>

<script>
import LoginWindow from '@/components/LoginWindow'
import {showModel, post, get} from '@/utils/utils'
export default {
  components: {
    LoginWindow
  },
  data() {
    return {
      mark: 0,
      userinfo: {},
      showLogin: false
    }
  },
  methods: {
    async addMark(add) {
      try {
        const data = {
          openid: this.userinfo.openId,
          add: add
        }
        // 请求后端，找到server/controllers/createrecord.js文件
        const res = await post('/weapp/createrecord', data)
        console.log('从后端返回的执行正确的信息是：', res)
        this.mark = this.mark + add
        console.log('this.mark', this.mark)
      } catch (e) {
        showModel('请求失败', '请重试哦')
        console.log('从后端返回的信息是: ', e)
      }
    },
    getModel(val) {
      this.showLogin = val[0]
      this.userinfo = val[1]
      console.log('this.whowLogin', this.showLogin)
      // 在这里加的意思是，每一次登录成功，也会调用查询分数
      this.getMark()
    },
    async getMark() {
      try {
        // 请求后端，找到server/controllers/getmark.js文件
        const res = await get('/weapp/getmark', {openid: this.userinfo.openId})
        console.log('从后端返回的执行正确的信息是：', res)
        this.mark = res.mark
        console.log('this.mark', this.mark)
      } catch (e) {
        showModel('请求失败', '请下拉页面重试哦')
        console.log('从后端返回的信息是: ', e)
      }
    }
  },
  mounted() {
    const userinfo = wx.getStorageSync('userinfo')
    if (userinfo.openId) {
      this.userinfo = userinfo
      console.log('用户信息: ', this.userinfo)
    } else {
      wx.hideTabBar()
      this.showLogin = true
    }
  },
  onShow() {
    this.getMark()
  }
}
</script>

<style lang="scss">
.show{
  text-align: center;
  height: 266px;
  background: #ea5149;
  margin-bottom: 5px;
  color: antiquewhite;
  font-weight: bold;
  .mark-text{
    font-size: 20px;
    padding: 28px;
  }
  .mark{
    font-size: 88px;
    color: yellow;
  }
}
.row{
  margin: 40px 56px;
  .button{
    width: 70px;
    height: 70px;
    line-height: 70px;
    border-radius: 20%;
    border: none;
    text-align: center;
    font-size: 25px;
    color:#FFF;
    font-weight: bold;
  }
}
.right{
  background: #ea5149;
  float: right;
}
.left{
  background: #feb600;
  margin-right: 80px;
}
</style>
