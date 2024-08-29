<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {ElMessage} from "element-plus";
import TableTemplate from "../../../components/TableTemplate.vue";

const url = ref<string>()
const isLoading = ref<boolean>(false)
function initFrame() {
  isLoading.value = true
  setTimeout(() => {
    url.value = 'https://v5.crmeb.net/pages/index/index?mdType=iframeWindow'
    isLoading.value = false
  }, 1000)
}
onMounted(() => {
  initFrame()
})
function addTheme() {
  ElMessage({
    type: 'warning',
    message: '权限不足'
  })
}
/** =====  表格模板初始化-start  ===== **/
const defaultLables = [
  {
    label: '序号',
    prop: 'id',
    width: 80,
  },
  {
    label: '专题名称',
    prop: 'name',
    width: 200,
  },
  {
    label: '专题类型',
    prop: 'type',
    width: 200,
  },
  {
    label: '专题状态',
    prop: 'status',
    width: 200,
  },
  {
    label: '新增时间',
    prop: 'addTime',
    width: 200,
  },
  {
    label: '修改时间',
    prop: 'modifyTime',
    width: 200,
  }
]
const tableLables = ref<TablePageTypes.TableTemplate[]>(defaultLables)
const fakeData = ref<any[]>([
  {
    id: 1,
    name: '专题1',
    type: '类型1',
    status: '状态1',
    addTime: '2021-09-01',
    modifyTime: '2021-09-01',
  },
  {
    id: 2,
    name: '专题2',
    type: '类型2',
    status: '状态2',
    addTime: '2021-09-01',
    modifyTime: '2021-09-01',
  },
  {
    id: 3,
    name: '专题3',
    type: '类型3',
    status: '状态3',
    addTime: '2021-09-01',
    modifyTime: '2021-09-01',
  },
  {
    id: 4,
    name: '专题4',
    type: '类型4',
    status: '状态4',
    addTime: '2021-09-01',
    modifyTime: '2021-09-01',
  },
  {
    id: 5,
    name: '专题5',
    type: '类型5',
    status: '状态5',
    addTime: '2021-09-01',
    modifyTime: '2021-09-01',
  }
])
const options = ref<TablePageTypes.TableOptions[]>([
  {
    text: '编辑',
    type: 'text',
    size: 'small',
    option: () => {
      console.log('编辑')
    }
  },
  {
    text: '删除',
    type: 'text',
    size: 'small',
    option: () => {
      console.log('删除')
    }
  }
])
/** =====  表格模板初始化-end  ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-auto flex mb-4">
      <el-card class="global-card w-full flex h-auto justify-start p-4">
        <div class="w-full h-auto text-xl font-bold">
          首页装修
        </div>
      </el-card>
    </div>
    <div class="w-full h-auto">
      <el-card class="global-card h-auto w-full p-4">
        <div class="w-full h-auto  grid grid-cols-4 gap-4">
          <div class="w-full h-[600px] col-span-1">
            <el-skeleton
                :loading="isLoading"
                :rows="10"
                animated
            >
              <iframe :src="url" class="w-full h-full" frameborder="0" />
            </el-skeleton>
          </div>
          <div class="col-span-3 w-full h-auto flex flex-col">
            <div class="w-full h-auto flex justify-start mb-4">
              <el-button class="main_primary_btn" @click="addTheme">添加专题页</el-button>
            </div>
            <div class="w-full h-auto flex flex-col">
              <el-skeleton
                  :loading="isLoading"
                  animated
                  :rows="10"
              >
                <TableTemplate
                    :lab-prop="tableLables"
                    :data="fakeData"
                    border
                    :options="options"
                    fixed="right"
                />
              </el-skeleton>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
:deep(.el-card__body) {
  height: auto;
}
</style>
