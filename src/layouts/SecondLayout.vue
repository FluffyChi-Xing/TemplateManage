<script setup lang="ts">
import { ref } from "vue";
import TheTop from "./TheTop.vue";
import Default from "./default.vue";
import { useRoute } from "vue-router";
import TagsComponents from "../components/TagsComponents.vue";
import ChooseLayout from "../views/LayoutPage/_components/ChooseLayout.vue";
import {$stores} from "../composabels/stores";
import {computed, onMounted, watch} from "vue";

/* ========================= 路由tags--start ========================= */
const tagsList = ref<HomePageTypes.tagsComponent[]>([])
const route = useRoute()
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

/** ========================= 页面设置--start ========================= **/
const pageCommon = $stores.usePageCommon.usePageCommon()
const drawerState = computed(() => pageCommon.editDrawer)
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
/** ========================= 页面设置--end ========================= **/

/** ========================= 布局切换-start ========================= */
const layoutValue = ref<string>('mode1')
function handleChange(index: string) {
  // console.log(layoutValue.value)
  localStorage.setItem('layoutMode', index)
  // 刷新页面
  location.reload()
}
/** ========================= 布局切换-end ========================= */
</script>

<template>
  <div
      style="background-color: var(--el-bg-color);color: var(--el-text-color-primary)"
      class="w-screen h-screen flex flex-col"
  >
    <el-container>
      <el-header height="204px">
        <div class="w-full h-full flex flex-col">
          <TheTop />
          <Default
              mode="horizontal"
          />
          <div class="w-full h-16 pb-4 flex gap-3 overflow-hidden shadow-md">
            <TagsComponents
                :tags="tagsList"
                tags=""
                :type="'primary'"
                :closable="true"
            />
          </div>
        </div>
      </el-header>
      <el-main>
        <div
            class="w-full h-full p-4 bg-[#F8F9FB] overflow-y-auto"
        >
          <RouterView />
        </div>
        <!-- edit drawer -->
        <el-drawer
            size="350"
            title="设置中心"
            style="border-radius: 10px 0 0 10px"
            v-model="drawerState"
        >
          <el-form
              inline
              label-width="auto"
          >
            <ChooseLayout
                :radio-value="layoutValue"
                @change:radio-value="handleChange"
            />
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
            <el-divider direction="horizontal" />
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
  </div>
</template>

<style scoped>
:deep(.el-header) {
  padding: 0 !important;
}
</style>
