//申请消息页面
<template>
  <div class="home-container">
    <div class="left-container">
      <div>
        <searchUser></searchUser>
      </div>
      <div>
        <ul>
          <li>
            <div class="img-container"><img src="" alt=""></div>
            <div class="content-container">
              <div class="apply-content">内容</div>
              <div>
                <el-button type="success">同意</el-button>
                <!-- <el-button type="danger">拒绝</el-button> -->
              </div>
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
            <div class="wechat-style">地区:</div>
          </div>
        </div>
        <div class="list-detail">
          <div>申请时的信息</div>
        </div>
        <div class="list-button">
          <div>
            <el-button type="success">回复</el-button>
            <el-button type="danger">拒绝</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import searchUser from '@/view/public/searchUser.vue'
</script>
<style lang="less" scoped>
.content-container {
  div {
    float: left;
    height: 50px;
    line-height: 50px;
  }

  .apply-content {
    width: 230px;
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