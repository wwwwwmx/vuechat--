//朋友圈动态
<template >
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
      <div class="top-container">
      </div>
      <div class="font-img">
        name
      </div>
      <div class="avatar-img">
        <img src="@/assets/image/retouch_2022091919425826.jpg" alt="">
      </div>
      <div class="bottom-container">
        <ul>
          <li>
            <div class="left-bottom">
              <img src="@/assets/image/retouch_2022091919425826.jpg" alt="">
            </div>
            <div class="right-bottom">
              <div style="font-weight:600">name</div>
              <div class="right-content">
                <div>text</div>
                <div>图片</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import searchUser from '@/view/public/searchUser.vue'
</script>
<style lang="less" scoped>
.right-container {
  position: relative;

  .top-container {
    width: 100%;
    height: 300px;
    border-bottom: 1px solid black
  }

  .avatar-img {
    position: absolute;
    top: 270px;
    left: 640px;
    width: 60px;
    height: 60px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .font-img {
    position: absolute;
    top: 260px;
    left: 570px;
  }

  .bottom-container {
    width: 100%;
    height: 500px;

    ul {
      li {
        list-style: none;
        display: flex;

        .left-bottom {
          width: 80px;
          height: 500px;
          border: 1px solid black;

          img {
            padding: 15px;
            width: 50px;
            height: 50px;
          }
        }

        .right-bottom {
          flex: 1;
          height: 500px;
          border: 1px solid black;
          padding: 15px;

          .right-content {
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>