import {defineStore} from "pinia";
import {ref} from "vue";

export const pageCommonStore = defineStore('pageCommon', () => {
    const editDrawer = ref(false)

    return { editDrawer }
})
