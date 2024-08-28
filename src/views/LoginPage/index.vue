<script setup lang="ts">
import { ref } from "vue";
import {$stores} from "../../composabels/stores";
const loginStore = $stores.useLogin.useLoginStore()
import { useRouter } from "vue-router";
import {ElMessage} from "element-plus";



const router = useRouter()
// 数据初始化
const phoneNumber = ref<string>()
const userName = ref<string>()
// 判断登录
const isLoading = ref<boolean>(false)
function submitLogin() {
  if (phoneNumber.value && userName.value) {
    isLoading.value = true
    setTimeout(() => {
      checkLogin()
      isLoading.value = false
    }, 1000)
  } else {
    ElMessage({
      type: 'error',
      message: '请输入用户名和电话号'
    })
  }
}
function checkLogin() {
  loginStore.isLogin = true
  router.replace('/')
}
</script>

<template>
  <div class="w-screen h-screen overflow-hidden flex flex-col justify-center items-center login-bg">
    <div class="w-[500px] h-auto flex justify-center">
      <el-card
          class="w-full h-full flex p-4"
      >
        <div class="flex flex-col w-full items-center">
          <div class="w-[100px] h-[100px] flex">
            <img src="@/assets/logo.svg" alt="" loading="lazy" class="w-[100px] h-[100px] object-contain" />
          </div>
          <div class="text-2xl text-black font-bold w-full text-center my-4">登录</div>
          <div style="height: calc(100% - 100px)" class="w-2/3 mx-auto flex flex-col">
            <el-form
                label-width="auto"
            >
              <el-form-item label="用户名">
                <el-input
                    v-model="userName"
                    clearable
                    placeholder="请输入用户名"
                    prefix-icon="User"
                />
              </el-form-item>
              <el-form-item label="电话号">
                <el-input
                    v-model="phoneNumber"
                    placeholder="请输入电话号"
                    clearable
                    maxlength="11"
                    prefix-icon="Lock"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                    @click="submitLogin"
                    class="main_primary_btn w-full"
                    :loading="isLoading"
                >
                  确认登录
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
.login-bg {
  background-image: url("@/assets/img/login-bg@1x.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
