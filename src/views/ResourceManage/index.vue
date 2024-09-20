<script setup lang="ts">
import {ref, watch} from "vue";
import LeftTreeComponent from "./_components/LeftTreeComponent.vue";
import TopBanner from "./_components/TopBanner.vue";
import ImageItem from "./_components/ImageItem.vue";
import BottomPagination from "./_components/BottomPagination.vue";
import GenerateDialog from "../../components/GenerateDialog.vue";




/** ===== 布局处理-start ===== **/
const layout = ref<string>('')
const gridCols = ref<string>('grid grid-cols-5 grid-rows-2')
function getLayout(item: string) {
  layout.value = item
}
function handleLayout() {
  switch (layout.value) {
    case '1':
      gridCols.value = 'grid grid-cols-5 grid-rows-2'
          break;
    case '2':
      gridCols.value = 'grid grid-cols-6 grid-rows-2'
          break;
  }
}
watch(() => layout.value, () => {
  handleLayout()
})
/** ===== 布局处理-end ===== **/

/** ===== 文件素材初始化-start ===== **/
interface imgTypes {
  name?: string;
  url?: string;
}
const fakeList = [
  {
    name: '文件1.jpg',
    url: 'https://picsum.photos/200/300?1'
  },
  {
    name: '文件2.jpg',
    url: 'https://picsum.photos/200/300?2'
  },
  {
    name: '文件3.jpg',
    url: 'https://picsum.photos/200/300?3'
  },
  {
    name: '文件4.jpg',
    url: 'https://picsum.photos/200/300?4'
  },
  {
    name: '文件5.jpg',
    url: 'https://picsum.photos/200/300?5'
  },
  {
    name: '文件6.jpg',
    url: 'https://picsum.photos/200/300?6'
  }
]
const imgList = ref<imgTypes[]>(fakeList)
/** ===== 文件素材初始化-end ===== **/

/** ===== 添加目录-start ===== **/
const dialogVisible = ref<boolean>(false)
function handleClose() {
  dialogVisible.value = false
}
function handleAdd(index: boolean) {
  dialogVisible.value = index
}
/** ===== 添加目录-end ===== **/
</script>

<template>
  <div class="w-full h-full flex p-4 flex-col">
    <el-card
        class="global-card w-full flex"
    >
      <!-- left tree menu -->
      <LeftTreeComponent
          @add-category="handleAdd"
      />
      <!-- right container -->
      <div
          style="width: calc(100% - 240px)"
          class="h-full flex flex-col p-4"
      >
        <TopBanner
            @change-layout="getLayout"
        />
        <!-- item container -->
        <div
            style="height: calc(100% - 96px)"
            class="w-full gap-2 p-4"
            :class="gridCols"
        >
          <ImageItem
              v-for="(item, index) in imgList"
              :key="index"
              :img-url="item.url"
              :img-name="item.name"
          />
        </div>
        <!-- pagination -->
        <div class="w-full h-10 flex">
          <BottomPagination />
        </div>
      </div>
    </el-card>
    <!-- generate dialog -->
    <generate-dialog
        v-model:visible="dialogVisible"
        :confirm-func="handleClose"
    >
      <span class="text-red-500">你确定要添加分类吗 ?</span>
    </generate-dialog>
  </div>
</template>

<style scoped>
:deep(.el-card) {
  padding: 0;
  box-shadow: none;
}
:deep(.el-card__body) {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
