<script setup lang="ts">
import {ref, onMounted, computed} from 'vue'
import {$apis} from "../../composabels/apis";
import HotSearch from "./_components/HotSearch.vue";
import NoData from "../../components/NoData.vue";
import {ElMessage} from "element-plus";
import Search from "./_components/Search.vue";
import CheckIn from "./_components/CheckIn.vue";
import ADs from "./_components/ADs.vue";
import {$stores} from "../../composabels/stores";
/** ===== 贴吧热搜初始化-start ===== **/
const tiebaSearch = ref<any>()
async function getTiebaList() {
  await $apis.getTiebaHot().then((res: any) => {
    tiebaSearch.value = res.data
  })
}
onMounted(async () => {
  await getTiebaList()
})
/** ===== 贴吧热搜初始化-end ===== **/

/** ===== 搜索框-start ===== **/
const searchValue = ref<string>('')
function searchSome() {
  if (!searchValue.value) {
    ElMessage({
      type: 'warning',
      message: '请输入搜索内容'
    })
  }
}
/** ===== 搜索框-end ===== **/

/** ===== 签到模块-start ===== **/
const checkInTitle = computed(() => {
  let hour = new Date().getHours()
  if (hour >= 0 && hour < 6) {
    return '凌晨好'
  } else if (hour >= 6 && hour < 12) {
    return '早上好'
  } else if (hour >= 12 && hour < 18) {
    return '下午好'
  } else {
    return '晚上好'
  }
})
const btnInfo = ref<string>('签到')
const disabled = ref<boolean>(false)
const pageStore = $stores.usePageCommon.usePageCommon()
const showCheck = computed(() => pageStore.showCheckIn)
function submitChecked() {
  let checked = localStorage.getItem('isChecked')
  if (checked) {
    // console.log('checked', checked)
    // 每日签到
    let day = new Date().getDate()
    if (day.toString() !== checked.toString()) {
      btnInfo.value = '已签到'
      disabled.value = true
      localStorage.setItem('isChecked', day.toString())
      ElMessage({
        type: "success",
        message: "签到成功"
      })
    }
  } else {
    // 首次签到
    let today = new Date().getDate()
    localStorage.setItem('isChecked', today.toString())
    btnInfo.value = '已签到'
    disabled.value = true
    ElMessage({
      type: "success",
      message: "签到成功"
    })
  }
}

function checkCheckIn() {
  let checked = localStorage.getItem('isChecked')
  if (checked) {
    let day = new Date().getDate()
    if (day.toString() === checked) {
      btnInfo.value = '已签到'
      disabled.value = true
    }
  }
}

// 页面挂载时判断是否签到
onMounted(() => {
  checkCheckIn()
})
/** ===== 签到模块-end ===== **/

/** ===== 侧边广告-start ===== **/
const adsList = ref<string[]>([
    'https://picsum.photos/300/200?1',
    'https://picsum.photos/300/200?2',
    'https://picsum.photos/300/200?3',
])
/** ===== 侧边广告-end ===== **/
</script>

<template>
  <div class="w-full flex flex-col p-4">
    <div class="w-full h-full grid grid-cols-4 gap-4">
      <div class="w-full h-full flex flex-col">
        <Search
            :search-value="searchValue"
            @search="searchSome"
            class="mb-4"
        />
        <CheckIn
            v-if="showCheck"
            :title="checkInTitle"
            @check-in="submitChecked"
            :btn-info="btnInfo"
            :disabled="disabled"
            class="mb-4"
        />
        <ADs
            v-for="(item, index) in adsList"
            :key="index"
            :src="item"
            class="mb-4"
        />
      </div>
      <div class="col-span-2 h-full p-4 flex flex-col">
        <router-view />
      </div>
      <div class="w-full h-auto">
        <el-card class="global-card sticky top-[32px] w-full p-4 h-[500px]">
          <template #header>
            <span class="text-xl font-bold">贴吧热搜</span>
          </template>
          <div
              style="height: calc(100% - 36px)"
              class="w-full overflow-y-auto hidden-scrollbar"
          >
            <HotSearch
                v-if="tiebaSearch"
                :hot-search-list="tiebaSearch"
            />
            <NoData
                v-else
                description="暂无数据"
            />
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-card__header) {
  padding: 0;
  width: 100%;
  height: 36px;
}

.hidden-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
