<script setup lang="ts">
import TipComponent from "../../../components/TipComponent.vue";
import {onMounted, ref} from "vue";
import ExampelShowCase from "../../../components/ExampelShowCase.vue";
import TableTemplate from "../../../components/TableTemplate.vue";
import {$doc} from "../../../composabels/doc";
import DescriptionBlock from "../../../components/DescriptionBlock.vue";
import NoData from "../../../components/NoData.vue";
import hljs from "highlight.js";

/* ========================= 表格数据--start ========================= */
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
const table2Label = ref<TablePageTypes.TableTemplate[]>([
  {
    label: '日期',
    prop: 'date',
    width: 280,
    overflow: true,
    children: null
  },
  {
    label: '姓名',
    prop: 'name',
    width: 280,
    overflow: true,
    children: null
  },
  {
    label: '地址',
    prop: 'address',
    width: 280,
    overflow: true,
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
const table2Data = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '新疆维吾尔自治区伊犁哈萨克自治州察布查尔锡伯自治县\n' +
        '甘肃省临夏回族自治州积石山保安族东乡族撒拉族自治县'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '新疆维吾尔自治区伊犁哈萨克自治州察布查尔锡伯自治县\n' +
        '甘肃省临夏回族自治州积石山保安族东乡族撒拉族自治县'
  }
]
const table3Label = ref<TablePageTypes.TableTemplate[]>([
  {
    label: '日期',
    prop: 'date',
    width: 250,
    overflow: true,
    children: null
  },
  {
    label: '姓名',
    prop: 'name',
    width: 250,
    overflow: true,
    children: null
  },
  {
    label: '地址',
    prop: 'address',
    width: 250,
    overflow: false,
    children: null
  }
])
const table3Data = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '新疆维吾尔自治区伊犁哈萨克自治州察布查尔锡伯自治县\n' +
        '甘肃省临夏回族自治州积石山保安族东乡族撒拉族自治县'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '新疆维吾尔自治区伊犁哈萨克自治州察布查尔锡伯自治县\n' +
        '甘肃省临夏回族自治州积石山保安族东乡族撒拉族自治县'
  }
])
const table3options = ref<TablePageTypes.TableOptions[]>([
  {
    text: '删除',
    size: 'small',
    type: 'danger',
    option: (e: number) => {
      table3Data.value.splice(e, 1);
    }
  }
])
function addItems() {
  console.log('okk')
  table3Data.value.push({
    date: '2016-05-02',
    name: '王小虎',
    address: '新疆维吾尔自治区伊犁哈萨克自治州察布查尔锡伯自治县\n' +
        '甘肃省临夏回族自治州积石山保安族东乡族撒拉族自治县'
  })
}
const table4Label: TablePageTypes.TableTemplate[] = [
  {
    label: 'Date',
    prop: 'date',
    width: 150,
    overflow: null,
    children: null
  },
  {
    label: 'Delivery Info',
    prop: null,
    width: null,
    overflow: null,
    children: [
      {
        label: 'Name',
        prop: 'name',
        width: 150,
        overflow: null,
        children: null
      },
      {
        label: 'Address Info',
        prop: null,
        width: 600,
        overflow: true,
        children: [
          {
            label: 'State',
            prop: 'state',
            width: 150,
            overflow: null,
            children: null
          },
          {
            label: 'City',
            prop: 'city',
            width: 150,
            overflow: null,
            children: null
          },
          {
            label: 'Address',
            prop: 'address',
            width: 150,
            overflow: null,
            children: null
          },
          {
            label: 'Zip',
            prop: 'zip',
            width: 150,
            overflow: null,
            children: null
          }
        ]
      }
    ]
  }
];
const table4Data = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  }
]
/* ========================= 表格数据--end ========================= */

/* ========================= 树形组件--start ========================= */
const handleNodeClick = (data: TablePageTypes.Tree) => {
  const container = document.querySelector('#container') as HTMLElement
  // 根据id跳转到对应的锚点
  switch (data.id) {
    case '#base-table':
      container.scrollTo({
        top: getOffset(data.id),
        behavior: 'smooth'
      })
      break;
    case '#stripe-table':
      container.scrollTo({
        top: getOffset(data.id),
        behavior: 'smooth'
      })
      break;
    case '#border-table':
      container.scrollTo({
        top: getOffset(data.id),
        behavior: 'smooth'
      })
      break;
    case '#overflow-table':
      container.scrollTo({
        top: getOffset(data.id),
        behavior: 'smooth'
      })
      break;
    case '#fluid-height-table':
      container.scrollTo({
        top: getOffset(data.id),
        behavior: 'smooth'
      })
      break;
    case '#multi-level-header-table':
      container.scrollTo({
        top: getOffset(data.id),
        behavior: 'smooth'
      })
      break;
    case '#fixed-header-table':
      container.scrollTo({
        top: getOffset(data.id),
        behavior: 'smooth'
      })
      break;
    case '#fixed-column-table':
      container.scrollTo({
        top: getOffset(data.id),
        behavior: 'smooth'
      })
      break;
  }
}
// 获取锚点到顶部的offset
function getOffset(id: string) {
  const el = document.querySelector(id) as HTMLElement
  return el.offsetTop
}

const data: TablePageTypes.Tree[] = [
  {
    id: '#base-table',
    label: '基础表格',
  },
  {
    id: '#stripe-table',
    label: '带斑马纹的表格',
  },
  {
    id: '#border-table',
    label: '带边框的表格',
  },
  {
    id: '#overflow-table',
    label: '显示溢出工具提示的表格'
  },
  {
    id: '#fluid-height-table',
    label: '流体高度的表格',
  },
  {
    id: '#multi-level-header-table',
    label: '多级表头的表格',
  },
  {
    id: '#fixed-header-table',
    label: '带单选的表格',
  },
  {
    id: '#fixed-column-table',
    label: '带多选的表格',
  }
]

const defaultProps = {
  id: 'id',
  children: 'children',
  label: 'label',
}
/* ========================= 树形组件--end ========================= */
onMounted(() => {
  hljs.highlightAll()
})
</script>

<template>
  <div class="w-full h-full flex p-4 scroll-bar-init">
    <div id="container" class="w-2/3 h-full block px-4 smooth-scroll overflow-y-auto">
      <DescriptionBlock
          :title="$doc.TableDoc.des_1[0]"
          :content="$doc.TableDoc.des_1[1]"
      />
      <DescriptionBlock
          id="base-table"
          :title="$doc.TableDoc.des_2[0]"
          :content="$doc.TableDoc.des_2[1]"
      />
      <TipComponent
          :title="$doc.TableDoc.tipsInfo_1.value.title"
          :sub-title="$doc.TableDoc.tipsInfo_1.value.subTitle"
          :default-tip="$doc.TableDoc.tipsInfo_1.value.tipsType"
          class="mb-4"
      />
      <!-- example #1 -->
      <ExampelShowCase
          :code="$doc.TableDoc.code_1"
      >
        <!-- slot #1 -->
        <TableTemplate
            :lab-prop="tableLabel"
            :data="tableData"
        />
      </ExampelShowCase>
      <DescriptionBlock
          id="stripe-table"
          :title="$doc.TableDoc.des_3[0]"
          :content="$doc.TableDoc.des_3[1]"
      />
      <TipComponent
          :title="$doc.TableDoc.tipsInfo_2.value.title"
          :sub-title="$doc.TableDoc.tipsInfo_2.value.subTitle"
          :default-tip="$doc.TableDoc.tipsInfo_2.value.tipsType"
          class="my-4"
      />
      <!-- example #2 -->
      <ExampelShowCase
          :code="$doc.TableDoc.code_2"
      >
        <!-- slot #1 -->
        <TableTemplate
            :lab-prop="tableLabel"
            :data="tableData"
            :stripe="true"
        />
      </ExampelShowCase>
     <DescriptionBlock
         id="border-table"
         :title="$doc.TableDoc.des_4[0]"
         :content="$doc.TableDoc.des_4[1]"
     />
      <!-- example #3 -->
      <ExampelShowCase
          :code="$doc.TableDoc.code_3"
      >
        <!-- slot #1 -->
        <TableTemplate
            :lab-prop="tableLabel"
            :data="tableData"
            :stripe="true"
            :border="true"
        />
      </ExampelShowCase>
      <DescriptionBlock
          id="overflow-table"
          :title="$doc.TableDoc.des_5[0]"
          :content="$doc.TableDoc.des_5[1]"
      />
      <!-- example #4 -->
      <ExampelShowCase
          :code="$doc.TableDoc.code_4"
      >
        <!-- slot #1 -->
        <TableTemplate
            :lab-prop="table2Label"
            :data="table2Data"
            :stripe="true"
            :border="true"
        />
      </ExampelShowCase>
      <DescriptionBlock
          id="fluid-height-table"
          :title="$doc.TableDoc.des_6[0]"
          :content="$doc.TableDoc.des_6[1]"
      />
      <!-- example #5 -->
      <ExampelShowCase
          :code="$doc.TableDoc.code_5"
      >
        <!-- slot #1 -->
        <TableTemplate
            :lab-prop="table3Label"
            :data="table3Data"
            :stripe="true"
            :border="true"
            :max-height="350"
            :options="table3options"
        />
        <el-button
            type="primary"
            icon="Plus"
            @click="addItems"
        >
          <span>添加元素</span>
        </el-button>
      </ExampelShowCase>
      <DescriptionBlock
          id="multi-level-header-table"
          :title="$doc.TableDoc.des_7[0]"
          :content="$doc.TableDoc.des_7[1]"
      />
      <!-- example #6 -->
      <ExampelShowCase
          :code="$doc.TableDoc.code_6"
      >
        <!-- slot #1 -->
        <TableTemplate
            :lab-prop="table4Label"
            :data="table4Data"
            :stripe="true"
            :border="true"
        />
      </ExampelShowCase>
      <DescriptionBlock
          id="fixed-header-table"
          :title="$doc.TableDoc.des_8[0]"
          :content="$doc.TableDoc.des_8[1]"
      />
      <!-- example #7 -->
      <ExampelShowCase
          :code="$doc.TableDoc.code_7"
      >
        <!-- slot #1 -->
        <TableTemplate
            :lab-prop="table2Label"
            :data="table2Data"
            :stripe="true"
            :border="true"
            :high-light="true"
        />
      </ExampelShowCase>
      <DescriptionBlock
          id="fixed-column-table"
          :title="$doc.TableDoc.des_9[0]"
          :content="$doc.TableDoc.des_9[1]"
      />
      <!-- example #8 -->
      <ExampelShowCase
          :code="$doc.TableDoc.code_8"
      >
        <!-- slot #1 -->
        <TableTemplate
            :lab-prop="table2Label"
            :data="table2Data"
            :stripe="true"
            :border="true"
            :multi-select="true"
        />
      </ExampelShowCase>
    </div>
    <!-- Tree -->
    <div class="w-1/3 h-full flex flex-col p-4 justify-start">
      <el-card class="global-card w-full h-auto flex flex-col sticky top-[50px]">
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
      </el-card>
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
