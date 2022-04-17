<template>
    <div>
        <div class="contain">
          <div class="row">
            <label class="name">意见与反馈</label>
          </div>
          <div class="row text">
             <div>
               <textarea v-model="opinion" maxlength="200" placeholder="点击这里输入您的建议" class="input">
               </textarea>
               <label class="word-count">{{word_count}}/200</label>
             </div>
          </div>
          <div class="row">
            <div>
              <label class="name">相关截图（选填）</label>
              <label class="img-count">{{img_count}}/2</label>
            </div>
            <label v-for="(item, index) in src" :key="index">
              <img :src="item" class="img">
            </label>
            <label v-if="img_count<2" @click="uploadPicture">
              <img class="img" src="../../../static/images/addimage.png">
            </label>
          </div>
          <div class="row">
            <div class="name">
              微信号（选填）
            </div>
            <input v-model="wechat" maxlength="20" placeholder="如果想详细交流，请留下微信号哦" class="wechat-input">
          </div>
        </div>
        <button @click="submit">提交</button>
    </div>
</template>

<script>
  import {post, showModel} from '@/utils/utils'
  export default {
    data () {
      return {
        opinion: '',
        word_count: 0,
        src: [],
        img_count: 0,
        wechat: ''
      }
    },
    watch: {
      opinion () {
        this.word_count = this.opinion.length
      },
      src () {
        this.img_count = this.src.length
      }
    },
    methods: {
      uploadPicture () {
        let that = this
        wx.chooseImage({
          count: 2,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success (res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
            // 在这里直接使用this.src，其实是调用的wx.chooseImage这个对象
            // this.src
            // 正确的方法应该是先将this，在上文保存一下。
            that.src.push(tempFilePaths)
            console.log('path: ', that.src)
          }
        })
      },
      async submit () {
        console.log('word-count: ', this.word_count)
        if (this.word_count > 0) {
          // console.log('可以执行')
          // 这里指需要传递的数据字段
          const data = {
            opinion: this.opinion,
            src: this.src.join(','),
            wechat: this.wechat,
            openid: wx.getStorageSync('userinfo').openId
          }
          try {
            // await 是指要等到后端执行完成，并获取到返回数据之后，再往下执行。
            const res = await post('/weapp/createopinion', data)
            console.log('从后端返回执行正确的信息是：', res)
            showModel('提交成功', '已经将您的反馈提交给了开发者~')
          } catch (e) {
            console.log('从后端返回执行正确的信息是：', e)
            showModel('提交失败', '服务器出了一点问题， 请稍后再试~')
          }
        } else {
          // console.log('不可以执行')
          showModel('提交失败', '意见反馈不能为空~')
        }
      }
    }
  }
</script>

<style lang="scss">
.contain{
  background:#FFFFFF;
  font-size:15px;
  .text {
    height: 110px;
  }
  .row{
    border-bottom: 1px #E8E8E8 solid;
    padding: 5px 15px;
    .name {
      width:80%;
      height: 40px;
      line-height: 40px;
    }
    .input {
      width:100%;
      height:85px;
      font-size:14px;
      padding-top:5px;
    }
    .word-count {
      float:right;
      color: #808080;
    }
    .img-count {
      float:right;
      line-height: 40px;
      color: #808080;
    }
    .add-img {
      width:80px;
      height:80px;
    }
    .img {
      width:66px;
      height:66px;
      margin-bottom:7px;
      margin-right: 10px;
    }
    .wechat-input{
      font-size:14px;
    }
  }
}  
button {
  margin:20px auto;
  width:90%;
  border-radius: 5px;
  background:#EA5149;
  font-size:16px;
  color:#FFFFFF;
  font-weight:bold;
}

</style>