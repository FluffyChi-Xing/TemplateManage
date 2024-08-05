<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { $enums } from '../../composabels/enums'
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";
import TopFuncNav from "./_components/TopFuncNav.vue";
import { useCounterStore } from '../../stores/counter'
import TagsComponents from "../../components/TagsComponents.vue";

//router
const router = useRouter()
//title
const title = ref<string>('中台管理系统')
//route
const route = useRoute()
const page = useCounterStore()

/* ========================= 菜单持久化--start ========================= */
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
/* ========================= 菜单持久化--end ========================= */

/* ========================= 路由tags--start ========================= */
const tagsList = ref<HomePageTypes.tagsComponent[]>([])
const tagsListMax = 10
function getRouteList() {
  if (localStorage.getItem('viewHistory')) {
    tagsList.value = JSON.parse(localStorage.getItem('viewHistory') as string)
  }
  if (tagsList.value.length === 0) {
    tagsList.value.push({
      text: '首页',
      value: '/'
    })
  }
  if (tagsList.value.length >= tagsListMax) {
    // 如果tagsList的长度大于等于tagsListMax，删除第一个元素
    tagsList.value = tagsList.value.slice(-1)
  }
  // 检查tagsList内是否有重复的元素
  let isExist = false;
  tagsList.value.forEach((item: HomePageTypes.tagsComponent, index: number) => {
    if (item.text === route.meta.title) {
      isExist = true;
      // tagsList.value.splice(index, 1)
      return
    }
  })
  if (!isExist) {
    tagsList.value.push({
      text: route.meta.title,
      value: route.fullPath
    })
    localStorage.setItem('viewHistory', JSON.stringify(tagsList.value))
  }
}
/* ========================= 路由tags--end ========================= */
onMounted(() => {
  persistenceRoute(route.fullPath)
  getRouteList()
})
watch(() => route.fullPath, () => {
  persistenceRoute(route.fullPath)
})
watch(() => route.matched, () => {
  getRouteList()
})
</script>

<template>
  <div
      style="background-color: var(--el-bg-color);color: var(--el-text-color-primary)"
      class="w-screen h-screen relative block overflow-hidden"
  >
    <!-- element container -->
    <el-container>
      <el-header
          class="shadow-md"
          style="background-color: var(--el-bg-color);border-bottom: 1px solid var(--el-border-color)"
      >
        <!-- header -->
        <div
            class="w-full h-full relative flex"
        >
          <!-- title -->
          <div
              class="w-[180px] h-full relative flex justify-center cursor-pointer text-black text-[20px] font-bold"
              @click="goHome"
          >
            <!-- title -->
            <span
                class="w-auto h-auto relative block my-auto"
                style="color: var(--el-text-color-primary)"
            >
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
            <!-- tags banner -->
            <div class="w-full h-12 pb-4 flex gap-3 overflow-hidden">
              <TagsComponents
                  :tags="tagsList"
                  tags=""
                  :type="'primary'"
                  :closable="true"
              />
            </div>
            <router-view />
          </div>
          <!-- edit drawer -->
          <el-drawer
              size="350"
              title="设置中心"
              style="border-radius: 10px 0 0 10px"
              v-model="page.editDrawer"
          >

          </el-drawer>
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
:deep(.el-drawer.rtl) {
  backdrop-filter: blur(8px) saturate(200%);
  -webkit-backdrop-filter: blur(8px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.47);
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
