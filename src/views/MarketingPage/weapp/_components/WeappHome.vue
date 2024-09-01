<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {ElMessage} from "element-plus";
import { useRouter } from "vue-router";
import WeappItem from "./WeappItem.vue";
import {$apis} from "../../../../composabels/apis";
import NoData from "../../../../components/NoData.vue";


const router = useRouter()
/** =====  顶部搜索-start  ===== **/
const searchValue = ref<string>()
function handleSearch() {
  if (!searchValue.value) {
    ElMessage({
      type: "warning",
      message: "请输入搜索内容"
    })
  } else {
    itemList.value.find((item: any) => {
      if (item.title === searchValue.value) {
        ElMessage({
          type: "success",
          message: '搜索成功'
        })
        itemList.value = [item]
      }
    })
  }
}
/** =====  顶部搜索-end  ===== **/

/** =====  文章列表初始化-start  ===== **/
interface WeappItemList {
  id: number;
  title: string;
  content: string;
  date: string;
  imgUrl: string;
}
const itemList = ref<WeappItemList[]>([])
const uuid = ref<number>(0)
const isLoading = ref<boolean>(false)
async function getItemList() {
  await $apis.getTiebaHot().then((res: any) => {
    res.data.forEach((item: any) => {
      itemList.value?.push({
        id: uuid.value++,
        title: item.title,
        content: item.description,
        imgUrl: `https://picsum.photos/200/300?${uuid.value}`,
        date: item.updatetime
      })
    })
    // console.log('itemList', itemList.value)
  })
}
onMounted(async () => {
  isLoading.value = true
  await getItemList()
  isLoading.value = false
})
/** =====  文章列表初始化-end  ===== **/

/** =====  新增文章-start  ===== **/
function handleAdd() {
  router.push('/marketcenter/weapp/add')
}
/** =====  新增文章-end  ===== **/

/** =====  编辑文章-start  ===== **/
function handleEdit(index: number) {
  router.push(`/marketcenter/weapp/${index}`)
}
/** =====  编辑文章-end  ===== **/

/** =====  删除文章-start  ===== **/
function handleDelete(id: number) {
  console.log('删除文章', id)
}
/** =====  删除文章-end  ===== **/

/** =====  刷新文章列表-start  ===== **/
async function refreshItemList() {
  itemList.value = []
  searchValue.value = ''
  isLoading.value = true
  await getItemList()
  isLoading.value = false
}
/** =====  刷新文章列表-end  ===== **/
</script>

<template>
  <div class="w-full h-full flex- flex-col">
    <el-card class="global-card w-full h-auto flex p-4 mb-4">
      <div class="w-full h-full flex flex-col">
        <div class="text-xl font-bold w-full h-auto mb-4">公众号管理</div>
        <div class="w-full h-auto flex">
          <el-form-item label="搜索文章">
            <div class="w-full h-auto flex mr-2">
              <el-input
                  v-model="searchValue"
                  placeholder="请输入文章标题"
                  clearable
                  class="mr-2"
                  @keydown.enter="handleSearch"
              />
              <el-button icon="Search" class="main_primary_btn" @click="handleSearch">搜索</el-button>
            </div>
          </el-form-item>
          <el-button class="main_primary_date_btn mr-1" icon="Plus" @click="handleAdd">新增文章</el-button>
          <el-button icon="Refresh" class="main_danger_btn" @click="refreshItemList">刷新</el-button>
        </div>
      </div>
    </el-card>
    <div class="w-full h-auto grid grid-cols-4 gap-2">
      <el-skeleton
          :rows="7"
          animated
          :loading="isLoading"
      >
        <WeappItem
            v-if="itemList.length"
            v-for="(item, index) in itemList"
            :key="index"
            :id="item.id"
            :imgUrl="item.imgUrl"
            :content="item.content"
            :title="item.title"
            :date="item.date"
            @edit:id="handleEdit"
            @delete:id="handleDelete"
        />
        <NoData
            v-else
            title="暂无数据"
        />
      </el-skeleton>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
