import {ref} from "vue";

export const code_1 = '<TableTemplate\n' +
    '   :lab-prop="tableLabel"\n' +
    '   :data="tableData"\n' +
    '   :stripe="true"\n' +
    '/>\n' +
    'const tableLabel = ref<TablePageTypes.TableTemplate[]>([\n' +
    '  {\n' +
    '    label: \'日期\',\n' +
    '    prop: \'date\',\n' +
    '    width: 280,\n' +
    '    fixed: null,\n' +
    '    options: null\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'姓名\',\n' +
    '    prop: \'name\',\n' +
    '    width: 280,\n' +
    '    fixed: null,\n' +
    '    options: null\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'地址\',\n' +
    '    prop: \'address\',\n' +
    '    width: 280,\n' +
    '    fixed: null,\n' +
    '    options: null\n' +
    '  }\n' +
    '])\n' + 'const tableData = [\n' +
    '  {\n' +
    '    date: \'2016-05-02\',\n' +
    '    name: \'王小虎\',\n' +
    '    address: \'上海市普陀区金沙江路 1518 弄\'\n' +
    '  },\n' +
    '  {\n' +
    '    date: \'2016-05-04\',\n' +
    '    name: \'王小虎\',\n' +
    '    address: \'上海市普陀区金沙江路 1517 弄\'\n' +
    '  },\n' +
    '  {\n' +
    '    date: \'2016-05-01\',\n' +
    '    name: \'王小虎\',\n' +
    '    address: \'上海市普陀区金沙江路 1519 弄\'\n' +
    '  },\n' +
    '  {\n' +
    '    date: \'2016-05-03\',\n' +
    '    name: \'王小虎\',\n' +
    '    address: \'上海市普陀区金沙江路 1516 弄\'\n' +
    '  }\n' +
    ']'
export const code_2 = '<TableTemplate\n' +
    '   :lab-prop="tableLabel"\n' +
    '   :data="tableData"\n' +
    '   :stripe="true"\n' +
    '/>'
export const code_3 = '<TableTemplate\n' +
    '   :lab-prop="tableLabel"\n' +
    '   :data="tableData"\n' +
    '   :stripe="true"\n' +
    '   :border="true"\n' +
    '/>'
export const code_4 = '<TableTemplate\n' +
    '   :lab-prop="table2Label"\n' +
    '   :data="table2Data"\n' +
    '   :stripe="true"\n' +
    '   :border="true"\n' +
    '/>\n' + 'const table2Label = ref<TablePageTypes.TableTemplate[]>([\n' +
    '  {\n' +
    '    label: \'日期\',\n' +
    '    prop: \'date\',\n' +
    '    width: 280,\n' +
    '    overflow: true\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'姓名\',\n' +
    '    prop: \'name\',\n' +
    '    width: 280,\n' +
    '    overflow: true\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'地址\',\n' +
    '    prop: \'address\',\n' +
    '    width: 280,\n' +
    '    overflow: true\n' +
    '  }\n' +
    '])'
export const code_5 = '<TableTemplate\n' +
    '   :lab-prop="table3Label"\n' +
    '   :data="table3Data"\n' +
    '   :stripe="true"\n' +
    '   :border="true"\n' +
    '   :max-height="250"\n' +
    '   :options="table3options"\n' +
    '/>\n' +
    '<el-button\n' +
    '   type="primary"\n' +
    '   icon="Plus"\n' +
    '   @click="addItems"\n' +
    '>\n' +
    '   <span>添加元素</span>\n' +
    '</el-button>\n' + 'const table3options = ref<TablePageTypes.TableOptions[]>([\n' +
    '  {\n' +
    '    text: \'删除\',\n' +
    '    size: \'small\',\n' +
    '    type: \'danger\',\n' +
    '    option: (e: number) => {\n' +
    '      table3Data.value.splice(e, 1);\n' +
    '    }\n' +
    '  }\n' +
    '])'
export const code_6 = 'const table4Label: TablePageTypes.TableTemplate[] = [\n' +
    '  {\n' +
    '    label: \'Date\',\n' +
    '    prop: \'date\',\n' +
    '    width: 150,\n' +
    '    overflow: null,\n' +
    '    children: null\n' +
    '  },\n' +
    '  {\n' +
    '    label: \'Delivery Info\',\n' +
    '    prop: null,\n' +
    '    width: null,\n' +
    '    overflow: null,\n' +
    '    children: [\n' +
    '      {\n' +
    '        label: \'Name\',\n' +
    '        prop: \'name\',\n' +
    '        width: 150,\n' +
    '        overflow: null,\n' +
    '        children: null\n' +
    '      },\n' +
    '      {\n' +
    '        label: \'Address Info\',\n' +
    '        prop: null,\n' +
    '        width: 600,\n' +
    '        overflow: true,\n' +
    '        children: [\n' +
    '          {\n' +
    '            label: \'State\',\n' +
    '            prop: \'state\',\n' +
    '            width: 150,\n' +
    '            overflow: null,\n' +
    '            children: null\n' +
    '          },\n' +
    '          {\n' +
    '            label: \'City\',\n' +
    '            prop: \'city\',\n' +
    '            width: 150,\n' +
    '            overflow: null,\n' +
    '            children: null\n' +
    '          },\n' +
    '          {\n' +
    '            label: \'Address\',\n' +
    '            prop: \'address\',\n' +
    '            width: 150,\n' +
    '            overflow: null,\n' +
    '            children: null\n' +
    '          },\n' +
    '          {\n' +
    '            label: \'Zip\',\n' +
    '            prop: \'zip\',\n' +
    '            width: 150,\n' +
    '            overflow: null,\n' +
    '            children: null\n' +
    '          }\n' +
    '        ]\n' +
    '      }\n' +
    '    ]\n' +
    '  }\n' +
    '];\n' +
    'const table4Data = [\n' +
    '  {\n' +
    '    date: \'2016-05-03\',\n' +
    '    name: \'Tom\',\n' +
    '    state: \'California\',\n' +
    '    city: \'Los Angeles\',\n' +
    '    address: \'No. 189, Grove St, Los Angeles\',\n' +
    '    zip: \'CA 90036\',\n' +
    '  },\n' +
    '  {\n' +
    '    date: \'2016-05-02\',\n' +
    '    name: \'Tom\',\n' +
    '    state: \'California\',\n' +
    '    city: \'Los Angeles\',\n' +
    '    address: \'No. 189, Grove St, Los Angeles\',\n' +
    '    zip: \'CA 90036\',\n' +
    '  },\n' +
    '  {\n' +
    '    date: \'2016-05-04\',\n' +
    '    name: \'Tom\',\n' +
    '    state: \'California\',\n' +
    '    city: \'Los Angeles\',\n' +
    '    address: \'No. 189, Grove St, Los Angeles\',\n' +
    '    zip: \'CA 90036\',\n' +
    '  },\n' +
    '  {\n' +
    '    date: \'2016-05-01\',\n' +
    '    name: \'Tom\',\n' +
    '    state: \'California\',\n' +
    '    city: \'Los Angeles\',\n' +
    '    address: \'No. 189, Grove St, Los Angeles\',\n' +
    '    zip: \'CA 90036\',\n' +
    '  }\n' +
    ']\n' + '<TableTemplate\n' +
    '   :lab-prop="table4Label"\n' +
    '   :data="table4Data"\n' +
    '   :stripe="true"\n' +
    '   :border="true"\n' +
    '/>'
export const code_7 = '<TableTemplate\n' +
    '   :lab-prop="table2Label"\n' +
    '   :data="table2Data"\n' +
    '   :stripe="true"\n' +
    '   :border="true"\n' +
    '   :high-light="true"\n' +
    '/>'
export const code_8 = '<TableTemplate\n' +
    '   :lab-prop="table2Label"\n' +
    '   :data="table2Data"\n' +
    '   :stripe="true"\n' +
    '   :border="true"\n' +
    '   :multi-select="true"\n' +
    '/>'
export const des_1 = [
    'Table 表格',
    '基于 Element-Plus Table 组件的二次封装，展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。'
]
export const des_2 = [
    '基础表格',
    '基础的表格展示用法。'
]
export const des_3 = [
    '带斑马纹的表格',
    '带斑马纹的表格展示用法。'
]
export const des_4 = [
    '带边框的表格',
    '带边框的表格展示用法。'
]
export const des_5 = [
    '显示溢出工具提示的表格',
    '当内容太长时，它会分成多行。您可以使用 show-overflow-tooltip 将其保留在一行中。'
]
export const des_6 = [
    '流体高度',
    '当数据量动态变化时，可以为 Table 设置一个最大高度。通过设置 max-height 属性为 el-table 指定最大高度。 此时若表格所需的高度大于最大高度，则会显示一个滚动条。'
]
export const des_7 = [
    '多级表头',
    '数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。只需要将el-table-column 放置于el-table-column 中，你可以实现组头。'
]
export const des_8 = [
    '单选',
    '选择单行数据时使用色块表示。'
]
export const des_9 = [
    '多选',
    '你也可以选择多行。'
]
export const tipsInfo_1 = ref<TablePageTypes.CustomTipType>({
    title: 'TIP',
    subTitle: '基础表格模块',
    tipsType: true,
})
export const tipsInfo_2 = ref<TablePageTypes.CustomTipType>({
    title: 'TIP',
    subTitle: '带斑马纹的表格',
    tipsType: true,
})
