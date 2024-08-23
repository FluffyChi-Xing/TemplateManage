<script setup lang="ts">
import {$enums} from "../composabels/enums";


withDefaults(defineProps<{
  data: any[],
  stripe?: boolean | null,
  maxHeight?: number | null,
  fit?: boolean | null,
  labProp: TablePageTypes.TableTemplate[],
  size?: string | null,
  border?: boolean | null,
  height?: number | string | null,
  highLight?: boolean | null,
  lazy?: boolean | null,
  multiSelect?: boolean | null,
  options?: TablePageTypes.TableOptions[],
  fixed?: string | null
}>(), {
  stripe: false,
  fit: false,
  size: '',
  border: false,
  height: '100%',
  highLight: false,
  lazy: false,
  multiSelect: false,
  options: () => [],
  fixed: 'right'
})
</script>

<template>
  <div
      class="w-full flex flex-col p-4"
      style="background-color: var(--el-bg-color)"
  >
    <el-table
        style="width: 100%"
        :data="data"
        :stripe="stripe"
        :max-height="maxHeight ? maxHeight : 250"
        :header-cell-style="{backgroundColor: '#f5f7fa', color: '#000', textAlign: 'center'}"
        :fit="fit"
        :size="$enums.String2Table(size ? size : 'medium')"
        :border="border"
        :highlight-current-row="highLight"
        :lazy="lazy"
    >
      <el-table-column v-if="multiSelect" type="selection" />
      <el-table-column
          v-if="labProp?.length > 0"
          v-for="(item,index) in labProp"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width ? item.width : '100%'"
          :show-overflow-tooltip="item.overflow"
      >
        <template v-if="item.children">
          <el-table-column
              v-for="(child, childIndex) in item.children"
              :key="`child-${childIndex}`"
              :prop="child.prop"
              :label="child.label"
              :width="child.width ? child.width : 'auto'"
              :show-overflow-tooltip="child.overflow"
          >
            <el-table-column
                v-if="child.children"
                v-for="(grandChild, grandChildIndex) in child.children"
                :key="`grandChild-${grandChildIndex}`"
                :prop="grandChild.prop"
                :label="grandChild.label"
                :width="grandChild.width ? grandChild.width : 'auto'"
                :show-overflow-tooltip="grandChild.overflow"
            />
          </el-table-column>
        </template>
      </el-table-column>
      <el-table-column
          v-if="options?.length"
          :fixed="$enums.String2Fixed(fixed ? fixed : 'right')"
          label="操作"
          width="100"
      >
        <el-button
            v-for="item in options"
            :size="item.size"
            :type="item.type"
            @click="item.option"
        >
          {{ item.text }}
        </el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--warning-theme-color-dark);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--danger-theme-color-dark);
}
</style>
