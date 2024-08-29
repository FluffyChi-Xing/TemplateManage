<script setup lang="ts">
import { ref } from 'vue'
import {$stores} from "../../../composabels/stores";
import {ElMessage} from "element-plus";


/** =====  签到表单设置-start  ===== **/
const pageStore = $stores.usePageCommon.usePageCommon()
const checkState = ref<string>('1')
const checkType = ref<string>('1')
const checkNotice = ref<string>('0')
const checkScore = ref<number>(10)
function submitEdit() {
  if (checkState.value === '1') {
    pageStore.showCheckIn = true
  } else {
    pageStore.showCheckIn = false
  }
  ElMessage({
    type: 'success',
    message: '修改成功'
  })
}
/** =====  签到表单设置-end  ===== **/
</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-full h-auto">
      <el-card class="w-full h-auto global-card flex p-4">
        <div class="w-full h-auto flex flex-col">
          <el-tabs>
            <el-tab-pane label="用户签到配置">
              <div class="w-full justify-center h-auto flex">
                <el-form label-width="auto">
                  <el-form-item label="签到开关">
                    <el-radio-group v-model="checkState">
                      <el-radio value="1">开启</el-radio>
                      <el-radio value="0">关闭</el-radio>
                    </el-radio-group>
                    <el-alert title="签到开关" type="info" description="是否开启签到，如果关闭则将不显示签到入口" />
                  </el-form-item>
                  <el-form-item label="签到模式">
                    <el-radio-group v-model="checkType">
                      <el-radio value="1">无限制</el-radio>
                      <el-radio value="2">周循环</el-radio>
                      <el-radio value="3">月循环</el-radio>
                    </el-radio-group>
                    <el-alert title="签到模式" type="info" description="无限制，累积和连续签到不清零；周循环按周次清零；月循环，按月重新计算" />
                  </el-form-item>
                  <el-form-item label="签到提醒">
                    <el-radio-group v-model="checkNotice">
                      <el-radio value="1">开启</el-radio>
                      <el-radio value="0">关闭</el-radio>
                    </el-radio-group>
                    <el-alert type="info" description="是否开启签到提醒，提醒方式为站内消息" />
                  </el-form-item>
                  <el-form-item label="签到积分">
                    <el-input-number
                        v-model="checkScore"
                    />
                  </el-form-item>
                  <el-form-item>
                    <el-button class="main_primary_btn ml-auto" @click="submitEdit">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
:deep(.el-card__body) {
  padding: 0;
}
</style>
