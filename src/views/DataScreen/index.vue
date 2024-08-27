<script setup lang="ts">
import DataCard from "./_components/DataCard.vue";
import {computed, onMounted, ref} from "vue";
import {$apis} from "../../composabels/apis";
import * as echarts from 'echarts'
import NeedHandle from "./_components/NeedHandle.vue";
import GoodsNotice from "./_components/GoodsNotice.vue";

/** ===== 数据卡片初始化-start ===== **/
// interface cardList {
//   icon: number,
//   title: string,
//   subTitle: string,
//   color1: string,
//   color2: string,
// }

// 获取入驻商家数据
const buyerNumber = ref()
const clientService = ref()
const goodsNumber = ref()
async function getBuyer() {
  await $apis.getCard1Info().then((res: any) => {
    // console.log(res.length)
    buyerNumber.value = res.length
  })
}
async function getClient() {
  await $apis.getCard2Info().then((res: any) => {
    clientService.value = res.length
  })
}
async function getGoods() {
  await $apis.getCard3Info().then((res: any) => {
    goodsNumber.value = res.length
  })
}

async function initAllCard() {
  await getBuyer()
  await getClient()
  await getGoods()
}

onMounted(async () => {
  await initAllCard()
})


const initCard = computed(() => [
  {
    icon: 0,
    title: '商家入驻',
    subTitle: `今日签约商家${buyerNumber.value}家`,
    color1: 'rgb(152,61,249)',
    color2: 'rgb(94,22,231)',
  },
  {
    icon: 6,
    title: '在线客服',
    subTitle: `今日客户咨询量达${clientService.value}次`,
    color1: 'rgb(249,61,89)',
    color2: 'rgb(231,22,94)',
  },
  {
    icon: 3,
    title: '订单管理',
    subTitle: `今日订单数${goodsNumber.value - 5 }单`,
    color1: 'rgb(249,168,61)',
    color2: 'rgb(231,123,22)',
  },
  {
    icon: 4,
    title: '商品管理',
    subTitle: `商品总数${goodsNumber.value}件`,
    color1: 'rgb(61,233,249)',
    color2: 'rgb(22,137,231)',
  }
])
/** ===== 数据卡片初始化-end ===== **/

/** ===== 统计图初始化-start ===== **/
const graph = ref()
function initChart() {
  const echart = echarts.init(graph.value)
  echart.setOption(option)
}
const option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: 'line',
      smooth: true
    }
  ]
};
onMounted(() => {
  initChart()
})
/** ===== 统计图初始化-end ===== **/

/** ===== 待处理事项初始化-start ===== **/
interface needHandle {
  icon: number,
  title: string,
  account: number,
}
const needHandleList = ref<needHandle[]>([
  {
    icon: 0,
    title: '待合并分支',
    account: 2,
  },
  {
    icon: 1,
    title: '待测试模块',
    account: 12
  },
  {
    icon: 2,
    title: '待调试系统',
    account: 5
  },
  {
    icon: 3,
    title: '系统安全风险',
    account: 3
  }
])
/** ===== 待处理事项初始化-end ===== **/

/** ===== 消息中心-start ===== **/
const noticeData = ref<any>()
async function getNoticeCenter() {
  await $apis.getNotices().then((res: any) => {
    noticeData.value = res
  })
}
onMounted(async () => {
  await getNoticeCenter()
})
/** ===== 消息中心-end ===== **/
</script>

<template>
  <div class="w-full h-full flex p-4">
    <div class="w-full h-full flex overflow-y-auto flex-col">
      <div class="w-full h-auto grid grid-cols-4 gap-4 mb-4">
        <DataCard
            v-for="item in initCard"
            :key="item.icon"
            :card-icon="item.icon"
            :title="item.title"
            :sub-title="item.subTitle"
            :color1="item.color1"
            :color2="item.color2"
        />
      </div>
      <div class="w-full h-[304px] grid grid-cols-2 gap-4 mb-4">
        <div class="w-full h-full flex flex-col mr-4">
          <el-card class="global-card p-4 w-full h-36 mb-4">
            <template #header>
              <span class="font-bold">待处理</span>
            </template>
            <div class="w-full h-full flex items-center overflow-x-auto">
              <NeedHandle
                  v-for="item in needHandleList"
                  :key="item.icon"
                  :icon="item.icon"
                  :title="item.title"
                  :account="item.account"
              />
            </div>
          </el-card>
          <el-card class="global-card p-4 w-full h-36">
            <template #header>
              <span class="font-bold">常用菜单</span>
            </template>
            <div class="w-full h-full flex items-center overflow-x-auto">
              <span class="w-auto h-auto flex mx-auto text-gray-500">空空如也~</span>
            </div>
          </el-card>
        </div>
        <div class="w-full h-full flex">
          <el-card
              class="w-full h-full flex flex-col p-4 global-card"
          >
            <template #header>
              <span class="font-bold">消息中心</span>
            </template>
            <GoodsNotice
                :data="noticeData"
            />
          </el-card>
        </div>
      </div>
      <div class="w-full h-[500px] flex">
        <el-card class="global-card w-full p-4 h-full flex flex-col">
          <template #header>
            <span class="font-bold">访问流量(sample)</span>
          </template>
          <div
              ref="graph"
              class="w-full h-full"
          />
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
</style>
