<template>
  <div>
    <button open-type="getUserInfo" lang="zh_CN" class="btn" @getuserinfo="login">授权登录</button>
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
import config from '@/config'
import qcloud from 'wafer2-client-sdk'
export default {
  data() {
    return {
      mark: 0
    }
  },
  methods: {
    addMark(add) {
      this.mark = this.mark + add
    },
    login() {
      qcloud.setLoginUrl(config.loginUrl)
      qcloud.login({
        success: userInfo => {
          console.log('登录成功', userInfo)
        },
        fail: err => {
          console.log('登录失败', err)
        }
      })
    },
    loginSuccess(userInfo) {
      wx.setStorageSync('userinfo', userInfo)
    }
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
