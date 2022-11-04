//好友列表、分组、群组
<template>
  <div class="home-container">
    <div class="left-container">
      <div>
        <searchUser :group="group"></searchUser>
      </div>
      <div>
        <ul class="ul">
          <li v-for="item in group.groups" :key="item">
            <div class="item-container">
              <div class="item-ul">
                <el-icon>
                  <ArrowRight />
                  <ArrowDown />
                </el-icon>
              </div>
              <div class="item-ul">{{ item.groupName }}</div>
            </div>
            <div class="item-li">
              <ul>
                <li v-for="subItem in item.friends" :key="subItem">
                  <div class="img-container"><img :src="subItem.imgUrl" alt=""></div>
                  <div class="content-container">
                    {{ subItem.nickName }}
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>

      </div>
    </div>
    <div class="right-container">
      <div class="list-container">
        <div class="list-name">
          <div class="list-left">1233</div>
          <div class="list-right">
            <div class="wechat-list">
              用户名
              <el-icon>
                <Female />
                <Male />
              </el-icon>
            </div>
            <div class="wechat-style">微信号:</div>
            <div class="wechat-style">地区:</div>
          </div>
        </div>
        <div class="list-detail">
          <div>备注名</div>
          <div>朋友圈动态</div>
        </div>
        <div class="list-button">
          <div>
            <el-button type="success">发消息</el-button>
            <el-button type="danger">删除好友</el-button>
          </div>
        </div>
      </div>
    </div>
    <alertWindow ref="alertwindow"></alertWindow>
  </div>
</template>
<script setup lang="ts">
import searchUser from '../public/searchUser.vue'
import { indexStore } from '../../store/index'
import { onMounted, toRefs, reactive } from 'vue'
import { reqGetFriend, reqLogin } from '@/newApi/index'
import alertWindow from '@/view/public/alertWindow.vue'
let userInfo = toRefs(indexStore())
let group = reactive({
  groups: [
    {
      groupName: '',
      friends: [
        {
          id: '',
          nickName: '',
          imgUrl: ''
        }
      ]
    }
  ],
})
onMounted(async () => {
  let id = userInfo.userInfo.value._id
  let { data, status } = await reqGetFriend({ data: id })
  if (status == 200) {
    group.groups = data.data[0].groups;
  }
  group.groups[0].friends.forEach(async (item) => {
    if (status == 200) {
      let { data, status } = await reqLogin({ id: item.id })
      item = { 'nickName': item.nickName, ...data.data }
      console.log(item, 'data')
    }
  })
  console.log(group, 'friends里面')
})
const add = () => {
  console.log('123')
}
// const showWindow=()=>{
//   $ref.
// }
</script>
<style lang="less" scoped>
.content-container {
  line-height: 50px;
}

.left-container {
  .ul {
    list-style: none;

    li {
      height: auto;
      padding: 0px 10px;

      &::after {
        content: "";
        display: block;
        height: 0;
        clear: both;
      }

      .item-container {
        width: 100%;
        height: 100%;

        &::after {
          content: '';
          height: 0;
          display: block;
          clear: both;
        }

        .item-ul {
          float: left;
          height: 100%;
          line-height: 40px;

          :deep .el-icon {
            margin-top: 12px;
          }
        }
      }


      .item-li {
        &::after {
          content: "";
          display: block;
          height: 0;
          clear: both;
        }

        ul {
          li {
            margin: 10px;
            border-bottom: none;

            .img-container {
              float: left;
              width: 50px;
              height: 50px;

              img {
                width: 100%;
                height: 100%
              }
            }

            .content-container {
              float: left;
              width: auto;
              padding-left: 0px;
            }
          }
        }

      }
    }
  }
}

.right-container {
  .list-container {
    margin: 0 auto;
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;

    .list-name {
      flex: 1;
      margin: 20px 0px;
      border-bottom: 1px solid gray;

      &::after {
        content: "";
        height: 0;
        display: block;
        clear: both;
      }

      .list-left {
        float: left;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        margin: 15px 10px;
      }

      .list-right {
        float: left;
        padding-left: 10px;

        div {
          padding-bottom: 5px;
        }

        .wechat-style {
          color: gray;
        }
      }
    }

    .list-detail {
      flex: 1;
      border-bottom: 1px solid gray;
      margin-bottom: 20px;

      div {
        padding-left: 10px;
        margin: 10px 0px;
        color: gray
      }
    }

    .list-button {
      flex: 1;
      margin-bottom: 20px;

      div {
        width: 200px;
        margin: 0 auto;
      }

      v::deep .el-button {
        margin-right: 10px
      }
    }
  }
}
</style>