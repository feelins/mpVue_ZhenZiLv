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
  </div>
</template>

<script>

export default {
  data() {
    return {
      mark: 0
    }
  },
  methods: {
    addMark (add) {
      this.mark = this.mark + add
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


</style>
