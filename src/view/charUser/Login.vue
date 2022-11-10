//登录页面
<template>
  <div class="form-container">
    <div class="left">
      <img src="@/assets/image/background.png" alt="">
    </div>
    <div class="right">
      <form>
        <div class="header-div">
          <div @click="changeLogin">登录</div>
          <div>|</div>
          <div @click="changeRegister">注册</div>
        </div>
        <div class="account-div">
          <input type="text" placeholder="请输入用户名" v-model="userInfo.account">
        </div>
        <div class="passw-div">
          <input type="password" placeholder="请输入密码" v-model="userInfo.password">
        </div>
        <div class="verifi-div" v-if="IsLogin">
          <input id="input-code" type="text" placeholder="请输入验证码" v-model="userInfo.verificate">
          <div @click="refreshCode">
            <Verification :identifyCode="identifyCode"></Verification>
          </div>
        </div>
        <div class="repassw-div" v-else>
          <input type="password" placeholder="确认密码" v-model="userInfo.confirmPass">
        </div>
        <p v-show="noRight">两次密码不一致</p>
        <div class="register-div" v-if="IsLogin" @click="LoginUser">
          <span id="register">登录</span>
        </div>
        <div class="register-div" v-else @click="registerUser">
          <span id="register">注册</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Verification from '@/view/public/Verification.vue'
import { reactive, ref, onMounted, watch } from 'vue'
import { indexStore } from '@/store/index';
import { reqRegister, reqLogin } from '@/newApi/index'
import md5 from "js-md5";
import pinia from '../../store/store'
// const SystemDataStore = useSystemDataStore(pinia)
import { useRouter } from 'vue-router';
let IsLogin = ref(true)
let noRight = ref(false)
let salt = ref('vuechat_V1.0.0')
let userInfo = reactive({
  account: '',
  password: '',
  confirmPass: '',
  verificate: '',
  _id: ''
})
let form = reactive({
  account: '',
  password: ''
})
const router = useRouter()
const registerUser = async () => {
  //判断是否有非空的逻辑
  if (userInfo.account == '' || userInfo.password == '' || userInfo.confirmPass == '') {
    alert("有未输入的字段请检查后输入")
  }
  else {
    if (userInfo.password == userInfo.confirmPass) {
      let { data } = await reqLogin(userInfo.account)
      if (data.data.length) {
        alert('该用户已存在请更换账号')
      }
      else {
        userInfo.password = md5(userInfo.password)
        let config = await reqRegister(userInfo)
      }
    }
    else {
      noRight.value = true
    }
  }

}
const LoginUser = async () => {
  if (userInfo.account == '' || userInfo.password == '' || userInfo.verificate == '') {
    alert("有未输入的字段请检查后输入")
  }
  else {
    if (userInfo.verificate == identifyCode.value) {
      userInfo.password = salt.value += md5(userInfo.password)
      form = {
        account: userInfo.account,
        password: userInfo.password
      }
      let { data } = await reqLogin(form)
      console.log(data)
      if (data.data.length) {
        console.log('成功登录')
        router.push({
          path: '/list-view',
          query: {
            id: data.data[0]._id
          },
        })
      }
      else {
        alert('账号与密码不匹配')
      }
    }
    else {
      alert("验证码输入错误")
    }
  }
}
const changeLogin = () => {
  IsLogin.value = true
}
const changeRegister = () => {
  IsLogin.value = false
}
// 图形验证码
let identifyCodes = "1234567890"
let identifyCode = ref('3212')
const randomNum = (min: any, max: any) => {
  return Math.floor(Math.random() * (max - min) + min)
}
const makeCode = (o: any, l: any) => {
  for (let i = 0; i < l; i++) {
    identifyCode.value += o[
      randomNum(0, o.length)
    ];
  }
}
const refreshCode = () => {
  identifyCode.value = "";
  makeCode(identifyCodes, 4);
}
onMounted(() => {
  identifyCode.value = "";
  makeCode(identifyCodes, 4);
})
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: aqua;

  .form-container {
    background-color: #fff;
    width: 768px;
    margin: 0px auto;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    overflow: hidden;

    .left {
      width: 50%;
      height: 100%;
      float: left;
      background: url(../imgs/AbstractSaltBeds_ZH-CN8351691359_1920x1080.jpg) center center/cover no-repeat;
    }

    .right {
      float: right;
      width: 50%;
      height: 100%;

      input {
        width: 100px;
      }

      .header-div {
        width: 130px;
        margin: 0 auto;
        margin-bottom: 20px;

        div {
          float: left;
          font-size: 20px;
          color: #CE6D39;
          margin: 0px 5px;
        }
      }


      .header-div::after {
        content: '';
        display: block;
        height: 0;
        clear: both;
      }

      .account-div {
        margin-left: 80px;
      }

      .passw-div {
        margin-left: 80px;
      }

      .verifi-div {
        margin-left: 80px;
      }

      p {
        color: #FF4B2B
      }

      form {
        padding: 20px;
        height: 100%;
      }

      .passw-div,
      .verifi-div,
      .repassw-div {
        position: relative;
      }

      h1 {
        margin: 10px 6px;
        color: #CE6D39
      }

      input {
        background-color: #eee;
        outline: none;
        /*不出现蓝色边框*/
        width: 60%;
        padding: 12px 15px;
        margin: 15px 2px;
        border-radius: 20px;
        border: 1px solid #CE6D39;
        transition: 300ms;
        font-size: 14px;
      }

      .register-div span {
        width: 35%;
        height: 40px;
        display: block;
        border-radius: 20px;
        line-height: 40px;
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 5px;
        border: 1px solid #CE6D39;
        background-color: #CE6D39;
        color: #FFFFFF;
        margin: 15px 0 0 15%;
        margin-left: 35%;
        transition: 300ms;
      }

      .register-div span:hover {
        background-color: #FF4B2B;
        box-shadow: 0 2px 11px #B34747
      }

      .safety-factor-div {
        position: absolute;
        line-height: 10px;
        top: -6px;
        left: 0px;
      }

      .safety-factor-div div {
        float: left;
        width: 30px;
        height: 10px;
        border-radius: 5px;
        margin: 0 8px;
        visibility: hidden;
      }

      .safety-factor-div span {
        float: left;
        margin-left: 10px;
        font-size: 12px;
        visibility: hidden;
      }

      .passw-div p,
      .repassw-div p {
        position: absolute;
        font-size: 12px;
        color: #FF4B2B;
        top: 28px;
        left: 220px;
      }

      .verifi-div canvas {
        position: absolute;
        top: 18px;
        left: 117px;
        width: 90px;
        height: 39px;
        border-radius: 20px;
        border: 1px solid #CE6D39;
        background-color: #CE6D39;
        text-align: center;
        line-height: 40px;
        transition: 300ms;
      }

      input:focus,
      .verifi-div canvas:hover {
        box-shadow: 0 2px 11px #B34747
      }
    }
  }
}
</style>