<template>
    <div>
        <div class="top">
            <div class="userinfo">
                <img :src="userinfo.avatarUrl">
            </div>
            <div class="name">
                <label>{{userinfo.nickName}}</label>
                <p class="notice">{{quote}}</p>
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
        userinfo: {},
        quote: ''
      }
    },
    methods: {
      // 生成随机语句
      rankArray () {
        // Math.random()会生成0-1之间的小数，比如0.48204242025855937
        var a = Math.random() + ''
        // a.charAt(5)取a这个字符串的第6位数，能保证rand1为0-9之间的随机数
        var rand1 = a.charAt(5)
        // 创建一个数组对象
        var quotes = []
        // 将10个励志语句放到数组中
        quotes[1] = '不奋发，则心日颓靡；不检束，则心日恣肆'
        quotes[2] = '自制是一种秩序，一种对于快乐与欲望的控制'
        quotes[3] = '哪怕一点小小的克制，也会使人变得强而有力'
        quotes[4] = '做一个自律的人，像优秀的人学习，然后做好自己'
        quotes[5] = '真正的自由是在所有时候都能控制自己'
        quotes[6] = '每天爱自己多一点！！！'
        quotes[7] = '如果连自己都不能控制，有什么资格去谈自己想要的'
        quotes[8] = '登峰造极的成就源于自律'
        quotes[9] = '自我控制是最强者的本能'
        quotes[0] = '立志言为本，修身行乃先'
        // 根据随机数rand1，在数组中找出随机语句，并赋值到quote上面
        this.quote = quotes[rand1]
      }
    },
    onShow () {
      this.rankArray()
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