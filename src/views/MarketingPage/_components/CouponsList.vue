<script setup lang="ts">
import {computed, ref} from 'vue'
import TableTemplate from "../../../components/TableTemplate.vue";
import GenerateDialog from "../../../components/GenerateDialog.vue";

/** ========== 页头表单初始化-start ========== **/
const couponName = ref<string>('') // 优惠券名称
const couponType = ref<string>('') // 优惠券类型
const isEffective = ref<string>('1') // 是否有效
/** ========== 页头表单初始化-end =========== **/

/** ========== 表单初始化-start ========== **/
interface selectTypes {
  label: string,
  value: string
}
const defaultTable = computed(() => [
  {
    label: '序号',
    prop: 'id',
    width: 80,
    overflow: null,
    children: null,
  },
  {
    label: '优惠券名称',
    prop: 'couponName',
    width: 200,
    overflow: null,
    children: null,
  },
  {
    label: '优惠券类型',
    prop: 'couponType',
    width: 200,
    overflow: null,
    children: null,
  },
  {
    label: '数量',
    prop: 'number',
    width: 200,
    overflow: null,
    children: null,
  },
  {
    label: '优惠券面值',
    prop: 'couponValue',
    width: 200,
    overflow: null,
    children: null,
  },
  {
    label: '有效期',
    prop: 'validity',
    width: 200,
    overflow: null,
    children: null,
  },
  {
    label: '是否有效',
    prop: 'isEffective',
    width: 200,
    overflow: null,
    children: null,
  }
])
const tableLables = ref<TablePageTypes.TableTemplate[]>(defaultTable.value)
// 假数据
const fakeData = ref<any[]>([
  {
    id: 1,
    couponName: '优惠券1',
    couponType: '满减券',
    number: 100,
    couponValue: 100,
    validity: '2021-10-01至2021-10-31',
    isEffective: true
  },
  {
    id: 2,
    couponName: '优惠券2',
    couponType: '折扣券',
    number: 100,
    couponValue: 100,
    validity: '2021-10-01至2021-10-31',
    isEffective: true
  }
])
const options = ref<TablePageTypes.TableOptions[]>([
  {
    text: '编辑',
    size: 'small',
    type: 'text',
    option: (row: any) => {
      dialogVisible.value = true
      editName.value = row.couponName
      editType.value = row.couponType
    }
  }
])
const pageSize = ref<number>(10)
const totalNumber = ref<number>(fakeData.value.length)
const typeOptions = ref<selectTypes[]>([
  {
    label: '折扣券',
    value: '折扣券'
  },
  {
    label: '满减券',
    value: '满减券'
  },
  {
    label: '商品券',
    value: '商品券'
  }
])
/** ========== 表单初始化-end =========== **/

/** ========== 表单编辑-start ========== **/
const editName = ref<string>('')
const editType = ref<string>('')
const editNumber = ref<number>(0)
const editValue = ref<number>(0)
const editValidity = ref<string>('')
const namePlaceholder = ref<string>('请输入编辑名称')
const editEffective = ref<boolean>(true)
const dialogVisible = ref<boolean>(false)
function editTable() {
  console.log('编辑')
}
function addItem() {
  fakeData.value.push({
    id: fakeData.value.length + 1,
    couponName: '优惠券' + (fakeData.value.length + 1),
    couponType: '折扣券',
    number: 100,
    couponValue: 100,
    validity: '2021-10-01至2021-10-31',
    isEffective: true
  })
}
/** ========== 表单编辑-end =========== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-auto flex mb-4">
      <el-card class="w-full h-auto global-card flex flex-col p-4">
        <div class="w-full h-auto text-xl font-bold">优惠券列表</div>
        <div class="w-full h-auto flex flex-col mt-2">
          <el-form
              inline
              label-width="auto"
          >
            <el-form-item label="优惠券名称">
              <div class="w-full h-auto flex">
                <el-input
                    v-model="couponName"
                    placeholder="请输入优惠券名称"
                    clearable
                />
                <el-button icon="Search" class="main_primary_btn ml-2">搜索</el-button>
              </div>
            </el-form-item>
            <el-form-item label="优惠券类型">
              <el-input
                  v-model="couponType"
                  placeholder="请输入优惠券类型"
                  clearable
              />
            </el-form-item>
            <el-form-item label="是否有效">
              <el-radio-group
                  v-model="isEffective"
              >
                <el-radio value="1">是</el-radio>
                <el-radio value="2">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <el-card class="global-card w-full flex h-auto">
      <div class="w-full h-full flex flex-col justify-center">
        <div class="w-full h-auto flex justify-start p-4">
          <el-button @click="addItem" class="main_primary_btn">添加优惠券</el-button>
        </div>
        <TableTemplate
            border
            :options="options"
            :lab-prop="tableLables"
            :data="fakeData"
            fixed="right"
        />
        <div class="w-full h-12 px-4 justify-between mt-auto flex">
          <span>共 {{ pageSize }} 条</span>
          <el-pagination
              layout="prev, pager, next"
              :total="totalNumber"
              background
          />
        </div>
      </div>
    </el-card>
    <!-- edit dialog -->
    <GenerateDialog
        v-model:visible="dialogVisible"
        :is-default="false"
        title="优惠券编辑"
        :confirm-func="editTable"
    >
      <div class="w-full h-auto p-4">
        <el-form label-width="auto">
          <el-form-item label="编辑名称">
            <el-input
                v-model="editName"
                clearable
                :placeholder="namePlaceholder"
            />
          </el-form-item>
          <el-form-item label="编辑类型">
            <el-select
                v-model="editType"
                placeholder="请选择编辑类型"
            >
              <el-option
                  v-for="(item, index) in typeOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </GenerateDialog>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
:deep(.el-form--default) {
  padding: 0;
}
</style>
