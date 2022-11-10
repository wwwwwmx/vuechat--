<template >
  <div class="dialog-body">
    <el-dialog v-model="dialogVisible" width="30%" :before-close="handleClose">
      <div>
        <ul>
          <li v-for="(item, index) in groupList.groups" :key="item">
            <div class="container">
              <el-icon :size="20" @click="removeIpt(index)">
                <Remove />
              </el-icon>
              <el-input placeholder="请输入内容" v-model="item.groupName" :disabled="index != sum">
              </el-input>
              <el-icon :size="20" @click="changeIpt(index)">
                <Edit />
              </el-icon>
            </div>
            <div v-show="item.groupName == ''" style="color:red;padding-left:30px;">群组名不能为空</div>
          </li>
        </ul>
        <div class="add-group" @click="addGroup">
          <el-icon :size="20">
            <CirclePlus />
          </el-icon>
        </div>
      </div>
      <div class="btn-group">
        <el-button type="success" plain @click="confirm" :disabled="isEmpty">确定</el-button>
        <el-button type="warning" plain @click="cancleWindow">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, computed, onBeforeUnmount } from 'vue'
import { reqChangeList, reqAddList, reqDeleteList, reqGetList } from '../../newApi/index'
import emitter from "@/until/bus"
import { useRoute } from 'vue-router';
let dialogVisible = ref(false)
// let isEmpty = ref(false)
let sum = ref(-1)
let body = reactive({
  id: Number,
  data: [{
    id: '',
    nickName: ''
  }]
})
let groupList = reactive({
  groups: [{
    groupName: '',
    friends: [

    ]
  }
  ]
})
const route = useRoute()
const handleClose = () => {
  dialogVisible.value = false
}
const changeIpt = (index) => {
  sum.value = index
  console.log(sum, 'sum')
}
const removeIpt = async (index) => {
  body = { id: route.query.id, data: JSON.stringify(groupList.groups) }
  console.log(body, 'boddy')
  let obj = await reqDeleteList(body)
  console.log(obj)
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
onMounted(async () => {
  console.log(route.query.id)
  // let data = await reqGetList({ data: route.query.id })
  // console.log(data, '测试')
})
const confirm = async () => {
  dialogVisible.value = false
  console.log(route.query.id)
  console.log(groupList.groups, 'groupList.groups')
  body = { id: route.query.id, data: groupList.groups }
  console.log(body)
  let { data } = await reqChangeList(body)
  console.log(data)
}
const cancleWindow = () => {
  console.log(groupList.groups, '更改没有取消的groupList')
  console.log(groupList.groups, '更改取消的groupList')
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
        list-style: none;
        height: 40px;
        margin: 10px;

        .container {
          display: flex;
          width: 100%;
          height: 100%;
          margin-bottom: 0px;

          :deep.el-input {
            flex: 1;
            height: 35px;
          }

          :deep .el-icon {
            flex: 0.25;
            height: 30px;
            width: auto;
          }
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