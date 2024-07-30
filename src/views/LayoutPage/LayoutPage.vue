<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { $enums } from '../../composabels/enums'
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";
import TopFuncNav from "./_components/TopFuncNav.vue";

//router
const router = useRouter()
//title
const title = ref<string>('中台管理系统')
//route
const route = useRoute()
function goHome() {
  router.push('/')
}


//change page
const defaultActive = ref<string>('1')
function changeRouter(e: string) {
  switch (e) {
    case '1':
      router.push('/')
        defaultActive.value = '1'
          break;
    case '2':
      router.push('/notice')
        defaultActive.value = '2'
          break;
    case '3-1':
      router.push('/allCom')
        defaultActive.value = '3-1'
          break;
    case '3-2':
      router.push('/table')
        defaultActive.value = '3-2'
          break;
  }
}
function persistenceRoute(e: string) {
  switch (e) {
    case '/':
      defaultActive.value = '1'
        break;
    case '/notice':
      defaultActive.value = '2'
        break;
    case '/allCom':
      defaultActive.value = '3-1'
        break;
    case '/table':
      defaultActive.value = '3-2'
        break;
  }
}
onMounted(() => {
  persistenceRoute(route.fullPath)
})
watch(() => route.fullPath, () => {
  persistenceRoute(route.fullPath)
})
</script>

<template>
  <div class="w-screen h-screen bg-[#FAFAFA] relative block overflow-hidden">
    <!-- element container -->
    <el-container>
      <el-header class="shadow-md">
        <!-- header -->
        <div class="w-full h-full relative flex">
          <!-- title -->
          <div
              class="w-[180px] h-full relative flex justify-center cursor-pointer text-black text-[20px] font-bold"
              @click="goHome"
          >
            <!-- title -->
            <span class="w-auto h-auto relative block my-auto">
              {{ title }}
            </span>
          </div>
          <!-- function banner -->
          <div class="w-auto h-full relative flex ml-auto">
            <TopFuncNav />
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- left menu -->
          <div class="w-full h-full relative flex flex-col justify-start">
            <el-menu
                active-text-color="#A0CFFF"
                background-color="#001529"
                class="el-menu-vertical-demo"
                :default-active="defaultActive"
                text-color="#A9A9A9FF"
                style="height: 100%;"
                @select="changeRouter"
            >
              <el-menu-item index="1">
                <el-icon><component :is="$enums.MenuIcons[0]" /></el-icon>
                <span>项目概况</span>
              </el-menu-item>
              <el-menu-item index="2">
                <el-icon><component :is="$enums.MenuIcons[1]" /></el-icon>
                <span>公告中心</span>
              </el-menu-item>
              <el-sub-menu>
                <template #title>
                  <el-icon><component :is="$enums.MenuIcons[2]" /></el-icon>
                  <span>展示中心</span>
                </template>
                <el-menu-item index="3-1">
                  <el-icon><Component :is="$enums.MenuIcons[4]" /></el-icon>
                  <span>全部组件</span>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <el-icon><component :is="$enums.MenuIcons[3]" /></el-icon>
                  <span>表格模块</span>
                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </div>
        </el-aside>
        <el-main>
          <!-- page container -->
          <div class="w-full h-full relative block">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-container .el-container {
  height: calc(100% - 64px);
}
:deep(.el-container) {
  height: 100%;
}
:deep(.el-header) {
  background-color: #fff;
}
</style>
