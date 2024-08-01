<script setup lang="ts">
import { ref } from 'vue'
import TableTemplate from "../../../components/TableTemplate.vue";
/* ========================= 分页数据--start ========================= */
const totalItem = ref<number>(0)
/* ========================= 分页数据--end ========================= */

/* ========================= 消息表格数据--start ========================= */
const tableLabel = ref<TablePageTypes.TableTemplate[]>([
  {
    label: '日期',
    prop: 'date',
    width: 465,
    overflow: null,
    children: null
  },
  {
    label: '姓名',
    prop: 'name',
    width: 465,
    overflow: null,
    children: null
  },
  {
    label: '地址',
    prop: 'address',
    width: 465,
    overflow: null,
    children: null
  }
])
const tableData = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }
]
/* ========================= 消息表格数据--end ========================= */
</script>

<template>
  <div class="w-full h-full">
    <!-- #1 -->
    <div class="w-full h-16 flex">
      <el-card
          class="w-full h-full"
      >
        <div class="w-auto h-auto text-[15px] font-bold">
          消息中心
        </div>
      </el-card>
    </div>
    <!-- #2 -->
    <div
        class="w-full flex flex-col mt-4"
        style="height: calc(100% - 80px)"
    >
      <el-card
          class="w-full h-full"
      >
        <div style="height: 600px" class="w-full flex flex-col overflow-hidden">
          <div
              style="height: calc(100% - 32px)"
              class="w-full flex"
          >
            <TableTemplate
                :lab-prop="tableLabel"
                :data="tableData"
                :high-light="true"
                :border="true"
            />
          </div>
          <div class="w-full h-auto flex justify-between">
            <span>共 {{ totalItem }} 条</span>
            <el-pagination layout="prev, pager, next" :total="50" />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>

</style>
