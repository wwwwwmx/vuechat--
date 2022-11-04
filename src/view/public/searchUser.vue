<template>
  <div class="container">
    <div class="container-left">
      <div>
        <el-icon>
          <Search />
        </el-icon>
      </div>
      <div>搜素</div>
    </div>
    <div class="container-right" @click="addGroup">
      <el-icon>
        <Plus />
      </el-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, toRefs } from 'vue'
import emitter from '@/until/bus'
// import { group } from 'console';
const props = defineProps({
  group: Array,
})
const { group } = toRefs(props)
const addGroup = () => {
  console.log(group, 'search中')
  emitter.emit('open', group)
}
</script>
<style lang="less" scoped>
.container {
  width: 380px;
  height: 30px;
  background-color: lightblue;
  padding: 10px;

  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }

  .container-left {
    float: left;
    width: 355px;
    height: 30px;
    background-color: gray;
    text-align: left;
    line-height: 30px;

    div {
      float: left;
      margin-left: 5px;
    }
  }

  .container-right {
    float: right;
    height: 30px;
    line-height: 30px;

    :deep .el-icon {
      margin-top: 6px;
    }
  }
}
</style>