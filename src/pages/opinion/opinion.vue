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
        </div>
        <button>提交</button>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        opinion: '',
        word_count: 0
      }
    },
    watch: {
      opinion () {
        this.word_count = this.opinion.length
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