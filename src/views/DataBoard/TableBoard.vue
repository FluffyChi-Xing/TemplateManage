<script setup lang="ts">
import TipComponent from "../../components/TipComponent.vue";
import { ref } from "vue";
import ExampelShowCase from "../../components/ExampelShowCase.vue";
import TableTemplate from "../../components/TableTemplate.vue";
import {$doc} from "../../composabels/doc";
import DescriptionBlock from "../../components/DescriptionBlock.vue";

/* ========================= 表格数据--start ========================= */
const tipsInfo_1 = ref<TablePageTypes.CustomTipType>({
  title: 'TIP',
  subTitle: '基础表格模块',
  tipsType: true,
})
const tipsInfo_2 = ref<TablePageTypes.CustomTipType>({
  title: 'TIP',
  subTitle: '带斑马纹的表格',
  tipsType: true,
})
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
/* ========================= 表格数据--start ========================= */
</script>

<template>
  <div class="w-full h-full flex p-4 scroll-bar-init">
    <div class="w-2/3 h-full block px-4 overflow-y-auto">
      <DescriptionBlock
          :title="$doc.TableDoc.des_1[0]"
          :content="$doc.TableDoc.des_1[1]"
      />
      <DescriptionBlock
          :title="$doc.TableDoc.des_2[0]"
          :content="$doc.TableDoc.des_2[1]"
      />
      <TipComponent
          :title="tipsInfo_1.title"
          :sub-title="tipsInfo_1.subTitle"
          :default-tip="tipsInfo_1.tipsType"
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
          :title="$doc.TableDoc.des_3[0]"
          :content="$doc.TableDoc.des_3[1]"
      />
      <TipComponent
          :title="tipsInfo_2.title"
          :sub-title="tipsInfo_2.subTitle"
          :default-tip="tipsInfo_2.tipsType"
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
            :max-height="250"
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
    <!-- Anchor -->
    <div class="w-1/3 h-full flex flex-col">

    </div>
  </div>
</template>

<style scoped>

</style>
