<script setup lang="ts">
import { useRoute } from "vue-router";
import {onMounted, ref} from "vue";
import {$apis} from "../../composabels/apis";
import DescriptionBlock from "../../components/DescriptionBlock.vue";
import { useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const index = ref<any>()
function getParams() {
  index.value = route.params.id
  // console.log(index.value)
}
onMounted(() => {
  getParams()
})
function goBack() {
  router.back()
}

/** ===== 文章详情初始化-start ===== **/
interface returnData {
  id: number,
  name: string,
  images: string,
  author: string,
  mp3_url: string,
  comment_nickname: string,
  text: string,
}
interface musicData {
  link: string,
  songId: number,
  title: string,
  author: string,
  lrc: string,
  url: string,
  pic: string,
}
const detailData = ref<returnData>()
const detailMusic = ref<musicData>()
const musicId = ref<number>()
const isLoading = ref<boolean>(false)
async function getDetailMusic(id: number) {
  await $apis.getDetailMusic(id).then((res: any) => {
    detailMusic.value = res.data
  })
}
async function getDetailPaper() {
  await $apis.getMoreInfo(index.value).then((res: any) => {
    detailData.value = res.data
    const url = new URL(res.data?.mp3_url)
    const params = new URLSearchParams(url.search)
    musicId.value = Number(params.get('id'))
    // console.log(detailData.value)
  })
}
onMounted(async () => {
  isLoading.value = true
  await getDetailPaper()
  await getDetailMusic(Number(musicId.value))
  isLoading.value = false
})
/** ===== 文章详情初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <el-card class="global-card w-full p-4 flex">
      <el-skeleton
          :rows="15"
          animated
          :loading="isLoading"
      >
        <div class="w-full h-full flex flex-col">
          <div class="w-full h-auto flex justify-end">
            <el-button class="main_primary_date_btn" @click="goBack">返回</el-button>
          </div>
          <DescriptionBlock
              :title="String(detailData?.name)"
              :content="String(detailData?.text)"
          />
          <div class="w-full h-60 grid grid-cols-2 gap-4 mb-4">
            <img :src="detailData?.images" alt="" loading="lazy" class="w-60 h-60 object-cover" />
            <div class="w-full h-full flex flex-col">
              <div class="w-full h-auto flex flex-col">
                <div class="w-full h-auto text-xl font-bold">
                  歌手: <span class="w-auto h-auto text-gray-500">{{ detailMusic?.author }}</span>
                </div>
                <div class="w-full h-auto text-xl font-bold">
                  标题: <span class="w-auto h-auto text-gray-500">{{ detailMusic?.title }}</span>
                </div>
              </div>
              <audio :src="detailData?.mp3_url" controls class="w-full h-full" />
            </div>
          </div>
          <div class="w-full flex justify-center">
            <div class="w-auto h-auto flex text-gray-500">{{ detailMusic?.lrc }}</div>
          </div>
        </div>
      </el-skeleton>
    </el-card>
  </div>
</template>

<style scoped>
@import "@/assets/css/element-edit.scss";
</style>
