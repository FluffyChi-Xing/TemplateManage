import {defineStore} from "pinia";
import {ref} from "vue";

export const usePageCommon = defineStore('page', () => {
    const editDrawer = ref(false)
    const showCheckIn = ref(true)

    return { editDrawer, showCheckIn }
})
