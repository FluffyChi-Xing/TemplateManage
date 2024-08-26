<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {ElMessage} from "element-plus";
import TableTemplate from "../../../components/TableTemplate.vue";
import {$apis} from "../../../composabels/apis";

const isLoading = ref<boolean>(false)
/** ===== 获取假数据-start ===== **/
// const fakeUrl = ref<string>('http://jsonplaceholder.typicode.com/posts')
const fakeData = ref<any[]>([])
async function getFakeData() {
  isLoading.value = true
  // await $request(url, method).then(res => {
  //   fakeData.value = res
  //   ElMessage.success('获取数据成功')
  // })
  await $apis.getSampleData().then((res: any) => {
    fakeData.value = res
    ElMessage.success('获取数据成功')
  })
  filter(pageSize.value, currentPage.value)
  isLoading.value = false
}


onMounted(async () => {
  await getFakeData()
})
/** ===== 获取假数据-end ===== **/

/** ===== 搜索表格数据-start ===== **/
const searchValue = ref<string>('')
/** ===== 搜索表格数据-end ===== **/

/** ===== 表格初始化-start ===== **/
const pageSize = ref<number>(10)
const currentPage = ref<number>(1)
function filter(pageSize: number, pageNumber: number) {
  if (fakeData.value.length > 1) {
    tableData.value = fakeData.value.filter((item, index) => {
      return index >= pageSize * (pageNumber - 1) && index < pageSize * pageNumber
    })
  }
  else {
    tableData.value = fakeData.value
  }
}
const tableData = ref<any[]>()
const tableLabels = [
  {
    prop: 'id',
    label: '序号',
    width: 350
  },
  {
    prop: 'userId',
    label: '用户ID',
    width: 350
  },
  {
    prop: 'title',
    label: '标题',
    width: 350
  },
  {
    prop: 'body',
    label: '内容',
    width: 330
  }
]
// 换页器初始化
const totalItem = computed(() => fakeData.value.length)
function changePage(e: number) {
  isLoading.value = true
  setTimeout(() => {
    currentPage.value = e
    filter(pageSize.value, currentPage.value)
  }, 2000)
  isLoading.value = false
}

// 库存搜索
async function searchItem() {
  if (searchValue.value) {
    await $apis.searchItem(Number(searchValue.value)).then((res: any) => {
      // 清空表格数据
      tableData.value = []
      tableData.value = res
      ElMessage.success('搜索成功')
    })
  } else {
    // await getFakeData()
    ElMessage({
      type: 'warning',
      message: '请输入搜索内容'
    })
  }
}

// 刷新表格
async function refreshTable() {
  await getFakeData()
}

/** ===== 表格初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex justify-center p-4 scroll-bar-init overflow-hidden">
    <div class="w-full has-footer flex flex-col justify-center align-middle">
      <el-card class="global-card flex p-4 mb-4 h-auto">
        <div class="w-full h-full flex flex-col align-middle">
          <div class="w-full h-auto flex mb-4">
            <span class="text-xl text-black font-bold my-auto">库存管理</span>
            <div class="w-auto h-auto my-auto ml-auto flex">
              <el-button class="main_primary_btns_date">
                清空库存
              </el-button>
              <el-button class="main_primary_btns ml-2">
                新建库存
              </el-button>
            </div>
          </div>
          <div class="w-full h-auto flex justify-start">
            <el-form-item
                label="搜索"
                class="mr-2"
            >
              <el-input
                  v-model="searchValue"
                  placeholder="请输入搜索内容"
                  prefix-icon="Search"
                  @keydown.enter="searchItem"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                  class="main_primary_btns_date mr-2"
                  icon="Refresh"
                  @click="refreshTable"
              >
                刷新
              </el-button>
              <el-button
                  class="main_primary_btns"
                  icon="Search"
                  @click="searchItem"
              >
                搜索
              </el-button>
            </el-form-item>
          </div>
        </div>
      </el-card>
      <el-card class="global-card flex flex-col p-4">
        <div class="w-full h-full flex flex-col">
          <div
              class="w-full h-auto flex flex-col"
          >
            <TableTemplate
                v-loading="isLoading"
                :lab-prop="tableLabels"
                :data="tableData"
                high-light
                stripe
                border
                :max-height="460"
            />
          </div>
          <div class="w-full h-12 justify-between mt-auto flex">
            <span>共 {{ pageSize }} 条</span>
            <el-pagination
                layout="prev, pager, next"
                :total="totalItem"
                background
                @current-change="changePage"
            />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/element-edit.scss";
</style>
