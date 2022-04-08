<template>
  <div>
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
import host from '@/config'
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
    promiseTest(num) {
      var result = new Promise(function(resolve, reject) {
        if (num > 2) {
          resolve('我执行成功了！状态变成了resolved')
          console.log(`num的值为${num}`)
        } else {
          resolve('我执行失败， 状态变成了rejected')
          console.log(`num的值为${num}`)
        }
      })
      return result
    },
    setTime(num) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve('第' + num + '个延时器')
        }, 2000)
      })
    },
    async test1() {
      console.log('测试方法2')
      let result = await this.setTime(1)
      console.log(result)
    },
    test() {
      console.log('测试方法')
      console.log('打印config.js中的host', host)
      let res = this.promiseTest(1)
      console.log(res)
      // 箭头函数
      // (a, b) => {
      //   return a + b;
      // }
      // 字符串拼接
      let name = 'shaopf'
      let str1 = 'my name is ' + name
      let str2 = `my name is ${name}`
      console.log('str1: ', str1)
      console.log('str2: ', str2)
      // const声明变量
      const b = 4
      console.log('常量b', b)
      // let声明变量
      let a = 2
      {
        let a = 3
        console.log('第2个a', a)
      }
      console.log('第1个a', a)
    }
  },
  mounted() {
    this.test1()
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
