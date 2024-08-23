<script setup lang="ts">
import { computed, ref } from "vue";
import SvgIcon from "./SvgIcon.vue";
import {ElMessage, ElMessageBox} from "element-plus";

const props = withDefaults(defineProps<{
  avatar: string,
  name: string,
  icon: string,
  shape: 'circle' | 'square'
}>(), {
  name: '暂无',
  avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  shape: 'circle'
})
const loginStatus = ref<boolean>(true)
const iconName = computed(() => {
  if (props.avatar) {
    return
  } else {
    return props.icon ? props.icon : 'UserFilled'
  }
})

function handleLogOut() {
  ElMessageBox.confirm(
      '确定要登出吗?',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
  ).then(() => {
    ElMessage({
      type: 'success',
      message: '退出成功'
    })
    loginStatus.value = false
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '取消'
    })
  })
}
</script>

<template>
  <div class="w-full h-auto px-2 align-middle flex">
    <div class="w-auto h-auto flex mr-2">
      <el-avatar
          :src="avatar"
          :icon="iconName"
          :shape="shape"
      />
    </div>
    <div class="w-auto h-auto flex flex-col justify-center text-center text-white text-sm max-w-18 overflow-hidden text-ellipsis">
      <div class="w-full h-1/2 text-start">{{ name }}</div>
      <div class="w-full h-auto mt-1 flex align-middle justify-center">
        <el-tooltip
            effect="dark"
            content="在线状态"
            placement="bottom"
        >
          <SvgIcon
              :icon="loginStatus ? 'dengluzhuangtai-zaixian' : 'dengluzhuangtai-lixian'"
          />
        </el-tooltip>
      </div>
    </div>
    <div class="w-auto h-full flex flex-col ml-auto align-middle justify-center">
      <el-icon @click="handleLogOut" class="text-white cursor-pointer">
        <SvgIcon
            icon="tuichu"
            size="16px"
        />
      </el-icon>
    </div>
  </div>
</template>

<style scoped>

</style>
