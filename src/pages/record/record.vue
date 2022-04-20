<template>
  <div>
    <!-- 如果在数据库没有查询到记录，show_record为false，提示当前没有记录 -->
    <div v-if='show_record'>
      <div class="prompt">还没有任何记录哦~</div>
    </div>
    <!-- 如果在数据库查询到该用户的记录，show_record默认为true，显示记录表格 -->
    <div v-else>
      <div class="table th">
        <div class="date">时间</div>
        <div class="busi">分数</div>
        <div class="mark">最后得分</div>
        <div class="net">备注</div>
      </div>
      <!-- :record是将每个循环的记录数据传到RecordList组件中 -->
      <RecordList :key='index' v-for='(record,index) in records' :record='record'></RecordList>
    </div>
  </div>
</template>

<script>
import RecordList from '@/components/RecordList'
import {get} from '@/utils/utils'
export default {
  components: {
    RecordList
  },
  data () {
    return {
      show_record: false,
      userinfo: {},
      records: []
    }
  },
  methods: {
    async getRecords () {
      // 调用后台数据时显示[加载中]提示框
      wx.showToast({
        title: '加载中',
        icon: 'loading'
      })
      // 需要传到后台的数据
      const data = {
        openid: this.userinfo.openId
      }
      // 将后台传过来的数据保存到records变量中
      const resultRecords = await get('/weapp/showRecords', data)
      this.records = resultRecords.records
      console.log('从后台返回的记录数据', this.records)
      // 通过records数组长度来判断show_record变量为false或者true
      if (this.records.lenth === 0) {
        this.show_record = true
      } else {
        this.show_record = false
      }
      wx.hideToast()
    }
  },
  onShow () {
    const userinfo = wx.getStorageSync('userinfo')
    // 如果缓存中有userinfo的信息，说明用户登录了。
    if (userinfo.openId) {
      // 将用户信息储存到data的userinfo字段里面，this.userinfo就是指的这个字段。
      this.userinfo = userinfo
    }
    this.getRecords()
  },

  onShareAppMessage(e) {
    return {
      title: '真自律',
      path: '/pages/index/main',
      imageUrl: ''
    }
  }
}
</script>

<style lang="scss" slot-scope>
// 在style标签中加入了scoped(slot-scope)，意思是样式仅在此页面有效，不影响其他页面
.add{
    margin-top: 20px;
    margin-bottom: 10px;
    text-align:center;
  p{
      font-size: 15px;
  }
}
.table{
  width: 100%;
}
.th {
  width: 100%;
  height: 30px;
  line-height:30px;
  background: #EA5149;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  display: flex;
}
.prompt{
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 14px;
  color: #888888;
  text-align: center;
}
.date{
  width: 23%;
  padding-left: 60px;
}
.busi{
  width: 10%;
  margin-left: 10px;
}
.mark{
    width: 20%;
  margin-left: 10px;
}
.net{
  width: 20%;
  margin-left: 20px;
}
.text-footer{
  text-align: center;
  font-size: 12px;
  margin-bottom:5px;
  padding-top: 5px;
}
</style>