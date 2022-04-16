<template>
    <div>
        <div class="top">
            <div class="userinfo">
                <img :src="userinfo.avatarUrl">
            </div>
            <div class="name">
                <label>{{userinfo.nickName}}</label>
                <p class="notice">**随机语句**</p>
            </div>
        </div>
        <div class="contain">
            <div class="row">
                <label class="left">
                    <img class="img" src="../../../static/images/homework.png">
                </label>
                <label class="name">&nbsp;&nbsp;操作指引</label>
                <label class="right">
                    >
                </label>
            </div>
            <div class="row">
                <label class="left">
                    <img class="img" src="../../../static/images/classroom.png">
                </label>
                <label class="name">&nbsp;&nbsp;小程序开发课程</label>
                <label class="right">
                    >
                </label>
            </div>
            <div class="row">
                <label class="left">
                    <img class="img" src="../../../static/images/delete.png">
                </label>
                <label class="name">&nbsp;&nbsp;清空记录</label>
                <label class="right">
                    >
                </label>
            </div>
            <div class="row">
                <label class="left">
                    <img class="img" src="../../../static/images/approval.png">
                </label>
                <label class="name">&nbsp;&nbsp;意见反馈</label>
                <label class="right">
                    >
                </label>
            </div>
        </div>
    </div>
</template>


<script>
  export default {
    data () {
      return {
        // 用户信息
        userinfo: {}
      }
    },
    mounted () {
      const userinfo = wx.getStorageSync('userinfo')
      if (userinfo.openId) {
        this.userinfo = userinfo
        console.log('this.userinfo: ', this.userinfo)
      }
    }

    // onShow () {
    //   const userinfo = wx.getStorageSync('userinfo')
    //   if (userinfo.openId) {
    //     this.userinfo = userinfo
    //   }
    // }
  }
</script>


<style lang="scss">
.contain{
  margin-top: 10px;
  background:#FFFFFF;
  font-size:15px;
  .row{
    padding: 0px 18px;
    border-bottom: 1px #E8E8E8 solid;
    height: 55px;
    line-height: 55px;
    .img {
      float:left;
      width: 20px;
      height: 20px;
      padding-top:16px;
    }
    .name {
      float:left;
    }
  }
  .right {
    float: right;
    color: #C8C8C8;
    line-height:55px;
  }
  .left {
    width:80%;
  }
}  

.top{
  height: 80px;
  width: 100%;
  background:#EA5149;
  padding-top: 30px;
  display: block;
  .userinfo{
    padding-bottom: 5px;
    float: left;
    img{
      width: 120rpx;
      height:120rpx;
      margin: 10rpx;
      border-radius: 1px;
      border: 1px #D0D0D0 solid;
    }
  }
  .name{
    padding-top: 30px;
    padding-left: 5px;
    color: #FFFFFF;
    font-size: 16px;
    float: left;
    .underline{
      border: 1px solid #ffffff;
      border-radius:5px;
      text-align:center;
    }
    .notice{
      color: #D8D8D8;
      font-size: 12px;
    }
    .a-line{
      background:#EA5149;
      border: none;
      display: inline;
      font-size: 16px;
      color: #FFFFFF;
      text-decoration:underline;
    }
  }
}

</style>