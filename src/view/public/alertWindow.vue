<template >
  <div class="dialog-body">
    <el-dialog v-model="dialogVisible" width="30%" :before-close="handleClose">
      <div>
        <ul>
          <li v-for="(item, index) in groupList.groups" :key="item">
            <el-icon :size="20" @click="removeIpt(item, index)">
              <Remove />
            </el-icon>
            <el-input placeholder="请输入内容" v-model="item.groupName" :disabled="index == sum">
            </el-input>
            <!-- <input v-model=" readonly v-if="index == sum">
            <input v-model="item.groupName" v-else> -->
            <el-icon :size="20" @click="changeIpt(index)">
              <Edit />
            </el-icon>
          </li>
        </ul>
        <div class="add-group" @click="addGroup">
          <el-icon :size="20">
            <CirclePlus />
          </el-icon>
        </div>
      </div>
      <div class="btn-group">
        <el-button type="success" plain @click="confirm">确定</el-button>
        <el-button type="warning" plain @click="cancleWindow">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import emitter from "@/until/bus"
import { onBeforeUnmount } from 'vue'
let dialogVisible = ref(false)
let noIpt = ref(true)
let sum = ref('')
let groupList = reactive({
  groups: [{
    groupName: ''
  }
  ]
})
const handleClose = () => {
  dialogVisible.value = false
}
const changeIpt = (index) => {
  console.log(index, 'index')
  sum.value = index
  console.log(sum, 'sum')
}
const removeIpt = (item, index) => {
  groupList.groups.splice(index, 1)
}
const addGroup = () => {
  groupList.groups.push({ groupName: '', friends: [] })
}
emitter.on('open', (group: any) => {
  dialogVisible.value = true;
  groupList.groups = group.value.groups
})
onBeforeUnmount(() => {
  emitter.off('open')  //关闭
})
const confirm = () => {
  dialogVisible.value = false
}
const cancleWindow = () => {
  dialogVisible.value = false
  groupList.groups = []
}
</script>
<style lang="less" scoped>
.dialog-body {
  div {
    width: 100%;
    margin-bottom: 10px;

    ul {
      list-style: none;

      li {
        display: flex;
        list-style: none;
        height: 30px;
        margin: 10px;

        input {
          flex: 1
        }

        :deep .el-icon {
          flex: 0.25;
          height: 30px;
        }
      }
    }

    .add-group {
      width: auto;
      float: right;
      padding-top: 15px;
      padding-right: 15px;
    }

    &::after {
      content: "";
      display: block;
      height: 0;
      clear: both;
    }
  }

  .btn-group {
    width: 145px;
    margin: 0 auto;
  }
}
</style>