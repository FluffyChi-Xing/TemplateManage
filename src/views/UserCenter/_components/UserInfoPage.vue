<script setup lang="ts">
import {ref, onMounted, reactive, computed} from "vue";
import {$request} from "../../../composabels/request";
import {useRouter} from "vue-router";

const router = useRouter()

/** ===== 用户数据初始化-start ===== **/
const userAvatar = ref<string>('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')
const UserData = ref<any>()
const requestUrl = ref<string>('https://jsonplaceholder.typicode.com/users/5')
const isLoading = ref<boolean>(false)
const userAddress = ref<UserInfoTypes.UserAddress>()
const userCompany = ref<UserInfoTypes.UserCompany>()
const emails = ref<string>('')
const userId = ref<number>()
const userName = ref<string>('')
const pickName = ref<string>('')
const phones = ref<string>('')
const websites = ref<string>('')
const DataUser = ref<any>()
async function initUserInfo() {
  isLoading.value = true
  await $request(requestUrl.value, "GET").then((res: any) => {
    UserData.value = res
  })
  const { address, company, email, id, name, phone, username, website } = UserData.value
  userAddress.value = address
  userCompany.value = company
  emails.value = email
  userId.value = id
  userName.value = username
  pickName.value = name
  phones.value = phone
  websites.value = website
  isLoading.value = false
}

const changeLink = computed(() => websites.value ? `<span class="text-gray-500 cursor-pointer text-[15px] ml-4 hover:text-[#79BBFF]">${websites.value}</span>` : '暂无')
// 外链拦截判断
function isBackLinks(item: string) {
  let baseUrl = window.location.origin
  if (item.includes(baseUrl)) {
    return item
  } else {
    router.push(`/backlinks/${item}`)
  }
}


onMounted(() => {
  initUserInfo()
})
/** ===== 用户数据初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-full grid grid-cols-10 gap-4">
      <div class="col-span-3 flex flex-col">
        <el-card
            class="global-card w-full flex p-4"
        >
          <el-skeleton
              :loading="isLoading"
              :rows="10"
              animated
          >
            <div class="w-full h-full flex flex-col">
              <el-avatar
                  :src="userAvatar"
                  shape="square"
                  :size="100"
                  class="mx-auto"
              />
              <el-divider
                  direction="horizontal"
              />
              <div class="w-auto h-auto flex flex-col">
                <div class="text-black text-xl my-2">
                  街道:
                  <span class="text-[15px] text-gray-500 ml-4">{{ userAddress?.street }}</span>
                </div>
                <div class="text-black text-xl my-2">
                  城市:
                  <span class="text-[15px] text-gray-500 ml-4">{{ userAddress?.city }}</span>
                </div>
                <div class="text-black text-xl my-2">
                  地址:
                  <span class="text-[15px] text-gray-500 ml-4">{{ userAddress?.suite }}</span>
                </div>
                <div class="text-black text-xl my-2">
                  邮编:
                  <span class="text-[15px] text-gray-500 ml-4">{{ userAddress?.zipcode }}</span>
                </div>
                <div class="text-black text-xl my-2">
                  经纬度:
                  <span class="text-[15px] text-gray-500 ml-4">精度: {{ userAddress?.geo.lat }} | 纬度: {{ userAddress?.geo.lng }}</span>
                </div>
              </div>
              <el-divider
                  direction="horizontal"
              />
              <div class="w-auto h-auto flex flex-col">
                <div class="text-black text-xl my-2">
                  公司名称:
                  <span class="text-[15px] text-gray-500 ml-4">{{ userCompany?.name }}</span>
                </div>
                <div class="text-black text-xl my-2">
                  行业:
                  <span class="text-[15px] text-gray-500 ml-4">{{ userCompany?.bs }}</span>
                </div>
                <div class="text-black text-xl my-2">
                  专业:
                  <span class="text-[15px] text-gray-500 ml-4">{{ userCompany?.catchPhrase }}</span>
                </div>
              </div>
              <el-divider
                  direction="horizontal"
              />
              <div
                  class="text-black text-xl h-auto flex"
              >
                网站:
                <div
                    v-html="changeLink"
                    @click="isBackLinks(websites)"
                />
              </div>
            </div>
          </el-skeleton>
        </el-card>
      </div>
      <div class="col-span-7 flex flex-col">
        <el-card
            class="global-card w-full flex flex-col p-4"
        >
          <el-skeleton
              :loading="isLoading"
              :rows="10"
              animated
          >
            <el-form
                v-model="DataUser"
                label-width="auto"
                class="w-60 mx-auto"
            >
              <el-form-item
                  label="用户ID"
              >
                <el-input
                    disabled
                    :palceholder="userId ? userId : '暂无'"
                />
              </el-form-item>
              <el-form-item
                  label="用户名"
              >
                <el-input
                    disabled
                    :palceholder="userName ? userName : '暂无'"
                />
              </el-form-item>
              <el-form-item
                  label="昵称"
              >
                <el-input
                    disabled
                    :palceholder="pickName ? pickName : '暂无'"
                />
              </el-form-item>
              <el-form-item
                  label="邮箱"
              >
                <el-input
                    disabled
                    :palceholder="emails ? emails : '暂无'"
                />
              </el-form-item>
              <el-form-item
                  label="电话"
              >
                <el-input
                    disabled
                    :palceholder="phones ? phones : '暂无'"
                />
              </el-form-item>
              <el-form-item>
               <div class="w-full h-auto flex justify-end">
                 <el-button
                     class="main_primary_btns"
                 >
                   修改
                 </el-button>
               </div>
              </el-form-item>
            </el-form>
          </el-skeleton>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
