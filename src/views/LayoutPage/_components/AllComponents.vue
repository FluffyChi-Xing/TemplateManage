<script setup lang="ts">
import DescriptionBlock from "../../../components/DescriptionBlock.vue";
import {$doc} from "../../../composabels/doc";
import ExampelShowCase from "../../../components/ExampelShowCase.vue";
import {onMounted, ref} from "vue";
import TableTemplate from "../../../components/TableTemplate.vue";
import TipComponent from "../../../components/TipComponent.vue";
import NoData from "../../../components/NoData.vue";
import hljs from "highlight.js";
/* ========================= 展示数据--start ========================= */
const tableLabel = ref<TablePageTypes.TableTemplate[]>([
  {
    label: '日期',
    prop: 'date',
    width: 280,
    overflow: null,
    children: null
  },
  {
    label: '姓名',
    prop: 'name',
    width: 280,
    overflow: null,
    children: null
  },
  {
    label: '地址',
    prop: 'address',
    width: 280,
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
/* ========================= 展示数据--end ========================= */

/* ========================= 树形组件--start ========================= */
const data: TablePageTypes.Tree[] = [
  {
    id: '#show-case',
    label: '展示组件',
  },
  {
    id: '#table-components',
    label: '表单组件',
  }
]
const defaultProps = {
  id: 'id',
  children: 'children',
  label: 'label',
}
const  handleNodeClick = (data: TablePageTypes.Tree) => {
  const container = document.querySelector('#container') as HTMLElement
  switch (data.id) {
    case '#show-case':
      container.scrollTo({ top: getOffset(data.id) || 0, behavior: 'smooth' })
      break
    case '#table-components':
      container.scrollTo({ top: getOffset(data.id) || 0, behavior: 'smooth' })
      break
  }
}
function getOffset(id: string): number | undefined {
  const el = document.querySelector(id) as HTMLElement
  return el?.offsetTop
}
/* ========================= 树形组件--end ========================= */
onMounted(() => {
  hljs.highlightAll()
})
</script>

<template>
  <div class="w-full h-full flex flex-row justify-between overflow-hidden">
    <div id="container" class="w-2/3 h-full flex px-4 flex-col smooth-scroll overflow-y-auto">
      <DescriptionBlock
          :title="$doc.OverViewDoc.overview_1[0]"
          :content="$doc.OverViewDoc.overview_1[1]"
      />
      <DescriptionBlock
          id="show-case"
          :title="$doc.OverViewDoc.overview_2[0]"
          :content="$doc.OverViewDoc.overview_2[1]"
      />
      <!-- #1 -->
      <ExampelShowCase
          :code="$doc.OverViewDoc.code_1"
      >
        <span class="w-auto h-auto bg-red-950 flex text-white text-4 font-bold">
          这是一个 {{ $doc.OverViewDoc.overview_2[0] }}
        </span>
      </ExampelShowCase>
      <!-- #2 -->
      <ExampelShowCase
          class="my-4"
          :code="$doc.OverViewDoc.code_2"
      >
        <TipComponent
            :title="$doc.OverViewDoc.tips_1.title"
            :sub-title="$doc.OverViewDoc.tips_1.subTitle"
            :default-tip="$doc.OverViewDoc.tips_1.tipsType"
            class="mb-4"
        />
        <TipComponent
            :title="$doc.OverViewDoc.tips_1.title"
            :sub-title="$doc.OverViewDoc.tips_1.subTitle"
            :success-tip="$doc.OverViewDoc.tips_1.tipsType"
            class="mb-4"
        />
        <TipComponent
            :title="$doc.OverViewDoc.tips_1.title"
            :sub-title="$doc.OverViewDoc.tips_1.subTitle"
            :warning-tip="$doc.OverViewDoc.tips_1.tipsType"
            class="mb-4"
        />
        <TipComponent
            :title="$doc.OverViewDoc.tips_1.title"
            :sub-title="$doc.OverViewDoc.tips_1.subTitle"
            :danger-tip="$doc.OverViewDoc.tips_1.tipsType"
            class="mb-4"
        />
      </ExampelShowCase>
      <!-- #3 -->
      <ExampelShowCase
          class="my-4"
          :code="$doc.OverViewDoc.code_3"
      >
        <NoData
            :description="$doc.OverViewDoc.noData_1"
        />
      </ExampelShowCase>
      <!-- #5 -->
      <ExampelShowCase
          :code="$doc.OverViewDoc.code_4"
          class="my-4"
      >
        <DescriptionBlock
            :title="$doc.OverViewDoc.overview_4[0]"
            :content="$doc.OverViewDoc.overview_4[1]"
        />
      </ExampelShowCase>
      <DescriptionBlock
          id="table-components"
          :title="$doc.OverViewDoc.overview_3[0]"
          :content="$doc.OverViewDoc.overview_3[1]"
      />
      <!-- #6 -->
      <ExampelShowCase
          :code="$doc.TableDoc.code_1"
      >
        <!-- slot #1 -->
        <TableTemplate
            :lab-prop="tableLabel"
            :data="tableData"
        />
      </ExampelShowCase>
    </div>
    <div class="w-1/3 h-full flex flex-col p-4 bg-white justify-start">
      <el-tree
          class="mx-auto"
          v-if="data.length"
          style="max-width: 400px"
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
      />
      <NoData
          v-else
      />
    </div>
  </div>
</template>

<style scoped>
:deep(.el-tree-node) {
  cursor: pointer;
  border: 1px solid transparent;
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--main-theme0color);
}
</style>
