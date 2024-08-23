<script lang="ts" setup>
import {onMounted, ref, watch} from 'vue'
import {useRoute, useRouter} from "vue-router";
// import {$enums} from '../../composabels/enums'
import TopFuncNav from "./_components/TopFuncNav.vue";
import {useCounterStore} from '../../stores/counter'
import TagsComponents from "../../components/TagsComponents.vue";
import Default from "../../layouts/default.vue";

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
// const defaultActive = ref<string>('1')
// function changeRouter(e: string, es: string[]) {
//   console.log(es)
//   switch (e) {
//     case '1':
//       router.push('/')
//         defaultActive.value = '1'
//           break;
//     case '2':
//       router.push('/notice')
//         defaultActive.value = '2'
//           break;
//     case '3-1':
//       router.push('/allCom')
//         defaultActive.value = '3-1'
//           break;
//     case '3-2':
//       router.push('/table')
//         defaultActive.value = '3-2'
//           break;
//   }
// }
// function persistenceRoute(e: string) {
//   switch (e) {
//     case '/':
//       defaultActive.value = '1'
//         break;
//     case '/notice':
//       defaultActive.value = '2'
//         break;
//     case '/allCom':
//       defaultActive.value = '3-1'
//         break;
//     case '/table':
//       defaultActive.value = '3-2'
//         break;
//   }
// }
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

/* ========================= 页面设置--start ========================= */
const defaultSetting = {
  text: '页面设置',
  color: '',
}
const pageSetting = ref<DisplayTypes.pageSetting>(defaultSetting)
const defaultPageTheme = [
  {
    text: '默认色',
    label: 'primary',
    value: '#A0CFFF'
  },
  {
    text: '秋日胡杨',
    label: 'fall',
    value: '#E09D42'
  },
  {
    text: '翡冷翠',
    label: 'green',
    value: '#3D9970'
  },
  {
    text: '极客紫',
    label: 'geek',
    value: '#7A51D9'
  },
  {
    text: '烈焰红',
    label: 'fire',
    value: '#FF4D4F'
  }
]
const pageTheme = ref<DisplayTypes.themeColor[]>(defaultPageTheme)

// 设置主题色
function setTheme(color: string) {
  const el = document.documentElement
  getComputedStyle(el).getPropertyValue('--main-theme0color')
  el.style.setProperty('--main-theme0color', color)
  localStorage.setItem('themeColor', color)
}
function initTheme() {
  if (localStorage.getItem('themeColor')) {
    const el = document.documentElement
    getComputedStyle(el).getPropertyValue('--main-theme0color')
    el.style.setProperty('--main-theme0color', localStorage.getItem('themeColor') as string)
    pageSetting.value.color = localStorage.getItem('themeColor') as string
  } else {
    const el = document.documentElement
    getComputedStyle(el).getPropertyValue('--main-theme0color')
    el.style.setProperty('--main-theme0color', '#A0CFFF')
    localStorage.setItem('themeColor', '#A0CFFF')
    pageSetting.value.color = '#A0CFFF'
  }
}
/* ========================= 页面设置--end ========================= */
onMounted(() => {
  // persistenceRoute(route.fullPath)
  getRouteList()
  initTheme()
})
// watch(() => route.fullPath, () => {
//   persistenceRoute(route.fullPath)
// })
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
      >
        <!-- header -->
        <div
            class="w-full h-full relative flex"
        >
          <!-- title -->
          <div
              class="w-[180px] h-full relative flex justify-center cursor-pointer text-white text-2xl font-bold"
              @click="goHome"
          >
            <!-- title -->
            <span
                class="w-auto h-auto relative block my-auto"
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
<!--            <el-menu-->
<!--                :active-text-color="pageSetting.color"-->
<!--                background-color="#001529"-->
<!--                class="el-menu-vertical-demo"-->
<!--                :default-active="defaultActive"-->
<!--                text-color="#A9A9A9FF"-->
<!--                style="height: 100%;"-->
<!--                @select="changeRouter"-->
<!--            >-->
<!--              <template-->
<!--                  v-for="item in menuList"-->
<!--                  :key="item.index"-->
<!--              >-->
<!--                <el-sub-menu-->
<!--                    v-if="item.children?.length"-->
<!--                    :index="item.index"-->
<!--                >-->
<!--                  <template #title>-->
<!--                    <el-icon><Component :is="item.icon" /></el-icon>-->
<!--                    <span>{{ item.title }}</span>-->
<!--                  </template>-->
<!--                  <el-menu-item-->
<!--                      v-for="itm in item.children"-->
<!--                      :key="itm.index"-->
<!--                      :index="itm.index"-->
<!--                  >-->
<!--                    <el-icon><Component :is="itm.icon" /></el-icon>-->
<!--                    <span>{{ itm.title }}</span>-->
<!--                  </el-menu-item>-->
<!--                </el-sub-menu>-->
<!--                <el-menu-item-->
<!--                    v-else-->
<!--                    :index="item.index"-->
<!--                >-->
<!--                  <el-icon><component :is="item.icon" /></el-icon>-->
<!--                  <span>{{ item.title }}</span>-->
<!--                </el-menu-item>-->
<!--              </template>-->
<!--            </el-menu>-->
            <default />
          </div>
        </el-aside>
        <el-main>
          <!-- page container -->
          <div class="w-full bg-[#F8F9FB] h-full relative block">
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
            <el-form
                inline
                label-width="auto"
            >
              <el-form-item
                  label="用户名"
              >
                <el-input
                    v-model="pageSetting.text"
                    placeholder="请输入用户名"
                    clearable
                    prefix-icon="User"
                />
              </el-form-item>
              <el-form-item
                  label="设置主题色"
              >
                <el-select
                    v-model="pageSetting.color"
                    placeholder="请选择主题色"
                    style="width: 240px"
                    @change="setTheme"
                >
                  <el-option
                      v-for="item in pageTheme"
                      :key="item"
                      :label="item.text"
                      :value="item.value"
                  >
                    <div
                        class="flex items-center"
                    >
                      <el-tag
                          :color="item.value"
                          style="margin-right: 8px"
                          size="small"
                      />
                      <span :style="{ color: item.color }">{{ item.text }}</span>
                    </div>
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
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
  background: linear-gradient(90deg, #1E2938, #517BA8);
}
</style>
