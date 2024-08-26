<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {useRoute, useRouter} from "vue-router";
import {$enums} from "../composabels/enums";
import UserAvatar from "../components/UserAvatar.vue";
//router
const router = useRouter()
//title
const title = ref<string>('中台管理系统')
//route
const route = useRoute()

const defaultSetting = {
  text: '页面设置',
  color: '',
}
const pageSetting = ref<DisplayTypes.pageSetting>(defaultSetting)

/* ========================= 菜单持久化--start ========================= */
//change page
const defaultActive = ref<string>('1')
function changeRouter(e: string, es: string[]) {
  console.log(es)
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
    case '3-3':
      router.push('/storge')
      defaultActive.value = '3-3'
      break;
    case '4':
      router.push('/usercenter/info')
      defaultActive.value = '4'
      break;
    case '5':
      router.push('/dataScreen')
      defaultActive.value = '5'
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
    case '/storge':
      defaultActive.value = '3-3'
      break;
    case '/usercenter/info':
      defaultActive.value = '4'
      break;
    case '/usercenter/edit':
      defaultActive.value = '4'
      break;
    case '/dataScreen':
      defaultActive.value = '5'
      break;
  }
}
onMounted(() => {
  persistenceRoute(route.fullPath)
})
watch(() => route.fullPath, () => {
  persistenceRoute(route.fullPath)
})
/* ========================= 菜单持久化--end ========================= */

/** ==== 菜单初始化-start ==== **/
interface MenuList {
  index: string,
  title: string,
  icon: string | null,
  children: MenuList[] | null
}
const menuList = ref<MenuList[]>([
  {
    index: `1`,
    title: `项目概况`,
    icon: $enums.MenuIcons[0],
    children: null
  },
  {
    index: `2`,
    title: `公告中心`,
    icon: $enums.MenuIcons[1],
    children: null
  },
  {
    index: `3`,
    title: `展示中心`,
    icon: $enums.MenuIcons[2],
    children: [
      {
        index: `3-1`,
        title: `全部组件`,
        icon: $enums.MenuIcons[4],
        children: null
      },
      {
        index: `3-2`,
        title: `表格模块`,
        icon: $enums.MenuIcons[3],
        children: null
      },
      {
        index: '3-3',
        title: '库存管理',
        icon: $enums.MenuIcons[5],
        children: null
      }
    ]
  },
  {
    index: '4',
    title: '用户中心',
    icon: $enums.MenuIcons[6],
    children: null
  },
  {
    index: '5',
    title: '数据大屏',
    icon: $enums.MenuIcons[7],
    children: null
  }
])
/** ==== 菜单初始化-end ==== **/

/** ==== 用户初始化-start ==== **/
const username = ref<string>('张三')
/** ==== 用户初始化-end ==== **/
</script>

<template>
  <div class="flex-col w-full h-full">
    <el-menu
        :active-text-color="pageSetting.color"
        background-color="#001529"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#A9A9A9FF"
        style="height: 100%;"
        @select="changeRouter"
    >
      <div
          class="w-full h-28 pb-4 flex justify-end menu-head-bg flex-col"
      >
        <UserAvatar
            :name="username"
            shape="circle"
            :icon="''"
            :avatar="''"
        />
      </div>
      <template
          v-for="item in menuList"
          :key="item.index"
      >
        <el-sub-menu
            v-if="item.children?.length"
            :index="item.index"
        >
          <template #title>
            <el-icon><Component :is="item.icon" /></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
              v-for="itm in item.children"
              :key="itm.index"
              :index="itm.index"
          >
            <el-icon><Component :is="itm.icon" /></el-icon>
            <span>{{ itm.title }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item
            v-else
            :index="item.index"
        >
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<style scoped>
.menu-head-bg {
  background-image: url("@/assets/img/menu-bg@1x.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
